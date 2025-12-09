// ! Protected Routes
// ? This file contains all routes that require authentication.
// TODO: Add role-based access control if needed in ProtectedRoute.

import { HomePage } from "./protectedLazypages";
import ProtectedRoute from "./ProtectedRoute";

export const protectedRoutes = [
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
];
