import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { transactions } from "../../data/Transaction";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    // Aggregate totals by category
  const categoryTotals: Record<string, number> = {};
  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
    }
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384", // Food
          "#36A2EB", // Entertainment
          "#FFCE56", // Utilities
          "#4BC0C0", // Others
          "#9966FF", // Sale
          "#FF9F40"  // Freelance
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Expense Breakdown",
      },
    },
  };

  return (
    //  w-fit
    <div className="flex flex-col w-fit h-auto space-x-5 items-start sm:items-center justify-between bg-white p-6 rounded-xl hover:shadow-lg transition-shadow gap-4">
      <h1 className="text-xl font-bold">Spending by Category</h1>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;