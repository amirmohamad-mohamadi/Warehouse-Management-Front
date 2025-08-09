import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/infrastructure/ErrorBoundary/ErrorBoundary";
import { router } from "./routes/router";

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
