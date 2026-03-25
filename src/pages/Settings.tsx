import { Save, User } from 'lucide-react'
import { useCurrentUser, useUpdateUser } from '../hooks/useAuth'
import { useState, type ChangeEvent } from 'react';
import type { UpdatedUserData } from '../types/Auth';
import DeleteUserModal from '../components/UI/DeleteUserModal';

const Settings = () => {
  const { data: currentUser } = useCurrentUser();
  const user = currentUser;
  const [modalOpen, setModalOpen] = useState(false);
  const updateUser = useUpdateUser();
  const [updatedUser, setUpdatedUser] = useState<UpdatedUserData>({
    fullName: currentUser?.fullName ?? "",
    phoneNumber: currentUser?.phoneNumber ?? "",
    address: currentUser?.address ?? "",
    profileImage: currentUser?.profileImage ?? null,
  });

  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser?._id) return;

    const formData = new FormData();
    formData.append("fullName", updatedUser.fullName);
    formData.append("phoneNumber", updatedUser.phoneNumber);
    formData.append("address", updatedUser.address);

    if (updatedUser.profileImage instanceof File) {
      formData.append("profileImage", updatedUser.profileImage);
    }

    updateUser.mutate(formData);
  };

  function handleFileUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      setUpdatedUser({ ...updatedUser, profileImage: file });
    }
  }

  return (
    <div className='flex flex-col gap-6 p-4 max-w-2xl mx-auto w-full'>
      {modalOpen && <DeleteUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
      {/* Profile Information Card */}
      <div className="flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-6 w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Profile Information</h1>

        {/* Profile Picture Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-200">
          <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg overflow-hidden">
            {updatedUser.profileImage ? (
              <img
                src={updatedUser.profileImage instanceof File ? URL.createObjectURL(updatedUser.profileImage) : updatedUser.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={40} />
            )}
          </div>
          <div className="flex flex-col gap-2 text-center sm:text-left">

            {/* full name */}
            <p className="text-lg font-semibold text-gray-800">{user?.fullName}</p>

            {/* email */}
            <p className="text-sm text-gray-600">{user?.email}</p>
            <label className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer">
              Change Profile Picture
              <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} disabled={updateUser.isPending} />
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <form className='flex flex-col gap-5'>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              defaultValue={user?.fullName}
              // value={updatedUser.fullName}
              onChange={(e) => setUpdatedUser({ ...updatedUser, fullName: e.target.value })}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black/30 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number in format: +20123456789"
              defaultValue={user?.phoneNumber}
              // value={updatedUser?.phoneNumber}
              onChange={(e) => setUpdatedUser({ ...updatedUser, phoneNumber: e.target.value })}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black/30 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-sm font-semibold text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={user?.address}
              // value={updatedUser.address}
              onChange={(e) => setUpdatedUser({ ...updatedUser, address: e.target.value })}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black/30 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={updateUser.isPending}
            className={`flex items-center justify-center gap-2 px-6 py-3 mt-2 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-semibold cursor-pointer ${updateUser.isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-background-main hover:bg-background-main/90'}`}
            onClick={handleUpdateUser}
          >
            <Save className="w-5 h-5" />
            {updateUser.isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>

      {/* Danger Zone Card */}
      <div className="flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-4 w-full border-2 border-red-100">
        <h2 className='text-red-600 font-bold text-xl md:text-2xl'>Danger Zone</h2>
        <p className='text-gray-600 text-sm md:text-base'>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button onClick={() => setModalOpen(true)} className='px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg font-semibold w-full sm:w-auto'>
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Settings