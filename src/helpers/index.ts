import { Expense } from "../types";

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
   ...expense,
    amount: expense.amount.toString(),
  };
};
