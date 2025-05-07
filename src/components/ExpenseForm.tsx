import { categories } from "../data/categories";

const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="text-2xl uppercase font-black text-center py-2 border-b-4 border-blue-500">Nuevo Gasto</legend>
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
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>
        <select name="category" id="category" className="bg-slate-100 p-2">
          <option value=''>--- Seleccione ---</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        className="w-full p-2 text-xl text-white uppercase bg-blue-600 font-bold cursor-pointer hover:bg-blue-500 rounded-lg"
        value={'Registrar Gasto'}
      />
    </form>
  );
};

export default ExpenseForm;
