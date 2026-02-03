import { Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react'

// type LogoType = "income" | "expense" | "wallet";

const Logo = ({ type }: { type: string }) => {
  const logoType = type;

  console.log(logoType)

  return (
    <div className="flex items-center gap-3">
      {
        logoType !== "income" && logoType !== "expense" && (
          <>
            <div className="bg-green-400 rounded-lg p-2">
              <Wallet className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold">FinanceHub</h1>
          </>
        )
      }

      {
        logoType === "income" ? (
          <ArrowUpRight className="bg-green-500/25 text-green-500 rounded-full p-1" size={30} />
        ) : logoType === "expense" ? (
          <ArrowDownRight className="bg-red-500/25 text-red-500 rounded-full p-1" size={30} />
        ) : null
      }
    </div>
  )
}

export default Logo