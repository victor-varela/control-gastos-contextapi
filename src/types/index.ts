// Este es el type del gasto UNA VEZ QUE SE ALMACENA
export type Expense= {
    id: string,
    expenseName: string,
    amount: number,
    category: string,
    date: Value
}


//Este es el type del gasto TEMPORAL, SIN ID
export type DraftExpense = Omit<Expense, 'id'>
    
export type Category ={
    id: string,
    name: string,
    icon: string
}


type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];