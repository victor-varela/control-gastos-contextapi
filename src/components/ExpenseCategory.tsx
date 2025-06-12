import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export const ExpenseCategory = () => {
  const { dispatch } = useBudget();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "categoryFilter", payload: { id: e.target.value } });
  };
  return (
    <form action="">
      <label htmlFor="category">Seleccionar Categoria</label>
      <select id="category" onChange={handleChange}>
        <option value="">---Todas las categorias</option>
        {categories.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
};
