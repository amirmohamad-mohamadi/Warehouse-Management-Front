import { Outlet, useLocation } from "react-router-dom";
import { ErrorBoundary } from "../components/infrastructure/ErrorBoundary/ErrorBoundary";

const RootLayout = () => {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Outlet />
    </ErrorBoundary>
  );
};
export default RootLayout;
