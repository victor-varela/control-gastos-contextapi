import { useEffect } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state.expenses])

  const isEmpty = state.expenses.length === 0;
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Lista de Gastos</p>
          {state.expenses.map(expense => (
            <ExpenseDetail expense={expense} key={expense.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
