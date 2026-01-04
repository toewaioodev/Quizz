import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { useMemo } from 'react';
import InvitationManager from './InvitationManager';
import OnlineUsersWidget from './OnlineUsersWidget';

export default function GlobalAblyProvider({ children }: { children: React.ReactNode }) {
    const { auth, ably_key } = usePage<SharedData>().props;

    const client = useMemo(() => {
        if (!auth.user || !ably_key) return null;
        return new Ably.Realtime({ key: ably_key, clientId: String(auth.user.id) });
    }, [auth.user?.id, ably_key]);

    if (!client) {
        return <>{children}</>;
    }

    return (
        <AblyProvider client={client}>
            <InvitationManager />
            {/* <OnlineUsersWidget /> */}
            {children}
        </AblyProvider>
    );
}
