import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

interface IProps {
  title?: string;
  amount?: number; // formatted string like "$12,458.75"
  change?: string;
  icon?: React.ReactNode;
}

const StatCard = ({
  title = "Total Balance",
  amount = 12458.75,
  change = "+12.5% from last month",
  icon = <Wallet size={24} />
}: IProps) => {
  // Convert amount string to number for logic
  // const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  const numericAmount = amount;
  const isPositive = numericAmount >= 0;

  return (
    <div className="flex flex-1 gap-2 items-start sm:items-center justify-between bg-white p-6 rounded-xl hover:shadow-lg transition-shadow w-fit">
      {/* Left Side */}
      <div className="space-y-2 flex-1">
        <h2 className="text-gray-500 text-sm sm:text-lg">{title}</h2>
        <h1
          className={`text-2xl sm:text-4xl font-bold ${isPositive ? "text-black" : "text-red-600"
            }`}
        >
          {amount}
        </h1>
        <p
          className={`text-xs sm:text-md ${change?.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
        >
          {change}
        </p>
      </div>

      {/* Right Side */}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 
          ${isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
