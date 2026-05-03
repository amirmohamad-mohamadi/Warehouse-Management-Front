import { useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import type { SidebarProps } from "./sidebar-types";
import { Button } from "../../Button";
import { MainLink } from "../../MainLink";
import { menuItems } from "./menuItems";

export const Sidebar = ({
  logoText = "مدیریت انبار",
  defaultCollapsed = false,
  className,
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={clsx(
        "fixed right-0 top-0 h-full bg-white shadow-xl z-40 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64",
        className,
      )}
    >
      <div
        className={clsx(
          "h-16 flex items-center border-b border-gray-200",
          collapsed ? "justify-center" : "justify-between px-4",
        )}
      >
        {!collapsed ? (
          <>
            <MainLink
              to="/home"
              className="flex items-center gap-2"
              color="gray"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {logoText.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-bold text-gray-800">{logoText}</span>
            </MainLink>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCollapsed(true)}
              className="!bg-transparent !text-gray-500 hover:!bg-gray-100 !p-1"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCollapsed(false)}
            className="!bg-transparent !text-gray-500 hover:!bg-gray-100 !p-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {logoText.slice(0, 2).toUpperCase()}
              </span>
            </div>
          </Button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group">
            <MainLink
              to={item.path}
              color={isActive(item.path) ? "blue" : "gray"}
              className={clsx(
                "flex items-center rounded-lg transition-all duration-200 w-full",
                isActive(item.path)
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                collapsed ? "justify-center p-3" : "gap-3 px-3 py-2.5",
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="mr-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </MainLink>

            {collapsed && (
              <div className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                {item.label}
                {item.badge && (
                  <span className="mr-1 text-red-400">({item.badge})</span>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
