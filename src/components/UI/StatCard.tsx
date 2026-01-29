import { Wallet } from "lucide-react";

interface IProps {
  title?: string;
  amount?: string;
  change?: string;
  icon?: React.ReactNode;
}

const StatCard = ({ 
  title = "Total Balance", 
  amount = "$12,458.75", 
  change = "+12.5% from last month",
  icon = <Wallet size={24} />
}: IProps) => {
  return (
    <div className="flex flex-col sm:flex-row space-x-5 items-start sm:items-center justify-between bg-white p-6 rounded-xl hover:shadow-lg transition-shadow gap-4 w-fit">
      {/* Left Side */}
      <div className="space-y-2 flex-1">
        <h2 className="text-gray-500 text-sm sm:text-lg">{title}</h2>
        <h1 className="text-2xl sm:text-4xl font-bold">{amount}</h1>
        <p className="text-green-500 text-xs sm:text-md">{change}</p>
      </div>

      {/* Right Side */}
      <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
