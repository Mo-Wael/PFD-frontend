import { PlusIcon, Search } from 'lucide-react'
import Logo from '../components/UI/Logo';

const transactions = [
  { date: "2026-02-01", category: "Food", description: "Grocery shopping", type: "expense", amount: "$25.00" },
  { date: "2026-02-02", category: "Salary", description: "Monthly paycheck", type: "income", amount: "$1,200.00" },
  { date: "2026-02-03", category: "Transport", description: "Public transit", type: "expense", amount: "$15.00" },
];

const Transactions = () => {
  return (
    <div className='flex h-screen flex-col gap-4 p-4'>
      {/* adding and searching and filtering header */}
      <div className="flex flex-col sm:flex-row align-center justify-between items-baseline gap-3 space-y-2">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input type="text" placeholder="Search transactions..." className="w-full pl-10 pr-4 py-2 bg-[#f7f8f9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
        </div>        {/* by category */}
        <select name="category" id="category" className='flex-1 p-2 border border-gray-300 rounded-xl'>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="education">Education</option>
          <option value="utilities">Utilities</option>
          <option value="health">Health</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {/* by income and expense */}
        <select name="type" id="type" className='flex-1 p-2 border border-gray-300 rounded-xl'>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button className='flex items-center cursor-pointer gap-2 p-2 border border-gray-300 bg-background-main text-white rounded-xl hover:bg-background-main/80'>
          <PlusIcon className="w-5 h-5" /> Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-auto">
        <table className="min-w-full px-3 py-6 border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-slate-100 text-slate-500 text-left">
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors font-semibold" >
                <td className={`px-4 py-4 flex gap-4 items-center`}>{<Logo type={t.type} />}{t.description}</td>
                <td className="px-4 py-4">{t.category}</td>
                <td className="px-4 py-4">{t.date}</td>
                <td className={`px-4 py-4 font-semibold ${t.type === "income" ? "text-emerald-600" : "text-rose-600"}`} >
                  {t.type === "income" ? "+" : "-"}
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Transactions