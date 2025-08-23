import { lazy } from "react";

export const LoginPage = lazy(() => import("../../pages/login/LoginPage"));
export const SignupPage = lazy(() => import("../../pages/Signup/SignupPage"));
export const HomePage = lazy(() => import("../../pages/home/HomePage"));
export const NotFoundPage = lazy(
  () => import("../../pages/notFound/NotFoundPage ")
);
