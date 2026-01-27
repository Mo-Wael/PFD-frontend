import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4 bg-background-second">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout