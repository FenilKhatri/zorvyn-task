import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRoutes = () => {
  const role = localStorage.getItem("Role");
  const location = useLocation();

  const isRestricted =
    role === "user" &&
    (location.pathname === "/users" || location.pathname === "/analytics");

  useEffect(() => {
    if (isRestricted) {
      toast.warn("Unauthorized!");
    }
  }, [isRestricted]);

  if (!role) return <Navigate to="/" replace />;
  if (isRestricted) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
