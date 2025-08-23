import { Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "./layout.routes";
import ProtectedRoute from "./protectedRoute/protected.route";
import {
  LoginPage,
  SignupPage,
  HomePage,
  NotFoundPage,
} from "./lazyPages/lazyPages";

const withSuspense = (Component: ReactNode) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-600 text-lg font-medium animate-pulse">
        در حال بارگذاری...
      </div>
    }
  >
    {Component}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: withSuspense(<LoginPage />) },
      { path: "signup", element: withSuspense(<SignupPage />) },
      {
        path: "home",
        element: withSuspense(
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ],
  },
]);
