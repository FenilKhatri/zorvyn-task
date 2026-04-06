const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 bg-[#020617] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
      {/* Left */}
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} NovaFin. All rights reserved.
      </p>

      {/* Center Links */}
      <div className="flex items-center gap-6 text-sm text-slate-400">
        <button className="hover:text-white transition">Privacy</button>
        <button className="hover:text-white transition">Terms</button>
        <button className="hover:text-white transition">Support</button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>Status:</span>
        <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400">
          Online
        </span>
      </div>
    </footer>
  );
};

export default Footer;
