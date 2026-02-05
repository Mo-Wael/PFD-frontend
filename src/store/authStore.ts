import { create } from "zustand";
import type { AuthState } from "../types/Auth";

export const useAuthStore = create<AuthState>((set, get) => ({
    token: localStorage.getItem("token"),
    setToken: (token) => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
        set({ token });
    },
    clearToken: () => {
        localStorage.removeItem("token");
        set({ token: null });
    },
    isAuthenticated: () => !!get().token,
}));