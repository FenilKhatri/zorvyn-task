import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../utils/constants";
import { LogOut, Zap, X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all
     ${
       isActive
         ? "bg-white/10 text-white"
         : "text-slate-400 hover:text-white hover:bg-white/5"
     }`;

  const role = localStorage.getItem("Role")?.toLowerCase();

  // ✅ FIXED redirect
  if (!role) return <Navigate to="/" replace />;

  const filteredLinks =
    role === "admin"
      ? SIDEBAR_LINKS
      : SIDEBAR_LINKS.filter((link) => link.roles.includes("user"));

  const handleLogout = () => {
    localStorage.removeItem("Role");
    navigate("/");
  };

  return (
    <>
      {/* OVERLAY (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static top-0 left-0 z-40
          w-72 h-full
          bg-[#020617]
          border-r border-white/5
          text-white
          flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* TOP SECTION */}
        <div className="p-5">
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h1 className="text-lg font-semibold">NovaFin</h1>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Logo */}
          <div className="hidden md:flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
              <span className="font-bold">◧</span>
            </div>
            <h1 className="text-lg font-semibold">NovaFin</h1>
          </div>

          {/* MENU */}
          <div className="mb-6">
            <p className="text-xs text-slate-500 mb-3">MAIN MENU</p>

            <div className="flex flex-col gap-2">
              {filteredLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={linkClasses}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="p-5 border-t border-white/10">
          {/* Upgrade Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-3">
              <Zap size={18} />
            </div>

            <h3 className="text-sm font-semibold">Upgrade to Pro</h3>
            <p className="text-xs text-slate-400 mt-1">
              Get advanced analytics
            </p>

            <button className="mt-4 w-full py-2 rounded-lg bg-linear-to-r from-indigo-500 to-blue-500 text-sm font-medium hover:scale-[1.03] transition">
              Upgrade
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-4 w-full py-2 rounded-lg bg-red-500 hover:bg-red-500/80 text-sm font-medium flex items-center justify-center gap-3 transition duration-300 cursor-pointer"
          >
            Logout
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
