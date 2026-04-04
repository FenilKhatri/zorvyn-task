export const getFinanceData = () => {
    const data = localStorage.getItem("financeData");
    return data ? JSON.parse(data) : null;
};

export const setFinanceData = (data) => {
    localStorage.setItem("financeData", JSON.stringify(data));
}