import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = {
  Expense: "#ef4444", // red
  Income: "#22c55e", // green
  Savings: "#3b82f6", // blue
};

const OverviewChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No data available</p>;
  }

  return (
    <div className="w-full text-white">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Financial Overview</h2>
        <p className="text-sm text-gray-400">Income vs Expense vs Savings</p>
      </div>

      {/* Chart */}
      <div className="w-full h-75">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={50}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontSize: 12 }} />

            <YAxis
              stroke="#9ca3af"
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#ffffff",
              }}
              formatter={(value) => `₹ ${value}`}
            />

            <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.name] || "#3b82f6"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
