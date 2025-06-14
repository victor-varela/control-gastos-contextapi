import { useEffect } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseList from "./components/ExpenseList";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";
import { ExpenseCategory } from "./components/ExpenseCategory";

function App() {
  const { state } = useBudget();

  //Para escribir en localStorage
  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header className="bg-blue-600 py-8 ">
        <h1 className="text-center uppercase font-black text-white text-4xl"> Planificador de gastos</h1>
      </header>
      <div className="mt-10 p-10 md:w-3xl mx-auto bg-white rounded-lg shadow-lg sm:w-auto ">
        {state.budget > 0 ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {state.budget > 0 && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseCategory/>
          <ExpenseList />
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

  Capitulo LocalStorage:  Cuando la aplicación carga por primera vez, el estado global obtiene su valor inicial del reducer, y el campo budget se inicializa usando la función initialBudget(). Esta función lee desde localStorage si hay un valor guardado; si no, usa 0 como valor por defecto. Luego, en el componente App, cada vez que state.budget cambia, se guarda automáticamente en localStorage con useEffect. Esto asegura que si el usuario recarga la página, el valor del presupuesto persiste. Como App accede al estado global con useBudget(), puede usar state.budget para decidir qué componente renderizar (formulario o seguimiento de gastos).

  Entonces el flujo completo es:
main.jsx monta <BudgetProvider>, que envuelve a <App />.

BudgetProvider se inicializa → llama useReducer(...).

useReducer ejecuta la función reductora con initialState.

Dentro de initialState, se llama initialBudget() → lee localStorage o devuelve 0.

Ese estado es accesible desde App gracias a useBudget().

App renderiza según state.budget.

Cuando budget cambia, useEffect lo guarda en localStorage.

 


*/
