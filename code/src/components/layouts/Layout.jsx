import Sidebar from '../common/Sidebar'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-full flex bg-gray-200">
        <Sidebar />

        <main className="flex flex-col flex-1 bg-[#020617]">
          <Navbar />
          <div className="flex-1 bg-[#020617] text-white">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout