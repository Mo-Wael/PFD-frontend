import { Link } from "react-router-dom"

const MiniTransaction = () => {
    return (
        <section
            className="flex flex-3 flex-col bg-white p-6 rounded-xl hover:shadow-lg transition-shadow gap-4"
            aria-labelledby="recent-transactions-heading"
        >
            <div className="flex justify-between items-center">
                <h2 id="recent-transactions-heading" className="font-bold text-xl text-gray-800">
                    Recent Transactions
                </h2>
                <Link
                    to="/transactions"
                    className="text-background-main hover:underline text-sm font-medium transition-colors"
                    aria-label="View all transactions"
                >
                    View all
                </Link>
            </div>

            {/* when getting the data from api, map them using the Transaction details component */}
            <div className="overflow-y-auto max-h-[450px] space-y-1 pr-2 custom-scrollbar">
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
                <p>transactions</p>
            </div>
        </section>
    )
}

export default MiniTransaction