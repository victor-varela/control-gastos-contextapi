import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

const CategoryTotal = () => {
  const { state } = useBudget();
  const categorie= categories.find(category=> category.id === state.currentCategory)
  
  const categoryFilter = state.expenses
    .filter(expense => expense.category === state.currentCategory)
    .reduce((total, expense) => total + expense.amount, 0);

  return <p className="bg-white shadow-lg p-5 text-center text-2xl font-bold">{`Total ${categorie?.name} $  ${categoryFilter}`}</p>;
};

export default CategoryTotal;
