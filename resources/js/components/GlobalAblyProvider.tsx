import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { useMemo } from 'react';
import InvitationManager from './InvitationManager';

export default function GlobalAblyProvider({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;

    const client = useMemo(() => {
        if (!auth.user) return null;
        return new Ably.Realtime({ authUrl: '/ably/auth', authMethod: 'GET' });
    }, [auth.user?.id]);

    if (!client) {
        return <>{children}</>;
    }

    return (
        <AblyProvider client={client}>
            <InvitationManager />
            {children}
        </AblyProvider>
    );
}
