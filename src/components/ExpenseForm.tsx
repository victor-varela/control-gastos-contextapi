import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { DraftExpense, Expense } from "../types";

const ExpenseForm = () => {

  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: "",
    amount: 0,
    category: "",
    date: new Date(),
  });

  return (
    <form className="space-y-5">
      <legend className="text-2xl uppercase font-black text-center py-2 border-b-4 border-blue-500">Nuevo Gasto</legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Agrega el nombre del gasto"
          className="bg-slate-100 p-2"
          value={expense.expenseName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Ingresa el monto del gasto. Ej: 300"
          className="bg-slate-100 p-2"
          value={expense.amount}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>
        <select 
            name="category" 
            id="category" 
            className="bg-slate-100 p-2" 
            value={expense.category}>
          <option value="">--- Seleccione ---</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl">
          Fecha:
        </label>
        <DatePicker className="bg-slate-100 p-2 border-0" value={expense.date} />
      </div>
      <input
        type="submit"
        className="w-full p-2 text-xl text-white uppercase bg-blue-600 font-bold cursor-pointer hover:bg-blue-500 rounded-lg"
        value={"Registrar Gasto"}
      />
    </form>
  );
};

export default ExpenseForm;
