import { X } from "lucide-react";
import { deleteUser } from "../../services/Auth";
import { useDeleteUser } from "../../hooks/useAuth";

interface IProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

const DeleteUserModal = ({ modalOpen, setModalOpen }: IProps) => {
    const { mutate: deleteUser } = useDeleteUser();

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Delete Account</h2>
                    <button onClick={() => setModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                        <X size={20} />
                    </button>
                </div>
                <p className="text-gray-600 mb-4">
                    Are you sure you want to delete your account?
                </p>
                <div className="flex justify-end gap-2">
                    <button onClick={() => { setModalOpen(false) }} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all">
                        Cancel
                    </button>
                    <button onClick={() => { deleteUser(); setModalOpen(false) }} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;