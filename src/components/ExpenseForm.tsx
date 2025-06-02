import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";
import { toAmountStr } from "../helpers";

const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: "",
    amount: "0",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");

  const { dispatch, state } = useBudget();

  const handleChangeDate = (date: Value) => {
    setExpense({
      ...expense,
      date: date,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    dispatch({ type: "add-expense", payload: { expense } });

    //Reiniciar el Formulario
    setExpense({ expenseName: "", amount: "0", category: "", date: new Date() });
  };

  //Para llenar el formulario con los valores asociados al Id. Se llena en automatico el gasto
  useEffect(() => {
    if (state.getExpenseById) {
      const foundExpense = state.expenses.find(exp => exp.id === state.getExpenseById);
      if (foundExpense) {
        const updatedExpense = toAmountStr(foundExpense);
        setExpense(updatedExpense);
      }
    }
  }, [state.getExpenseById]);

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="text-2xl uppercase font-black text-center py-2 border-b-4 border-blue-500">Nuevo Gasto</legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Agrega el nombre del gasto"
          className="bg-slate-100 p-2"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Ingresa el monto del gasto. Ej: 300"
          className="bg-slate-100 p-2"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">--- Seleccione ---</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl">
          Fecha:
        </label>
        <DatePicker className="bg-slate-100 p-2 border-0" value={expense.date} onChange={handleChangeDate} />
      </div>
      <input
        type="submit"
        className="w-full p-2 text-xl text-white uppercase bg-blue-600 font-bold cursor-pointer hover:bg-blue-500 rounded-lg"
        value={"Registrar Gasto"}
      />
    </form>
  );
};

export default ExpenseForm;

/*
Este formulario tiene la particularidad de que maneja campos de diferente tipo. EL date es de un tipo definido por la libreria. El amount es number y el resto son strings. 

Para escribir en el campo date hacemos un handleChangeDate unico y para el resto de los campos un handleChange.

El handleChange evalua en que campo esta el user, mediante e.target, y si esta en amount entonces se convierte a number el value ingresado por el user. Para hacer esto nos valemos de la propiedad name de cada input, de ahi la importancia de declararlos. Este es el viejo truco de la abuela.

El type del handleChange lo sacamos escribiendo en la prop onChange del input 'e=>' y nos paramos sobre e para que vscode nos muestre el type. Luego, en la function handleChange debemos escribir los 2 types que pueden ser posibles en este formulario ( input y select) mediante la union | 

--El enfoque para manejar el error en caso de que el formulario tenga un campo vacio es diferente a como se ha hecho en proyectos anteriores. Segun los otros proyectos pudimos haber hecho lo siguiente:

{error &&<ErrorMessage error={error} />}

evaluamos si tenemos algo en el state de error y renderizamos el componente ErrorMessage con la prop error = state de error.

--Cuando vamos a llamar a las acciones del reducer lo hacemos A TRAVES DEL USEBUDGET() que es custom hook que creamos para ello.

*/
