import { useMutation, useQuery } from "@tanstack/react-query"
import { createTransaction, deleteTransaction, getTransactionByDate, getTransactionById, getTransactions, getTransactionStatus, updateTransaction } from "../services/Transaction"
import type { UpdateTransaction, TransactionResponse, CreateTransaction } from "../types/Transaction";

export const useTransactions = (page = 1, search = "", category = "all", type = "all") => {
    return useQuery<TransactionResponse>({
        queryKey: ["transactions", page, search, category, type],
        queryFn: () => getTransactions(page, 10, search, category, type),
    });
};

export const useTransaction = (id: string) => {
    return useQuery({
        queryKey: ["transactions", id],
        queryFn: () => getTransactionById(id),
    });
};

export const useTransactionstatus = () => {
    return useQuery({
        queryKey: ['transactions', 'status'],
        queryFn: () => getTransactionStatus(),
    })
}

export const useTransactionByDate = (date: Date) => {
    return useQuery({
        queryKey: ["transactions", date.toISOString()],
        queryFn: () => getTransactionByDate(date),
        enabled: !!date
    });
};


export const useCreateTransaction = () => {
    return useMutation({
        mutationFn: (transaction: CreateTransaction) => createTransaction(transaction),
    });
};

export const useUpdateTransaction = () => {
    return useMutation({
        mutationFn: ({ id, transaction }: { id: string, transaction: UpdateTransaction }) => updateTransaction(id, transaction),
    });
};

export const useDeleteTransaction = () => {
    return useMutation({
        mutationFn: (id: string) => deleteTransaction(id),
    });
};

