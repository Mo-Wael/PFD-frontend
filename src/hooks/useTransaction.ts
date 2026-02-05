import { useMutation, useQuery } from "@tanstack/react-query"
import { createTransaction, deleteTransaction, getTransactionById, getTransactions, getTransactionStatus, updateTransaction } from "../services/Transaction"
import type { CreateTransaction, UpdateTransaction } from "../types/Transaction";

export const useTransactions = () => {
    return useQuery({
        queryKey: ["transactions"],
        queryFn: () => getTransactions(),
    });
};

export const useTransaction = (id: string) => {
    return useQuery({
        queryKey: ["transactions", id],
        queryFn: () => getTransactionById(id),
    });
};

export const useCreateTransaction = (transaction: CreateTransaction) => {
    return useMutation({
        mutationFn: () => createTransaction(transaction),
    });
};

export const useUpdateTransaction = (id: string, transaction: UpdateTransaction) => {
    return useMutation({
        mutationFn: () => updateTransaction(id, transaction),
    });
};

export const useDeleteTransaction = (id: string) => {
    return useMutation({
        mutationFn: () => deleteTransaction(id),
    });
};

export const useTransactionstatus = () => {
    return useQuery({
        queryKey: ['transactions', 'status'],
        queryFn: () => getTransactionStatus(),
    })
}