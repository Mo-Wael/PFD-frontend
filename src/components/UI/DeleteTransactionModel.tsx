import { X } from "lucide-react";
import type { Transaction } from "../../types/Transaction";
import { useDeleteTransaction } from "../../hooks/useTransaction";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
    modelOpened: boolean;
    setDeleteModelOpened: (modelOpend: boolean) => void
    transaction?: Transaction;
}

const DeleteTransactionModel = ({ modelOpened, setDeleteModelOpened, transaction }: IProps) => {
    const { mutateAsync: deleteTransaction } = useDeleteTransaction();
    const queryClient = useQueryClient();

    const handleDeleteTransaction = async (id: string) => {
        await deleteTransaction(id);
        queryClient.invalidateQueries({ queryKey: ["transactions"] });
        setDeleteModelOpened(false);
        // window.location.reload();
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Delete Transaction</h2>
                    <button
                        onClick={() => setDeleteModelOpened(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-gray-600 mb-4">Are you sure you want to delete this transaction?</p>
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => setDeleteModelOpened(false)}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            // Handle delete logic here
                            handleDeleteTransaction(transaction?._id || "");
                            setDeleteModelOpened(false);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTransactionModel