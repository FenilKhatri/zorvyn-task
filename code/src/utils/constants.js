import {
    LayoutDashboard,
    BarChart3,
    User,
} from "lucide-react";

// roles
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// routes
export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  ANALYTICS: "/analytics",
};

// sidebar links (dynamic rendering)
export const SIDEBAR_LINKS = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: ROUTES.DASHBOARD,
    roles: ["admin", "user"],
  },
  {
    name: "Users",
    icon: User,
    path: ROUTES.USERS,
    roles: ["admin"],
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: ROUTES.ANALYTICS,
    roles: ["admin"],
  },
];

// localStorage keys
export const STORAGE_KEYS = {
  ROLE: "Role",
  THEME: "theme",
};