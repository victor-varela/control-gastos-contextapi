import { Expense } from "../types";

type ExpenseDetailProps = {
  expense: Expense;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  return (
   <div className="bg-slate-300 shadow-xl mt-5 p-10">

    <div>

    </div>

    <div>
      <p>{expense.expenseName}</p>
      <p>{expense.date?.toString()}</p>
    </div>

   </div>
  );
};

export default ExpenseDetail;
