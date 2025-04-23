//Paso 1- Crear Provider

import { ActionDispatch, createContext, ReactNode, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

//Paso 2- Crear context

//Paso 3- definir el type del context

type BudgetContextProps = {
    state: BudgetState
    dispatch: ActionDispatch<[action: BudgetActions]>
}

type BudgetProviderProps ={
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!) 

export const BudgetProvider = ({children}: BudgetProviderProps)=>{

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return(
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}

        </BudgetContext.Provider>
    )
}





















/*
 Paso 1- creamos provider: el provider es de donde vienen los datos, en este caso los datos vienen del reducer. El provider debe manejar los datos es por eso que ahí instanciamos el reducer que previamente construimos. En este punto estamos CONECTANDO el REDUCER CON EL PROVIDER, las funciones del reducer ahora se pueden manejar desde el PROVIDER.

 Paso 2: crear el Context




 */