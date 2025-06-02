import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"; //las dependencias se importan de primero por 'convencion'. Este componente usa react-swipeable-list dependency.Se debe instalar tambien el prop-type de npm
import "react-swipeable-list/dist/styles.css";
import { categories } from "../data/categories";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";

type ExpenseDetailProps = {
  expense: Expense;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = categories.filter(cat => cat.id === expense.category)[0];
  const {dispatch} = useBudget()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type:'editing', payload:{id: expense.id}})}>Actualizar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => dispatch({ type:'remove-expense', payload:{id: expense.id}})} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()} maxSwipe={30}>
        <div className="bg-white shadow-lg w-full border-b border-gray-200 p-10 flex items-center gap-5">
          {/* icono de categoria */}
          <div>
            <img className="w-20" src={`icono_${categoryInfo.icon}.svg`} alt={`icono${categoryInfo.name}`} />
          </div>

          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
          </div>
          {/* Cantidades */}
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetail;

/**
 *     <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString()) }</p>
 *    aca puede patear el codigo porque si no tiene el signo de admiracion ! dice que puede ser null el valor de expense.date OJO
 *
 */
