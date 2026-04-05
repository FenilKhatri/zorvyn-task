import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#F44336"];

const IncomePieChart = ({ data, title, description }) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-start">
          <p className="text-xl font-ssemibold">{title}</p>
          <p className="text-slate-500 font-ssemibold">{description}</p>
        </div>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </>
  );
};

export default IncomePieChart;
