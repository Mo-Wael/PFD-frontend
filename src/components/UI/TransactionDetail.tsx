import type { Transaction } from "../../types/Transaction"
import Logo from "./Logo"

interface IProps {
    t: Transaction;
}

const TransactionDetail = ({ t }: IProps) => {
    return (
        <div className="flex justify-between items-center px-4 py-2 m-2 bg-background-second hover:bg-slate-100 transition-colors font-semibold rounded-xl">
            {/* left side - icon, name, category */}
            <div className="flex gap-4">
                <Logo type={t.type} />
                <div className="flex flex-col gap-2">
                    <p>{t.description}</p>
                    <p className="text-gray-400">{t.category}</p>
                </div>
            </div>
            {/* right side - date, amount */}
            <div className="flex flex-col gap-2">
                <p className={t.type === "income" ? "text-emerald-600" : "text-red-600"}>{t.type === "income" ? "+" : "-"}{t.amount}</p>
                <p>{t.date}</p>
            </div>
        </div>
    )
}

export default TransactionDetail