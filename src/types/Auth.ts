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
        phoneNumber: string;
        address: string;
        profileImage: string;
        role: "user" | "admin";
        createdAt: string;
        updatedAt: string;
    }
}

export interface UpdatedUserData {
    fullName: string;
    phoneNumber: string;
    address: string;
    profileImage: File | string | null;
}

export type UpdatedUser = UpdatedUserData | FormData;