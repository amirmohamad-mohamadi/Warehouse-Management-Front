import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/infrastructure/ErrorBoundary/ErrorBoundary";
import { router } from "./routes/router";
import GlobalSpinner from "./components/shared/GlobalSpinner";

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalSpinner />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
