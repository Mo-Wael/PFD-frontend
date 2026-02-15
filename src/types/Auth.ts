export interface AuthState {
    token: string | null;
    setToken: (t: string) => void;
    clearToken: () => void;
    isAuthenticated: () => boolean;
};

export interface AuthResponse {
    status: string;
    data: {
        token: string;
        user: {
            id: string;
            email: string;
        };
    }
};

export interface CurrentUser {
    status: string;
    data: {
        _id: string | undefined;
        fullName: string;
        email: string;
        createdAt: string;
        updatedAt: string;
    }
}