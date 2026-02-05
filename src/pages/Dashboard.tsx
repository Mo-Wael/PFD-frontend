import DoughnutChart from "../components/UI/DoughnutChart";
import MiniTransaction from "../components/UI/MiniTransaction";
import StatCard from "../components/UI/StatCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col flex-wrap w-full md:flex-row md:w-full gap-4">
        <StatCard
          title="Total Balance"
          amount="$12,458.75"
          change="+12.5% from last month"
        />
        <StatCard
          title="Total Balance"
          amount="$12,458.75"
          change="+12.5% from last month"
        />
        <StatCard
          title="Total Balance"
          amount="$12,458.75"
          change="+12.5% from last month"
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
