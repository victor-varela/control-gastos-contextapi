export type BudgetActions =
  | {
      type: "define-budget";
      payload: { budget: number };
    }
  | { type: "open-modal" }
  | { type: "close-modal" };

export type BudgetState = {
  budget: number;
  modal: boolean;
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
};

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
  if (action.type === "define-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "open-modal") {
    return {
      ...state,
      modal: true,
    };
  }
  if (action.type === "close-modal") {
    return {
      ...state,
      modal: false,
    };
  }

  return state;
};

/*
    Paso 1: crear las acciones. Las acciones SIEMPRE SON UN TYPE. UNO SOLO POR ESO PONEMOS || Y SON UN OBJETO con 2 propiedades type:que se define directamente en el string que le asignamos y payload que es un objeto que tiene una variable y definimos el tipo (type) de esa variable

    Paso 2: crear el state, el type del state. Recuerda que el reducer tiene 2 cosas State y Action. Cada cosa debe tener definido su type.

    Paso 3: crear initialState, tambien es un objeto. Esta es una variable no un type. por eso es export const. 

    Paso 4: asignamos el type a initialState

*/
