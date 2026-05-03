import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  path: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
}

export interface SidebarProps {
  logoText?: string;
  defaultCollapsed?: boolean;
  className?: string;
}
