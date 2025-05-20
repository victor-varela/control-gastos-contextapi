import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  const isEmpty = state.expense.length === 0;
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold">Lista de Gastos</p>
          {state.expense.map(expense => {
            <ExpenseDetail />;
          })}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
