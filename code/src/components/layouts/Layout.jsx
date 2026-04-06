import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-gray-200">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex flex-col flex-1 bg-[#020617]">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} />

        {/* Page Content */}
        <div className="flex-1 text-white p-3">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
