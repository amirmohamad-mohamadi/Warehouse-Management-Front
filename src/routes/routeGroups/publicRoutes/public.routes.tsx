// ! Public Routes
// ? This file contains all routes accessible without authentication.
// TODO: Add more public pages like ForgotPassword or Help if needed.

import { LoginPage, SignupPage } from "./publicLazyPages";

export const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];
