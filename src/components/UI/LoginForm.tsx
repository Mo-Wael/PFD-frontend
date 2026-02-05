import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { Lock, Mail } from "lucide-react";
import { useLogin } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type LoginData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    mutateAsync: login
  } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  async function handleLogin(data: { email: string; password: string; }) {
    try {
      await login(data);
      // Navigate to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      // You might want to show an error message to the user here
    }
  }

  return (
    <div className="w-1/2 mx-auto p-4 rounded-xl text-black flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8">
        <div className="mb-6 text-center space-y-1">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-sm pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <label htmlFor="password">Password</label>
          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-black hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-black font-medium hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
