import { DraftExpense, Expense } from "../types";

export type BudgetActions =
  | { type: "define-budget"; payload: { budget: number } }
  | { type: "open-modal" }
  | { type: "close-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } }
  | { type: "remove-expense"; payload: { id: Expense["id"] } } //asi nos traemos solamente el id y no todo el obj expense
  | { type: "editing"; payload: { id: Expense["id"] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  getExpenseById: string;
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
  getExpenseById: "",
};

const createId = (expense: DraftExpense): Expense => {
  //Recibe el objeto expense. Sobreescribe en amount y lo convierte a Number ya que este es el que se va a guardar, crea Id con la funcion randomUUID() nativa de Js
  return {
    ...expense,
    amount: Number(expense.amount),
    id: crypto.randomUUID(),
  };
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

  if (action.type === "add-expense") {
    if (state.getExpenseById) {
      const updatedExpenses = state.expenses.map(exp => exp.id === state.getExpenseById?{
        id: state.getExpenseById,
        expenseName: action.payload.expense.expenseName,
        amount: Number(action.payload.expense.amount),
        category: action.payload.expense.category,
        date: action.payload.expense.date,
      }: exp)
      return {
        ...state,
        expenses: updatedExpenses,
        modal: false,
      };
    } else {
      const expense = createId(action.payload.expense);

      return {
        ...state,
        expenses: [...state.expenses, expense],
        modal: false,
      };
    }
  }

  if (action.type === "remove-expense") {
    return {
      ...state,
      expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
    };
  }

  if (action.type === "editing") {
    return {
      ...state,
      getExpenseById: action.payload.id,
      modal: true,
    };
  }

  return state;
};

/*
    Paso 1: crear las acciones. Las acciones SIEMPRE SON UN TYPE. UNO SOLO POR ESO PONEMOS || Y SON UN OBJETO con 2 propiedades type:que se define directamente en el string que le asignamos y payload que es un objeto que tiene una variable y definimos el tipo (type) de esa variable

    Paso 2: crear el state, el type del state. Recuerda que el reducer tiene 2 cosas State y Action. Cada cosa debe tener definido su type.

    Paso 3: crear initialState, tambien es un objeto. Esta es una variable no un type. por eso es export const. 

    Paso 4: asignamos el type a initialState

    *- Actualizar un gasto: es la parte mas complicada del CRUD. Nos valemos del State GLOBAL para saber el id del gasto que se va a actualizar. Agregamos esa nueva variable al state. getExpenseById

*/
