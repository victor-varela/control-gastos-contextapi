import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";

function App() {
  const { state } = useBudget();
  return (
    <>
      <header className="bg-blue-600 py-8 ">
        <h1 className="text-center uppercase font-black text-white text-4xl"> Planificador de gastos</h1>
      </header>
      <div className="mt-10 p-10 md:w-3xl mx-auto bg-white rounded-lg shadow-lg sm:w-auto ">
        {state.budget > 0 ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {state.budget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;

/*
  En la clase el profe uso para el header la clase max-h-72 y para el div que contiene el BudgetForm la clase max-w-3xl PREGUNTAR POR QUE, que hace la diferencia??.. a la AI..

  Instale tailwindcss segun la documentacion actual v-4 en adelante... 

  Este proyecto trata sobre cambiar la forma de trabajar con el reducer. En el proyecto anterior se importaba en la raiz del proyecto (App.tsx) el reducer con los state y dispatch que luego se iban pasando por props en los componentes que los necesitasen. Ahora eso lo vamos a hacer con un ESTADO GLOBAL --> CONTEXTAPI

  Se crea igualmente el reducers con sus acciones-

*/
