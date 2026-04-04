import { NavLink, useNavigate } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../utils/constants";
import { LogOut, Zap } from "lucide-react";

const Sidebar = () => {

  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all
     ${
       isActive
         ? "bg-white/10 text-white"
         : "text-slate-400 hover:text-white hover:bg-white/5"
     }`;
  
     const role = JSON.parse(localStorage.getItem("Role"));
     const filteredLinks = role === "admin" ? SIDEBAR_LINKS : SIDEBAR_LINKS.filter((link) => link.roles.includes("user"));
  
     const handleLogout = () => {
      localStorage.removeItem("Role");
      navigate("/");
     }

  return (
    <div className="hidden md:flex flex-col justify-between w-72 min-h-screen bg-linear-to-b from-[#020617] via-[#020617] to-[#020617] border-r border-white/5 text-white">
      {/* Top */}
      <div className="p-5">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
            <span className="font-bold">◧</span>
          </div>
          <h1 className="text-lg font-semibold">NovaFin</h1>
        </div>

        {/* MAIN MENU */}
        <div className="mb-6">
          <p className="text-xs text-slate-500 mb-3">MAIN MENU</p>

          <div className="flex flex-col gap-2">
            {filteredLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink key={index} to={item.path} className={linkClasses}>
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="p-5 border-t border-white/10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-3">
            <Zap size={18} />
          </div>

          <h3 className="text-sm font-semibold">Upgrade to Pro</h3>
          <p className="text-xs text-slate-400 mt-1">Get advanced analytics</p>

          <button className="mt-4 w-full py-2 rounded-lg bg-linear-to-r from-indigo-500 to-blue-500 text-sm font-medium hover:scale-[1.03] transition">
            Upgrade
          </button>
        </div>

        <button className="mt-4 w-full py-2 rounded-lg bg-red-500 hover:bg-red-500/80 text-md font-medium flex items-center justify-center gap-3 transition duration-300 cursor-pointer" onClick={handleLogout}>
          Logout
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
