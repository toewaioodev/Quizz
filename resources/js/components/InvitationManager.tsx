import { useChannel } from 'ably/react';
import { ChannelProvider } from 'ably/react';
import { useEffect, useState } from 'react';
import InvitationModal from './InvitationModal';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

export default function InvitationManager() {
    const { auth } = usePage<SharedData>().props;
    const [invitation, setInvitation] = useState<{
        inviterName: string;
        inviterAvatar?: string;
        matchId: string;
    } | null>(null);

    if (!auth.user) return null;

    const privateChannelName = `private-user-${auth.user.id}`;
    const presenceChannelName = 'global-presence';

    return (
        <>
            <ChannelProvider channelName={privateChannelName}>
                <InvitationListener channelName={privateChannelName} setInvitation={setInvitation} />
            </ChannelProvider>

            <ChannelProvider channelName={presenceChannelName}>
                <PresenceReporter channelName={presenceChannelName} user={auth.user} />
            </ChannelProvider>

            {invitation && (
                <InvitationModal
                    isOpen={true}
                    inviterName={invitation.inviterName}
                    inviterAvatar={invitation.inviterAvatar}
                    matchId={invitation.matchId}
                    onClose={() => setInvitation(null)}
                />
            )}
        </>
    );
}

function InvitationListener({ channelName, setInvitation }: { channelName: string, setInvitation: (inv: any) => void }) {
    useChannel(channelName, (message: any) => {
        if (message.name === 'invite') {
            setInvitation({
                inviterName: message.data.inviter_name,
                inviterAvatar: message.data.inviter_avatar,
                matchId: message.data.match_id,
            });
            new Audio('/sounds/notification.mp3').play().catch(() => { });
        } else if (message.name === 'match-accepted') {
            // Redirect Inviter to Arena
            if (message.data.match_id) {
                window.location.href = `/arena/${message.data.match_id}`;
            }
        }
    });

    return null;
}

function PresenceReporter({ channelName, user }: { channelName: string, user: any }) {
    const { channel } = useChannel(channelName);

    useEffect(() => {
        if (!channel) return;

        channel.presence.enter({
            name: user.name,
            id: user.id,
            profile_photo_url: user.profile_photo_url,
            status: 'online',
        });

        return () => {
            channel.presence.leave();
        };
    }, [channel, user.id]);

    return null;
}
