import { lazy } from "react";

export const LoginPage = lazy(() => import("../../../pages/login/LoginPage"));
export const SignupPage = lazy(
  () => import("../../../pages/Signup/SignupPage")
);
