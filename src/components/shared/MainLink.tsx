import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

interface MainLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  color?: "blue" | "red" | "gray";
}

export const MainLink = ({
  to,
  children,
  className,
  underline = false,
  color = "blue",
}: MainLinkProps) => {
  const baseColor = {
    blue: "text-blue-600 hover:text-red-800",
    red: "text-red-600 hover:text-red-800",
    gray: "text-gray-600 hover:text-red-800",
  };

  return (
    <RouterLink
      to={to}
      className={clsx(
        baseColor[color],
        underline && "underline underline-offset-2",
        "cursor-pointer transition-colors duration-200",
        className
      )}
    >
      {children}
    </RouterLink>
  );
};
