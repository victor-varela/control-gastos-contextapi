//Paso 1- Crear Provider

import { ActionDispatch, createContext, ReactNode, useReducer } from "react";
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer";

//Paso 2- Crear context

//Paso 3- definir el type del context

type BudgetContextProps = {
  state: BudgetState;
  dispatch: ActionDispatch<[action: BudgetActions]>;
  totalExpended: number;
  budgetAvailable: number;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpended = state.expenses.reduce((total, expense) => total + expense.amount, 0);
  const budgetAvailable = state.budget - totalExpended;

  //Se guardan todo el Paquete de valores que viaja por el contexto en una sola variable y luego se pasa en el value
  const value = { state, dispatch, totalExpended, budgetAvailable };

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
};

/*
 Paso 1- creamos provider: el provider es de donde vienen los datos, en este caso los datos vienen del reducer. El provider debe manejar los datos es por eso que ahí instanciamos el reducer que previamente construimos. En este punto estamos CONECTANDO el REDUCER CON EL PROVIDER, las funciones del reducer ahora se pueden manejar desde el PROVIDER.

 Paso 2- crear el Context: usamos createContext y definimos el type que va a llevar.

 Paso 4- instaciamos el contetx DENTRO del PROVIDER, con la sintaxis de BudgetContext.Provider y rodeamos la App con children. Pasamos state y dispatch como value y listo! --> luego pasamos otros state que nos permiten tener acceso a ellos en toda la app (totalExpended y budgetAvailable)

Luego en App.tsx instanciamos un custom hook context

***************************************************
BudgetProvider: crea el dispatch con useReducer.

BudgetContext: lo transporta.

useBudget(): lo accede.

dispatch(...): cuando lo llamás, React invoca el reducer.

💡 Metáfora rápida
Pensá que:

BudgetProvider = central eléctrica → crea energía (state + dispatch).

BudgetContext = cableado → distribuye energía.

useBudget() = enchufe → accedés a la energía.

dispatch(...) = interruptor → manda una señal a la central (reducer) para cambiar algo.


los state de totalExpended y budgetAvailable los creamos en el context para tener acceso en los diferentes componentes y evitar duplicar el codigo.
 */
