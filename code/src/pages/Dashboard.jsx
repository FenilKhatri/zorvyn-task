import { useEffect, useState } from "react";
import DashboardCard from "../components/reusable/DashboardCard";
import IncomePieChart from "../components/reusable/PieChart";
import OverviewBarChart from "../components/reusable/BarChart";
import { cardsData } from "../data/cardData";
import { expenseData, incomeData, overviewData } from "../data/chartData";

const Dashboard = () => {
  const [financeData, setFinanceData] = useState(() => {
    try {
      const saved = localStorage.getItem("financeData");
      return saved ? JSON.parse(saved) : cardsData;
    } catch {
      return cardsData;
    }
  });

  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(financeData));
  }, [financeData]);

  if (!financeData) {
    return <div className="text-white p-5">Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-5 w-full h-full p-3">
      {/* ✅ Correct props */}
      <DashboardCard cardState={financeData} setCardState={setFinanceData} />

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="p-4 border border-slate-600 bg-white/5 rounded-xl shadow-lg w-full overflow-hidden min-w-0">
          <IncomePieChart
            data={incomeData}
            title="Income Distribution"
            description="By Source"
          />
        </div>

        <div className="p-4 border border-slate-600 bg-white/5 rounded-xl shadow-lg w-full overflow-hidden min-w-0">
          <IncomePieChart
            data={expenseData}
            title="Expense Distribution"
            description="By Category"
          />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="p-4 border border-slate-600 bg-white/5 rounded-xl shadow-lg w-full overflow-hidden min-w-0">
        <OverviewBarChart data={overviewData} />
      </div>
    </div>
  );
};

export default Dashboard;
