import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
  const { state, budgetAvailable, totalExpended } = useBudget();
  const percentage = +((totalExpended / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Gastado`}
          styles={buildStyles({
            textSize: "8",
            pathColor: `${percentage === 100 ? "red" : "rgb(21 93 252)"}`,
          })}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 text-white font-bold uppercase rounded-lg w-full p-2 cursor-pointer"
        >
          resetear app
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={budgetAvailable} />
        <AmountDisplay label="Gastado" amount={totalExpended} />
      </div>
    </div>
  );
};

export default BudgetTracker;
