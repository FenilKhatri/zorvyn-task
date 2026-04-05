import { financeData } from "./financeData";

export const incomeData = financeData.income.sources.map(item => ({
    name: item.title,
    value: item.amount,
}));

export const expenseData = financeData.expense.categories.map(item => ({
    name: item.title,
    value: item.amount,
}));

export const overviewData = [
    { name: "Income", amount: financeData.income.total },
    { name: "Expense", amount: financeData.expense.total },
    { name: "Savings", amount: financeData.savings.total },
];