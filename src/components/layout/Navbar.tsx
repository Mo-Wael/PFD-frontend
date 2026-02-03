import { Bell, Search, Menu } from "lucide-react";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  onMobileMenuClick: () => void;
}

const Navbar = ({ onMobileMenuClick }: NavbarProps) => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const pageNames: Record<string, string> = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/transaction": "Transaction",
    "/calendar": "Calendar",
    "/settings": "Settings"
  }

  const currentPageName = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="h-16 md:h-18 bg-white shadow-2xs border-b flex justify-between items-center px-4 md:px-6 gap-2 md:gap-4">
      {/* Left Section: Mobile Menu + Title */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Menu */}
        <button
          onClick={onMobileMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="text-gray-700" size={24} />
        </button>

        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">
          {currentPageName}
        </h1>
      </div>

      {/* Right Section: Search + Icons */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Bar - Hidden on mobile by default, expandable */}
        <div className="hidden lg:block relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 bg-[#f7f8f9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle search"
        >
          <Search className="text-gray-600" size={20} />
        </button>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="text-gray-600" size={20} />
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          {/* Profile Icon */}
          <button className="flex items-center justify-center h-8 w-8 md:h-9 md:w-9 rounded-full bg-gray-800 text-white font-semibold text-sm hover:bg-gray-700 transition-colors">
            JD
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown */}
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 p-4 bg-white border-b shadow-lg lg:hidden z-30">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 bg-[#f7f8f9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar