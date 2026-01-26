import AuthLeftSide from "../components/AuthLeftSide"
import AuthRightSide from "../components/AuthRightSide"

const LoginPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* left side - available for desktop only */}
            <AuthLeftSide auth="login" />
            <AuthRightSide auth="login" />
        </div>
   )
}

export default LoginPage