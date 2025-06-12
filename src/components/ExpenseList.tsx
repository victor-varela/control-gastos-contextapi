import { useBudget } from "../hooks/useBudget";
import CategoryTotal from "./CategoryTotal";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  const categoryFilter = state.currentCategory
  ? state.expenses.filter(expense => expense.category === state.currentCategory)
  : state.expenses;
  const isEmpty = categoryFilter.length === 0;
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Lista de Gastos</p>
          {categoryFilter.map(expense => (
            <ExpenseDetail expense={expense} key={expense.id} />
            
          ))}
          {state.currentCategory &&(
            <CategoryTotal/>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
