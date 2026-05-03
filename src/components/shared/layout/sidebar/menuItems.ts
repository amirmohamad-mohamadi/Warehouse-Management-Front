import {
  LayoutDashboard,
  Tag,
  Truck,
  User,
  Package,
  FileText,
  Settings,
  Receipt,
} from "lucide-react";
import type { MenuItem } from "./sidebar-types";

export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    path: "/home",
    icon: LayoutDashboard,
    label: "خلاصه وضعیت",
  },
  {
    id: "categories",
    path: "/categories",
    icon: Tag,
    label: "دسته‌ها",
  },
  {
    id: "suppliers",
    path: "/suppliers",
    icon: Truck,
    label: "تامین‌کنندگان",
  },
  {
    id: "customers",
    path: "/customers",
    icon: User,
    label: "مشتریان",
  },
  {
    id: "products",
    path: "/products",
    icon: Package,
    label: "کالاها",
  },
  {
    id: "invoices",
    path: "/invoices",
    icon: Receipt,
    label: "فاکتورها",
  },
  {
    id: "reports",
    path: "/reports",
    icon: FileText,
    label: "گزارشات",
  },
  {
    id: "settings",
    path: "/settings",
    icon: Settings,
    label: "تنظیمات",
  },
];
