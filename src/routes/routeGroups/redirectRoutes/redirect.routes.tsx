// ! Redirect Routes
// ? This file defines all redirect-only routes (e.g., index redirects).
// TODO: Centralize redirects if more are added later.

import { Navigate } from "react-router-dom";
import LoginWithGoogleCallback from "../../../components/hybrid/Login/LoginWithGoogleCallback";

export const redirectRoutes = [
  { index: true, element: <Navigate to="/login" /> },
  {
    path: "/auth/google-login/callback",
    element: <LoginWithGoogleCallback />,
  },
];
