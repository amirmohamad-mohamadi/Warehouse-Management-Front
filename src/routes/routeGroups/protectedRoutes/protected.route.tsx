// ! Protected Routes
// ? This file contains all routes that require authentication.
// TODO: Add role-based access control if needed in ProtectedRoute.

import type { ReactNode } from "react";
import {
  Dashboard,
  Categories,
  Suppliers,
  Customers,
  Products,
  Invoices,
  Reports,
  Settings,
} from "./protectedLazypages";
import ProtectedRoute from "./ProtectedRoute";

const withProtectedRoute = (Component: ReactNode) => (
  <ProtectedRoute>{Component}</ProtectedRoute>
);

const routeMap = [
  { path: "/", component: <Dashboard /> },
  { path: "/home", component: <Dashboard /> },
  { path: "/categories", component: <Categories /> },
  { path: "/suppliers", component: <Suppliers /> },
  { path: "/customers", component: <Customers /> },
  { path: "/products", component: <Products /> },
  { path: "/invoices", component: <Invoices /> },
  { path: "/reports", component: <Reports /> },
  { path: "/settings", component: <Settings /> },
];

export const protectedRoutes = routeMap.map((route) => ({
  path: route.path,
  element: withProtectedRoute(route.component),
}));
