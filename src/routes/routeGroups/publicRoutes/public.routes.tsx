// ! Public Routes
// ? This file contains all routes accessible without authentication.
// TODO: Add more public pages like ForgotPassword or Help if needed.

import {
  ForgotPasswordPage,
  ResetPasswordPage,
} from "../../lazyPages/lazyPages";
import { LoginPage, SignupPage } from "./publicLazyPages";

export const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
];
