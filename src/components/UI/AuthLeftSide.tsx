import Logo from "./Logo"

interface IProps {
    auth: string
}

const AuthLeftSide = ({auth} : IProps) => {
    return (
      <div className="w-1/2 p-8 space-x-2 bg-background-main text-white flex flex-col justify-between items-start">
        <Logo />

        <div className="flex flex-col w-2/3 space-y-2">
          {auth === "login" ? (
            <>
              <h2 className="text-4xl font-bold">
                {" "}
                Take control of your finances
              </h2>
              <h3 className="text-lg text-white/50">
                Track expenses, manage budgets, and achieve your financial goals
                with our intuitive dashboard.
              </h3>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">
                {" "}
                Take control of your finances
              </h2>
              <h3 className="text-lg text-white/50">
                Track expenses, manage budgets, and achieve your financial goals
                with our intuitive dashboard.
              </h3>
            </>
          )}
        </div>

        <footer className="text-white/25 text-sm mb-2">
          © 2024 FinanceHub. All rights reserved.
        </footer>
      </div>
    );

}

export default AuthLeftSide