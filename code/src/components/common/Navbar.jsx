import { Moon } from "lucide-react";

const Navbar = () => {
  // ✅ Safe role handling
  const role = localStorage.getItem("Role");

  const roleName = role
    ? role.charAt(0).toUpperCase() + role.slice(1)
    : "Guest";

  return (
    <div className="w-full sticky top-0 flex items-center justify-between px-6 py-3 bg-[#020617]/30 backdrop-blur-md border-b border-white/5 z-50">
      {/* Left */}
      <div>
        <h1 className="text-white text-lg font-semibold">
          {roleName} Dashboard
        </h1>
        <p className="text-xs text-slate-400">Welcome back 👋</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Theme Button */}
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
          <Moon size={18} className="text-slate-300" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg hover:bg-white/10 transition">
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-semibold text-white">
            {role ? role.charAt(0).toUpperCase() : "G"}
          </div>

          <span className="text-sm font-semibold text-white hidden sm:block">
            {role ? role.toUpperCase() : "GUEST"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
