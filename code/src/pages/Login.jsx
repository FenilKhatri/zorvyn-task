import { useState } from "react";
import { ROLES } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) return alert("Please select a role");
    localStorage.setItem("Role", JSON.stringify(role));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Welcome Back 👋
          </h1>
          <p className="text-slate-300 text-sm">Select your role to continue</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-300">Choose Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled className="text-black">
              -- Select Role --
            </option>
            <option value={ROLES.ADMIN} className="text-black">
              {ROLES.ADMIN.toUpperCase()}
            </option>
            <option value={ROLES.USER} className="text-black">
              {ROLES.USER.toUpperCase()}
            </option>
          </select>
        </div>

        <button
          className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold text-lg shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center text-xs text-slate-400">
          Demo access only — no real authentication
        </p>
      </div>
    </div>
  );
};

export default Login;