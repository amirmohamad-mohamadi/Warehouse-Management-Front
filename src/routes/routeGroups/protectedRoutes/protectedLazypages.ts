import { lazy } from "react";

export const Dashboard = lazy(
  () => import("../../../pages/dashboard/Dashboard"),
);
export const Categories = lazy(
  () => import("../../../pages/categories/Categories"),
);
export const Suppliers = lazy(
  () => import("../../../pages/suppliers/Suppliers"),
);
export const Customers = lazy(
  () => import("../../../pages/customers/Customers"),
);
export const Products = lazy(() => import("../../../pages/products/Products"));
export const Invoices = lazy(() => import("../../../pages/invoices/Invoices"));
export const Reports = lazy(() => import("../../../pages/reports/Reports"));
export const Settings = lazy(() => import("../../../pages/settings/Settings"));
