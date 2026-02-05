import axios from "axios";
import type { CurrentUser } from "../types/Auth";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
const token = localStorage.getItem("token");

export const login = async ({ email, password }: { email: string, password: string }) => {
    const response = await api.post('/user/login', { email, password })
    console.log("response", response.data);
    return response.data.data
}

export const register = async ({ fullName, email, password }: { fullName: string, email: string, password: string }) => {
    const response = await api.post('/user/register', { fullName, email, password })
    return response.data.data
}

// export const logout = async () => {
//     const response = await api.post('/user/logout', { headers: { Authorization: `Bearer ${token}` } })
//     return response.data.data
// }

export const getCurrentUser = async (token: string) => {
    const response: CurrentUser = await api.get('/user/me', { headers: { Authorization: `Bearer ${token}` } })
    return response
}

export const deleteUser = async (userId: string) => {
    const response = await api.delete(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
    return response.data.data
}