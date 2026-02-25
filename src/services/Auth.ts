import api from "./api";
import type { CurrentUser, UpdatedUser } from "../types/Auth";

export const login = async ({ email, password }: { email: string, password: string }) => {
    const response = await api.post('/user/login', { email, password })
    // console.log("response", response.data);
    return response.data.data
}

export const register = async ({ fullName, email, password }: { fullName: string, email: string, password: string }) => {
    const response = await api.post('/user/register', { fullName, email, password })
    return response.data.data
}

export const getCurrentUser = async () => {
    const response = await api.get<CurrentUser>('/user/me')
    return response.data.data
}

export const deleteUser = async (userId: string) => {
    const response = await api.delete(`/user/${userId}`)
    return response.data.data
}

// export const updateUser = async (userId: string, updatedUser: UpdatedUser) => {
export const updateUser = async (updatedUser: UpdatedUser) => {
    const response = await api.patch(`/user/me`, updatedUser)
    return response.data.data
}
