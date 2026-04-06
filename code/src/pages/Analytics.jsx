import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { cardsData } from "../data/cardData";

const Analytics = () => {
  const [financeData, setFinanceData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("financeData");
    setFinanceData(stored ? JSON.parse(stored) : cardsData);
  }, []);

  if (!financeData || financeData.length === 0) {
    return <div className="text-white p-5">Loading...</div>;
  }

  // Extract values
  const income = financeData.find((i) => i.title === "Income")?.amount || 0;
  const expense = financeData.find((i) => i.title === "Expense")?.amount || 0;
  const savings = financeData.find((i) => i.title === "Savings")?.amount || 0;
  const goal = financeData.find((i) => i.title === "Savings")?.goal || 1;

  // Fake monthly trend
  const monthlyData = [
    { month: "Jan", income: income * 0.6, expense: expense * 0.5 },
    { month: "Feb", income: income * 0.7, expense: expense * 0.6 },
    { month: "Mar", income: income * 0.8, expense: expense * 0.7 },
    { month: "Apr", income: income, expense: expense },
  ];

  // Overview
  const overviewData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
    { name: "Savings", value: savings },
  ];

  const savingsPercent = Math.min((savings / goal) * 100, 100);

  return (
    <div className="p-5 text-white space-y-6">
      {/* HEADER */}
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-4 bg-slate-900 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Income</p>
          <h2 className="text-xl font-bold text-emerald-400">₹ {income}</h2>
        </div>

        <div className="p-4 bg-slate-900 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Expense</p>
          <h2 className="text-xl font-bold text-red-400">₹ {expense}</h2>
        </div>

        <div className="p-4 bg-slate-900 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Savings Progress</p>
          <h2 className="text-xl font-bold text-blue-400">{savingsPercent}%</h2>
        </div>
      </div>

      {/* LINE CHART (TREND) */}
      <div className="p-5 bg-slate-900 rounded-xl border border-white/10">
        <h2 className="mb-4 text-lg font-semibold">Monthly Trend</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip formatter={(val) => `₹ ${val}`} />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="p-5 bg-slate-900 rounded-xl border border-white/10">
        <h2 className="mb-4 text-lg font-semibold">Financial Comparison</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={overviewData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip formatter={(val) => `₹ ${val}`} />

            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SAVINGS PROGRESS */}
      <div className="p-5 bg-slate-900 rounded-xl border border-white/10">
        <h2 className="mb-4 text-lg font-semibold">Savings Goal</h2>

        <div
          className="bg-emerald-500 h-3 rounded-full"
          style={{ width: `${savingsPercent}%` }}
        />

        <p className="mt-2 text-sm text-gray-400">
          ₹ {savings} / ₹ {goal}
        </p>
      </div>
    </div>
  );
};

export default Analytics;
