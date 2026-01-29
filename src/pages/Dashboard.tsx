import DoughnutChart from "../components/UI/DoughnutChart";
import StatCard from "../components/UI/StatCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap space-x-3 gap-4">
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

      <div className="flex ">
        <DoughnutChart />

        

      </div>
    </div>
  );
};

export default Dashboard;
