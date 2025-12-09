import { Navigate } from "react-router-dom";
import { LoginForm } from "../../components/hybrid/Login/LoginForm";
import { useAuthStore } from "../../store/hooks/useAuthStore";

const LoginPage = () => {
  const user = useAuthStore((state) => state.user);
  const refreshToken = useAuthStore((state) => state.refreshToken);

  // اگر کاربر لاگین هست → مستقیم به /home
  if (user && refreshToken) {
    return <Navigate to="/home" replace />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ورود به حساب
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
