import { X } from "lucide-react";
import { useState } from "react";
import { useCreateTransaction } from "../../hooks/useTransaction";
import type { CreateTransaction } from "../../types/Transaction";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
    modelOpend: boolean;
    setModelOpend: (modelOpend: boolean) => void;
}

const AddTransactionModel = ({ modelOpend, setModelOpend }: IProps) => {

    const [transactionDetails, setTransactionDetails] = useState<CreateTransaction>({
        description: "",
        category: "",
        type: "income",
        amount: 0,
        transactionDate: new Date().toISOString().split('T')[0]
    });
    const { mutateAsync: createTransaction } = useCreateTransaction()
    const queryClient = useQueryClient();

    const handleAddingTransaction = async (e: React.FormEvent) => {
        e.preventDefault();
        await createTransaction(transactionDetails);
        queryClient.invalidateQueries({ queryKey: ["transactions"] });
        setModelOpend(false);
    }

    return (
        modelOpend &&
        <div>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Add Transaction</h2>
                        <button
                            onClick={() => setModelOpend(false)}
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
                                value={transactionDetails.transactionDate}
                                onChange={(e) => setTransactionDetails({ ...transactionDetails, transactionDate: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setModelOpend(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Add Transaction
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTransactionModel