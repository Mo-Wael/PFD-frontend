import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, getCurrentUser, register, updateUser } from "../services/Auth";
import { useAuthStore } from "../store/authStore";
import type { UpdatedUser } from "../types/Auth";

export const useCurrentUser = () => {
    const token = useAuthStore((s) => s.token);

    return useQuery({
        queryKey: ["currentUser"],
        queryFn: () => getCurrentUser(),
        enabled: !!token,
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updatedUser: UpdatedUser) => updateUser(updatedUser),
        onSuccess: (data) => {
            // console.log("data", data);
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
        onError: (error) => {
            // console.log("error", error);
        }
    })
}

export const useLogin = () => {
    const setToken = useAuthStore((s) => s.setToken);

    return useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) =>
            login({ email, password }),

        onSuccess: (data) => {
            setToken(data.token);
        },
    });
};

export const useRegister = () => {
    const setToken = useAuthStore((s) => s.setToken);

    return useMutation({
        mutationFn: ({ fullName, email, password }: { fullName: string, email: string, password: string }) =>
            register({ fullName, email, password }),

        onSuccess: (data) => {
            setToken(data.token);
        },
    });
}

export const useLogout = () => {
    const clearToken = useAuthStore((s) => s.clearToken);
    return useMutation({
        mutationFn: async () => {
            clearToken();
        },
    })
}