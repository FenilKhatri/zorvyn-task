import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";
import { financeData } from "./financeData";

export const cardsData = [
    {
        title: "Income",
        theme: "text-green-500 bg-green-500/10",
        amount: financeData?.income?.total,
        sources: financeData?.income?.sources,
    },
    {
        title: "Expense",
        theme: "text-red-500 bg-red-500/10",
        amount: financeData?.expense?.total,
        categories: financeData?.expense?.categories,
    },
    {
        title: "Savings",
        theme: "text-slate-500 bg-slate-500/10",
        amount: financeData?.savings?.total,
        goal: financeData?.savings?.goal,
    },
];