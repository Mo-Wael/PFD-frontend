import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ categoryData }: { categoryData: { category: string; totalAmount: number }[] }) => {

  const labels = categoryData.map(item => item.category);

  const amounts = categoryData.map(item => item.totalAmount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses by Category",
        data: amounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 }
        },
      },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        bodyFont: { size: 14 },
      }
    },
    cutout: "55%",
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">Spending by Category</h1>

      <div className="relative w-full flex-1">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DoughnutChart;