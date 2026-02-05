export interface AuthState {
    token: string | null;
    setToken: (t: string) => void;
    clearToken: () => void;
    isAuthenticated: () => boolean;
};

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
    };
};

export interface CurrentUser {
    _id: string;
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}