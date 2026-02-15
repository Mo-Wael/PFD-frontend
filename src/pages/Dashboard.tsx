import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import DoughnutChart from "../components/UI/DoughnutChart";
import MiniTransaction from "../components/UI/MiniTransaction";
import StatCard from "../components/UI/StatCard";
import { useTransactionstatus } from "../hooks/useTransaction";
// import { getTransactionStatus } from "../services/Transaction";

const Dashboard = () => {
  const { data: stats } = useTransactionstatus();
  // console.log("status data", stats?.data.typeStats);
  // const totalIncome = stats?.data.typeStats.at(1);
  // const totalExpenses = stats?.data.typeStats.at(0);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col flex-wrap w-full md:flex-row md:w-full gap-4">
        <StatCard
          title="Total Balance"
          // amount={totalIncome - totalExpenses}
          change="+5.2% from last month"
          icon={<Wallet />}
        />

        <StatCard
          title="Total Income"
          // amount={totalIncome}
          change="+12.5% from last month"
          icon={<TrendingUp />}
        />
        <StatCard
          title="Total Expenses"
          // amount={totalExpenses}
          change="+12.5% from last month"
          icon={<TrendingDown />}
        />
      </div>

      <div className="flex flex-col md:flex-row w-fit md:w-full gap-5">
        <DoughnutChart />
        <MiniTransaction />

      </div>
    </div>
  );
};

export default Dashboard;
