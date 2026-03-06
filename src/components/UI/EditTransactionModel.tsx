import { useState } from "react";
import type { Transaction, UpdateTransaction } from "../../types/Transaction";
import { useUpdateTransaction } from "../../hooks/useTransaction";
import { X } from "lucide-react";
import { formatDate } from "../../utils/Data";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
    modelOpened: boolean;
    setEditModelOpened: (modelOpend: boolean) => void
    transaction?: Transaction;
}

const EditTransactionModel = ({ modelOpened, setEditModelOpened, transaction }: IProps) => {
    const [transactionDetails, setTransactionDetails] = useState<UpdateTransaction>({
        description: transaction?.description || "",
        category: transaction?.category || "",
        type: transaction?.type || "income",
        amount: transaction?.amount || 0,
        transactionDate: transaction?.transactionDate || ""
    });
    const { mutateAsync: UpdateTransaction } = useUpdateTransaction()
    const queryClient = useQueryClient();

    const handleAddingTransaction = async (e: React.FormEvent) => {
        e.preventDefault();
        await UpdateTransaction({ id: transaction?._id || "", transaction: transactionDetails });
        queryClient.invalidateQueries({ queryKey: ["transactions"] });
        setEditModelOpened(false);
    }

    // console.log(transaction?.transactionDate);

    return (
        <div>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Edit Transaction</h2>
                        <button
                            onClick={() => setEditModelOpened(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={handleAddingTransaction}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Grocery shopping"
                                value={transactionDetails.description}
                                onChange={(e) => setTransactionDetails({ ...transactionDetails, description: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select value={transactionDetails.category} onChange={(e) => setTransactionDetails({ ...transactionDetails, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select category</option>
                                <option value="food">Food</option>
                                <option value="transport">Transport</option>
                                <option value="utilities">Utilities</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                            <select value={transactionDetails.type} onChange={(e) => setTransactionDetails({ ...transactionDetails, type: e.target.value as "income" | "expense" })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Type</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="0.00"
                                value={transactionDetails.amount}
                                onChange={(e) => setTransactionDetails({ ...transactionDetails, amount: Number(e.target.value) })}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                max={new Date().toISOString().split('T')[0]}
                                value={transactionDetails?.transactionDate?.split("T")[0]}
                                onChange={(e) => setTransactionDetails({ ...transactionDetails, transactionDate: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setEditModelOpened(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-background-main text-white rounded-lg hover:bg-background-main/80"
                            >
                                Edit Transaction
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditTransactionModel