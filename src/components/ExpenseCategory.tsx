import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export const ExpenseCategory = () => {
  const { dispatch } = useBudget();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "categoryFilter", payload: { id: e.target.value } });
  };
  return (
    <form action="" className="bg-white shadow-lg p-10 flex flex-col items-center md:flex-row gap-6">
      <label htmlFor="category" className="text-center">
        Seleccionar Categoria
      </label>
      <select id="category" className="flex-1 bg-slate-100 p-2" onChange={handleChange}>
        <option value="" className="text-center">
          ---Todas las categorias
        </option>
        {categories.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
};

/* 
  Diseño mobile first es que las clases se piensen primero para mobile. flex flex-col --> asi es por defecto <--- luego en md: flex-row


*/
