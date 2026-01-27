import { PanelLeftOpen, PanelRight, Wallet } from "lucide-react";
import NavigationButton from "../UI/NavigationButton";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        min-h-screen border-r bg-background-main text-white
        flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Header */}
      <div
        className={`flex ${
          collapsed
            ? "flex-col items-center gap-2"
            : "flex-row items-center justify-between"
        } p-4 border-b border-zinc-700`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-green-400 rounded-lg p-2">
            <Wallet className="text-white" size={24} />
          </div>
          {!collapsed && <span className="text-2xl font-bold">FinanceHub</span>}
        </div>

        <button
          onClick={() => setCollapsed((v) => !v)}
          className="p-1 hover:bg-white/10 rounded"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <PanelLeftOpen /> : <PanelRight />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col flex-1 border-t border-zinc-700 justify-between p-2">
        <div className="space-y-1">
          <NavigationButton
            image="LayoutDashboard"
            name="Dashboard"
            collapsed={collapsed}
            linkTo="dashboard"
          />
          <NavigationButton
            image="ArrowLeftRight"
            name="Transactions"
            collapsed={collapsed}
            linkTo="transactions"
          />
          <NavigationButton
            image="CalendarClock"
            name="Calendar"
            collapsed={collapsed}
            linkTo="calendar"
          />
          <NavigationButton
            image="Settings"
            name="Settings"
            collapsed={collapsed}
            linkTo="settings"
          />
        </div>

        <NavigationButton image="LogOut" name="Logout" collapsed={collapsed} linkTo="login" />
      </div>
    </aside>
  );
};

export default Sidebar;
