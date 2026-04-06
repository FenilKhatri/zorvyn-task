import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#F44336"];

const IncomePieChart = ({ data, title, description }) => {
  return (
    <div className="w-full text-white">
      {/* Header */}
      <div className="mb-3">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      {/* ✅ IMPORTANT: fixed height wrapper */}
      <div className="w-full h-75">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="80%" // ✅ responsive radius
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomePieChart;
