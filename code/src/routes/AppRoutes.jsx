import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTES } from "../utils/constants";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <ToastContainer autoClose={5000} />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
          </Route>
          
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
