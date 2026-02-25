import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import DoughnutChart from "../components/UI/DoughnutChart";
import MiniTransaction from "../components/UI/MiniTransaction";
import StatCard from "../components/UI/StatCard";
import { useTransactionstatus } from "../hooks/useTransaction";
// import { getTransactionStatus } from "../services/Transaction";

const Dashboard = () => {
  const { data: stats } = useTransactionstatus();
  // console.log("statusDate:", stats);
  const totalIncome = stats?.data?.totalIncome[0].totalAmount || 0;
  const totalExpenses = stats?.data?.totalExpense[0].totalAmount || 0;
  const categoryExpenses = stats?.data?.categoryExpenses || [];

  // console.log("totalIncome", totalIncome);
  // console.log("totalExpenses", totalExpenses);
  // console.log("categoryExpenses", categoryExpenses);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col flex-wrap w-full md:flex-row md:w-full gap-4">
        <StatCard
          title="Total Balance"
          amount={totalIncome - totalExpenses}
          change="+5.2% from last month"
          icon={<Wallet />}
          cardType="income"
        />

        <StatCard
          title="Total Income"
          amount={totalIncome}
          change="+12.5% from last month"
          icon={<TrendingUp />}
          cardType="income"
        />
        <StatCard
          title="Total Expenses"
          amount={totalExpenses}
          change="+12.5% from last month"
          icon={<TrendingDown />}
          cardType="expense"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6 items-stretch">
        <div className="flex-1 min-w-[300px]">
          <DoughnutChart categoryData={categoryExpenses || []} />
        </div>

        <div className="flex-1 min-w-[300px]">
          <MiniTransaction />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
