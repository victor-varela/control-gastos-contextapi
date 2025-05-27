import { categories } from "../data/categories";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";

type ExpenseDetailProps = {
  expense: Expense;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

  const categoryInfo = categories.filter(cat => cat.id === expense.category)

  return (
    <div className="bg-white shadow-lg w-full border-b border-gray-200 p-10 flex items-center gap-5">
      {/* icono de categoria */}
      <div className="w-1/2">
        <img className="w-10" src={`icono_${categoryInfo.map(cat => cat.icon)}.svg`} alt="" />
      </div>

      <div>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString()) }</p>
      </div>
      <div>
        <p>Categoria</p>
        <p className="text-slate-600 text-sm">{categoryInfo.map(cat=> cat.name)}</p>
      </div>
      {/* Cantidades */}
      <AmountDisplay amount={expense.amount} />
    </div>
  );
};

export default ExpenseDetail;


/**
 *     <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString()) }</p>
 *    aca puede patear el codigo porque si no tiene el signo de admiracion ! dice que puede ser null el valor de expense.date OJO
 * 
 */