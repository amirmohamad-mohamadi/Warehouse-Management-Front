import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuthStore } from "../../../store/hooks/useAuthStore";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const userId = useAuthStore((state) => state.user)?.id;

  return userId && refreshToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
