import { Wallet } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
        <div className="bg-green-400 rounded-lg p-2">
          <Wallet className="text-white" size={24} />
        </div>

        <h1 className="text-4xl font-bold">FinanceHub</h1>

    </div>
  )
}

export default Logo