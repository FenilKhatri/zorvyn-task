import { Search, Moon } from "lucide-react";

const Navbar = () => {

  const role = JSON.parse(localStorage.getItem("Role") || "");

  const roleName = role
    ? role.charAt(0).toUpperCase() + role.slice(1)
    : "Guest";

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-[#020617] backdrop-blur-md border-b border-white/5">
      {/* Left - Page Title */}
      <div>
        <h1 className="text-white text-lg font-semibold">
          {roleName} Dashboard
        </h1>
        <p className="text-xs text-slate-400">Welcome back 👋</p>
      </div>

      {/* Center - Search */}
      <div className="hidden md:flex items-center w-1/3 relative">
        <Search size={16} className="absolute left-3 text-slate-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
          <Moon size={18} className="text-slate-300" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer bg-white/5 px-2 py-1 rounded-lg hover:bg-white/10 transition">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-semibold text-white">
            {role ? role.charAt(0).toUpperCase() : "G"}
          </div>

          {/* Name */}
          <span className="text-sm font-semibold text-white hidden sm:block">
            {role ? role.toUpperCase() : "GUEST"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
