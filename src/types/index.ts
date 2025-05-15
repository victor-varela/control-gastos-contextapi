// Este es el type del gasto UNA VEZ QUE SE ALMACENA
export type Expense= {
    id: string,
    expenseName: string,
    amount: number,
    category: string,
    date: Value
}


//Este es el type del gasto TEMPORAL, SIN ID
export type DraftExpense = Omit<Expense, 'id' | 'amount'>&{
    amount: string
}

/*
✅ Solución: sobrescribir el tipo de amount al hacer el Omit
Podés hacer esto fácilmente usando una intersección (&) para reemplazar el tipo de amount:

ts
Copiar
Editar
export type DraftExpense = Omit<Expense, 'id' | 'amount'> & {
  amount: string;
}
*/
    
export type Category ={
    id: string,
    name: string,
    icon: string
}


type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];