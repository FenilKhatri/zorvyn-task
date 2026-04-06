import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTES } from "../utils/constants";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../components/layouts/Layout";

const AppRoutes = () => {
  return (
    <>
      <ToastContainer autoClose={5000} />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
          </Route>
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
