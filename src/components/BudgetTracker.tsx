import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
  const {state} = useBudget()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Grafica de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button type="button" className="bg-pink-600 text-white font-bold uppercase rounded-lg w-full p-2 cursor-pointer">
          resetear app
        </button>
        <AmountDisplay
          label='Presupuesto'
          amount={state.budget}
        />
        <AmountDisplay
          label='Disponible'
          amount={state.budget}
        />
        <AmountDisplay
          label='Gastado'
          amount={state.budget}
        />
      </div>
    </div>
  );
};

export default BudgetTracker;
