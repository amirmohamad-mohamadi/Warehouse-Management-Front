import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import RootLayout from "./layout.routes";
import { NotFoundPage } from "../pages/notFound/NotFoundPage ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> }, // مسیر ناشناخته
    ],
  },
]);
