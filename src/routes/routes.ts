import ErrorPage from "../ErrorPage";
import Calendar from "../pages/Calendar";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Transactions from "../pages/Transactions";

export const routes = [
    { path: "/", component: Dashboard, Index: true },
    { path: "/transactions", component: Transactions },
    { path: "/calendar", component: Calendar},
    { path: "/settings", component: Settings },
    { path: "*", component: ErrorPage },
  ];