import axios from 'axios';
import type { Transaction } from '../types/Transaction';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
})

export const getTransactions = async (): Promise<Transaction[]> => {
    const response = await api.get('/transactions')
    return response.data
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
    const response = await api.get(`/transactions/${id}`)
    return response.data
};

export const createTransaction = async (transaction: Omit<Transaction, 'id'>): Promise<Transaction> => {
    const response = await api.post('/transactions', transaction)
    return response.data
};

export const updateTransaction = async (id: string, transaction: Partial<Transaction>): Promise<Transaction> => {
    const response = await api.put(`/transactions/${id}`, transaction)
    return response.data
};

export const deleteTransaction = async (id: string): Promise<void> => {
    await api.delete(`/transactions/${id}`)
};

export const getTransactionStatus = async (): Promise<{ total: number; pending: number; completed: number; failed: number }> => {
    const response = await api.get('/transactions/status')
    return response.data
};

export const getTransactionCategories = async (): Promise<string[]> => {
    const response = await api.get('/transactions/categories')
    return response.data
};