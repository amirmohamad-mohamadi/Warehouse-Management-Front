// ! Redirect Routes
// ? This file defines all redirect-only routes (e.g., index redirects).
// TODO: Centralize redirects if more are added later.

import { Navigate } from "react-router-dom";

export const redirectRoutes = [
  { index: true, element: <Navigate to="/login" /> },
];
