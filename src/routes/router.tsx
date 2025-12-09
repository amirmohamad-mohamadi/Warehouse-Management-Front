import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout.routes";
import { NotFoundPage } from "./lazyPages/lazyPages";
import { publicRoutes } from "./routeGroups/publicRoutes/public.routes";
import { protectedRoutes } from "./routeGroups/protectedRoutes/protected.route";
import { redirectRoutes } from "./routeGroups/redirectRoutes/redirect.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...redirectRoutes,
      ...publicRoutes,
      ...protectedRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
