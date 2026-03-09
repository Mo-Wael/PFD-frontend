import { EditIcon, PlusIcon, Search, TrashIcon } from 'lucide-react'
import Logo from '../components/UI/Logo';
import { useTransactions } from '../hooks/useTransaction';
// import { useCurrentUser } from '../hooks/useAuth';
import type { Transaction } from '../types/Transaction';
import { useState, useEffect } from 'react';
// import AddTransactionModel from '../components/UI/AddTransactionModel';
import { formatDate } from '../utils/Data';
import EditTransactionModel from '../components/UI/EditTransactionModel';
import DeleteTransactionModel from '../components/UI/DeleteTransactionModel';
import AddTransactionModel from '../components/UI/AddTransactionModel';

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionSearch, setTransactionSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [modelOpend, setModelOpend] = useState(false);
  const [editModelOpened, setEditModelOpened] = useState(false);
  const [deleteModelOpened, setDeleteModelOpened] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();
  const [page, setPage] = useState(1);
  const { data: transactionsResponse, isLoading, isError } = useTransactions(page, transactionSearch, categoryFilter, typeFilter);
  const transactions = transactionsResponse?.data.transactions || [];
  const pagination = transactionsResponse?.data.pagination;

  // Reset to first page when filters change
  useEffect(() => {
    setPage(1);
  }, [transactionSearch, categoryFilter, typeFilter]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading transactions...</div>;
  }

  if (isError) {
    return <div className="flex h-screen items-center justify-center text-red-600">Error loading transactions</div>;
  }


  return (
    <div className='flex h-screen flex-col gap-4 p-4'>

      {modelOpend && (
        <AddTransactionModel
          modelOpend={modelOpend}
          setModelOpend={setModelOpend}
        />
      )}

      {editModelOpened && (
        <EditTransactionModel
          modelOpened={editModelOpened}
          setEditModelOpened={setEditModelOpened}
          transaction={selectedTransaction}
        />
      )}

      {deleteModelOpened && (
        <DeleteTransactionModel
          modelOpened={deleteModelOpened}
          setDeleteModelOpened={setDeleteModelOpened}
          transaction={selectedTransaction}
        />
      )}


      {/* adding and searching and filtering header */}
      <div className="flex flex-col sm:flex-row align-center justify-between items-baseline gap-3 space-y-2">
        {/* <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search transactions..." className="w-full pl-10 pr-4 py-2 bg-[#f7f8f9] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          <button className='absolute right-2 top-1 bg-background-main text-white p-1 rounded-2xl ' onClick={() => setTransactionSearch(searchQuery)}>Search</button>
        </div> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTransactionSearch(searchQuery);
          }}
          className="relative w-full max-w-md"
        >
          <Search
            className="absolute left-3 top-2.5 text-gray-400"
            size={18}
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-20 top-1 text-gray-500 hover:text-gray-700 p-1 cursor-pointer"
            >
              ✕
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 top-1 bg-background-main text-white px-3 py-1 rounded-2xl disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          // disabled={!searchQuery}
          >
            Search
          </button>
        </form>

        {/* by category */}
        <select name="category" id="category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className='flex-1 p-2 border border-gray-300 rounded-xl'>
          <option value="all">Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="education">Education</option>
          <option value="utilities">Utilities</option>
          <option value="health">Health</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {/* by income and expense */}
        <select name="type" id="type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className='flex-1 p-2 border border-gray-300 rounded-xl'>
          <option value="all">Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {/* Adding new Transaction */}
        <button onClick={() => setModelOpend(true)} className='flex items-center cursor-pointer gap-2 p-2 border border-gray-300 bg-background-main text-white rounded-xl hover:bg-background-main/80'>
          <PlusIcon className="w-5 h-5" /> Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-auto h-screen">
        <table className="min-w-full px-3 py-6 border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-slate-100 text-slate-500 text-left">
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Amount</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map((t: Transaction) => (
                <tr key={t._id} className="hover:bg-slate-50 transition-colors font-semibold" >
                  <td className={`px-4 py-4 flex gap-4 items-center`}>{<Logo type={t.type} />}{t.description}</td>
                  <td className="px-4 py-4">{t.category}</td>
                  <td className="px-4 py-4">{formatDate(t.transactionDate)}</td>
                  <td className={`px-4 py-4 font-semibold ${t.type === "income" ? "text-emerald-600" : "text-rose-600"}`} >
                    {t.type === "income" ? "+" : "-"}
                    {t.amount}
                  </td>
                  <td className="px-4 py-4 items-center">
                    <button className="cursor-pointer focus:outline-none text-blue-600 hover:text-blue-800 mr-2" onClick={() => { setEditModelOpened(true); setSelectedTransaction(t); }}>{<EditIcon />}</button>
                    <button className="cursor-pointer focus:outline-none text-red-600 hover:text-red-800" onClick={() => { setDeleteModelOpened(true); setSelectedTransaction(t) }}>{<TrashIcon />}</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center align-baseline gap-4 mt-4 space-y-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 cursor-pointer bg-background-main text-white rounded-xl hover:bg-background-main/80"
        >
          Previous
        </button>

        <span>
          Page {pagination?.page} of {pagination?.totalPages}
        </span>

        <button
          disabled={page === pagination?.totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 cursor-pointer bg-background-main text-white rounded-xl hover:bg-background-main/80"
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Transactions