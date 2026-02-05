import { PanelLeftOpen, PanelRight, Wallet, X } from "lucide-react";
import NavigationButton from "../UI/NavigationButton";
import { useState, useEffect } from "react";

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const Sidebar = ({ isMobileOpen, onMobileClose }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        onMobileClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileOpen, onMobileClose]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          min-h-screen border-r bg-background-main text-white
          flex flex-col transition-all duration-300 z-50
          
          /* Mobile: Fixed overlay drawer */
          fixed md:relative inset-y-0 left-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          
          /* Width based on collapsed state */
          ${collapsed ? "w-64 md:w-20" : "w-64"}
        `}
      >
        {/* Header */}
        <div
          className={`flex ${collapsed
            ? "flex-col items-center gap-2"
            : "flex-row items-center justify-between"
            } p-4 border-b border-zinc-700`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-green-400 rounded-lg p-2">
              <Wallet className="text-white" size={24} />
            </div>
            {!collapsed && <span className="text-xl md:text-2xl font-bold">FinanceHub</span>}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile close button */}
            <button
              onClick={onMobileClose}
              className="md:hidden p-1 hover:bg-white/10 rounded"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>

            {/* Desktop collapse button */}
            <button
              onClick={() => setCollapsed((v) => !v)}
              className="hidden md:block p-1 hover:bg-white/10 rounded"
              aria-label="Toggle sidebar"
            >
              {collapsed ? <PanelLeftOpen /> : <PanelRight />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col flex-1 border-t border-zinc-700 justify-between p-2">
          <div className="space-y-1">
            <NavigationButton
              image="LayoutDashboard"
              name="Dashboard"
              collapsed={collapsed}
              linkTo="/"
              onClick={onMobileClose}
            />
            <NavigationButton
              image="ArrowLeftRight"
              name="Transactions"
              collapsed={collapsed}
              linkTo="transactions"
              onClick={onMobileClose}
            />
            <NavigationButton
              image="CalendarClock"
              name="Calendar"
              collapsed={collapsed}
              linkTo="calendar"
              onClick={onMobileClose}
            />
            <NavigationButton
              image="Settings"
              name="Settings"
              collapsed={collapsed}
              linkTo="settings"
              onClick={onMobileClose}
            />
          </div>

          <NavigationButton
            image="LogOut"
            name="Logout"
            collapsed={collapsed}
            linkTo="login"
            onClick={onMobileClose}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
