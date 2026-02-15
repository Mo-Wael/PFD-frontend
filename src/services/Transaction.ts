import api from './api';
import type { StatsPayload, Transaction, TransactionResponse, UpdateTransaction, CreateTransaction } from '../types/Transaction';
// import type { ApiResponse } from '../types/api';

export const getTransactions = async (): Promise<TransactionResponse> => {
    const response = await api.get<TransactionResponse>('/transaction/')
    return response.data
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
    const response = await api.get<Transaction>(`/transaction/${id}`)
    return response.data
};

export const getTransactionByDate = async (date: Date): Promise<TransactionResponse> => {
    const response = await api.get<TransactionResponse>(
        "/transaction/date",
        { params: { date: date.toISOString() } }
    );

    return response.data;
};


export const createTransaction = async (transaction: CreateTransaction): Promise<Transaction> => {
    const response = await api.post<Transaction>('/transaction', transaction)
    return response.data
};

export const updateTransaction = async (id: string, transaction: UpdateTransaction): Promise<Transaction> => {
    const response = await api.patch<Transaction>(`/transaction/${id}`, transaction)
    return response.data
};

export const deleteTransaction = async (id: string): Promise<void> => {
    await api.delete(`/transaction/${id}`)
};

// export const getTransactionStatus = async (): Promise<{ total: number; pending: number; completed: number; failed: number }> => {
export const getTransactionStatus = async (): Promise<StatsPayload> => {
    const response = await api.get<StatsPayload>(
        "/transaction/status"
    );
    return response.data;
};

// export const getTransactionCategories = async (): Promise<string[]> => {
//     const response = await api.get<string[]>('/transaction/categories')
//     return response.data
// };
