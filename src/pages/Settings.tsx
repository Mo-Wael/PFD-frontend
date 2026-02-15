import { Save, User } from 'lucide-react'
import { useCurrentUser } from '../hooks/useAuth'

const Settings = () => {
  const { data: currentUser } = useCurrentUser();
  console.log("currentUser", currentUser);
  const user = currentUser;

  return (
    <div className='flex flex-col gap-6 p-4 max-w-2xl mx-auto w-full'>
      {/* Profile Information Card */}
      <div className="flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-6 w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Profile Information</h1>

        {/* Profile Picture Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-200">
          <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            <User size={40} />
          </div>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="text-lg font-semibold text-gray-800">{user?.fullName}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Change Profile Picture
            </button>
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
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black/30 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              defaultValue={user?.email}
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
              placeholder="Enter your phone number"
              defaultValue="+20 122 555 5555"
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
              defaultValue="Cairo, Down Town, Talat Harb Square"
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black/30 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className='flex items-center justify-center gap-2 px-6 py-3 mt-2 bg-background-main text-white rounded-lg hover:bg-background-main/90 transition-all shadow-md hover:shadow-lg font-semibold'
          >
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </form>
      </div>

      {/* Danger Zone Card */}
      <div className="flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-4 w-full border-2 border-red-100">
        <h2 className='text-red-600 font-bold text-xl md:text-2xl'>Danger Zone</h2>
        <p className='text-gray-600 text-sm md:text-base'>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className='px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg font-semibold w-full sm:w-auto'>
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Settings