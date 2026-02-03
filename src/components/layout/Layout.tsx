import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { useState } from "react"

const Layout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Content area */}
      <div className="flex flex-col flex-1">
        <Navbar onMobileMenuClick={() => setIsMobileSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6 bg-background-second">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout