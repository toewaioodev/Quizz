export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ably_key: string;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    profile_photo_path?: string;
    profile_photo_url?: string;
    points: number;
    wins: number;
    losses: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    updated_at: string;
    settings?: {
        difficulty?: string;
    };
    [key: string]: unknown; // This allows for additional properties...
}
