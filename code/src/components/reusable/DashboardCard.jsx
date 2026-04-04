import {
  Check,
  IndianRupee,
  Pencil,
  TrendingDown,
  TrendingUp,
  Wallet,
  X,
  PiggyBank,
} from "lucide-react";
import { cardsData } from "../../data/cardData";
import { useEffect, useState } from "react";

const DashboardCard = () => {

  const iconMap = {
    Income: TrendingUp,
    Expense: TrendingDown,
    Savings: PiggyBank,
  };

  const [cardState, setCardState] = useState(() => {
    try {
      const saved = localStorage.getItem("financeData");
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        return parsed.map((item) => ({
          ...item,
          icon: iconMap[item.title],
        }));
      } else {
        return cardsData;
      }
    } catch (error) {
      return cardsData;
    }
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const role = localStorage.getItem("Role");

  const income = cardState.find((item) => item.title === "Income")?.amount || 0;

  const expense =
    cardState.find((item) => item.title === "Expense")?.amount || 0;

  const savingTotal =
    cardState.find((item) => item.title === "Savings")?.amount || 0;
  const savingGoal =
    cardState.find((item) => item.title === "Savings")?.goal || 0;

  const totalBalance = income - expense;
  const remainingSavings = savingGoal - savingTotal;

  const remainingText =
    savingTotal > savingGoal
      ? "Goal completed"
      : `Remaining: ₹${remainingSavings}`;

  const handleSave = (index) => {
    const updated = [...cardState];
    updated[index].amount = Number(tempValue);
    setCardState(updated);
    setEditingIndex(null);
  };

  useEffect(() => {
    const cleanedData = cardState.map(({ icon, ...rest }) => rest);

    localStorage.setItem("financeData", JSON.stringify(cleanedData));
  }, [cardState]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* TOTAL BALANCE */}
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-xl transition">
        <div className="flex justify-between items-center">
          <p className="text-slate-400 text-sm">Total Balance</p>
          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
            <Wallet size={18} />
          </div>
        </div>

        <div className="mt-4 text-3xl font-bold flex items-center gap-1">
          <IndianRupee size={22} />
          <span className={totalBalance < 0 ? "text-red-500" : "text-white"}>
            {totalBalance}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm">
          {totalBalance < 0 ? (
            <>
              <TrendingDown size={16} className="text-red-500" />
              <span className="text-red-500">Negative balance</span>
            </>
          ) : (
            <>
              <TrendingUp size={16} className="text-emerald-500" />
              <span className="text-emerald-500">Positive balance</span>
            </>
          )}
        </div>
      </div>

      {/* CARDS */}
      {cardState?.map((data, index) => {
        const Icon = data?.icon;
        const isEditing = editingIndex === index;

        return (
          <div
            key={data?.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-xl transition flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <p className="text-slate-400 text-sm">Total {data?.title}</p>
              <div className={`p-2 rounded-lg ${data?.theme}`}>
                <Icon size={16} />
              </div>
            </div>

            {/* Amount */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-2xl font-semibold text-white gap-1">
                <IndianRupee size={20} />

                {isEditing ? (
                  <input
                    type="number"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="w-24 bg-transparent border-b border-white outline-none"
                    autoFocus
                  />
                ) : (
                  <span>{data?.amount}</span>
                )}
              </div>

              {role === "admin" &&
                (isEditing ? (
                  <div className="flex gap-2">
                    {/* Save */}
                    <button
                      onClick={() => handleSave(index)}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition duration-300 cursor-pointer"
                    >
                      <Check size={14} />
                    </button>

                    {/* Cancel */}
                    <button
                      onClick={() => {
                        setEditingIndex(null);
                        setTempValue("");
                      }}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition duration-300 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setTempValue(data?.amount);
                    }}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition duration-300 cursor-pointer"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                ))}
            </div>

            {/* Breakdown */}
            <div className="mt-4 text-xs space-y-1">
              {data?.title === "Income" &&
                data.sources?.slice(0, 2).map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-emerald-400"
                  >
                    <span>{item?.title}</span>
                    <span>+₹{item?.amount}</span>
                  </div>
                ))}

              {data.title === "Expense" &&
                data.categories?.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex justify-between text-red-400">
                    <span>{item?.title}</span>
                    <span>-₹{item?.amount}</span>
                  </div>
                ))}

              {data.title === "Savings" && (
                <div className="flex justify-between">
                  <p className="text-emerald-500">Goal: ₹{data?.goal}</p>
                  <p
                    className={`${
                      savingTotal > savingGoal
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {remainingText}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;
