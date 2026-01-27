import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthRightSide = ({ auth }: { auth: "login" | "register" }) => {
  return auth === "login" ? <LoginForm /> : <RegisterForm />;
};

export default AuthRightSide;
