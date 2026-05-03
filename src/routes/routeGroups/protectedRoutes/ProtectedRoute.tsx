import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../store/hooks/useAuthStore";
import { Header } from "../../../components/shared/layout/Header";
import { Sidebar } from "../../../components/shared/layout/sidebar/Sidebar";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const userId = useAuthStore((state) => state.user)?.id;

  if (!(userId && refreshToken)) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="lg:mr-64 pt-16">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default ProtectedRoute;
