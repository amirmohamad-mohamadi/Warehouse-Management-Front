import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/infrastructure/ErrorBoundary/ErrorBoundary";
import { router } from "./routes/router";
import GlobalSpinner from "./components/shared/GlobalSpinner";

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalSpinner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-600 text-lg font-medium animate-pulse">
            در حال بارگذاری...
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
