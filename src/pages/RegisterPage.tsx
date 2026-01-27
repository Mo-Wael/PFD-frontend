import AuthLeftSide from "../components/UI/AuthLeftSide"
import AuthRightSide from "../components/UI/AuthRightSide"

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* left side - available for desktop only */}
            <AuthLeftSide auth="register" />
            <AuthRightSide auth="register" />
        </div>
   )
}

export default RegisterPage