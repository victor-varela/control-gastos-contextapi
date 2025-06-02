import { DraftExpense, Expense } from "../types";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-Us", { style: "currency", currency: "USD" }).format(amount);
};

export const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("es-Es", dateOptions).format(dateObj);
};

export const toAmountStr = (expense: Expense) => {
  return {
    expenseName: expense.expenseName,
    category: expense.category,
    date: expense.date,
    amount: expense.amount.toString(),
    id: expense.id,
  };
};
