import Layout from "../components/layouts/Layout";
import DashboardCard from "../components/reusable/DashboardCard";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="w-full h-full p-3">
          <DashboardCard />
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
