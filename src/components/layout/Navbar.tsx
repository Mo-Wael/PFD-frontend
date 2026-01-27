import { Bell, Search } from "lucide-react";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const pageNames: Record<string, string> = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/transaction": "Transaction",
    "/calendar": "Calendar",
    "/settings": "Settings"
  }

  const currentPageName = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="h-20 bg-white shadow-2xs border-b flex justify-between items-center px-6">
      <h1 className="font-semibold text-3xl">{currentPageName}</h1>

      <div className="flex">
        {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input type="text" placeholder="Search transactions..." className="w-full pl-10 pr-4 py-2 bg-[#f7f8f9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 ml-4">
        {/* Notification Bell */}
        <div className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 text-white font-semibold">
          JD
        </div>
      </div>
      </div>
    </header>
  )
}

export default Navbar