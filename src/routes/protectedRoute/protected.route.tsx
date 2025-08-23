import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuthStore } from "../../store/hooks/useAuthStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const refreshToken = useAuthStore((state) => state.refreshToken);
  return refreshToken ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
