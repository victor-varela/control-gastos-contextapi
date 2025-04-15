import { useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;

    setBudget(value);
    console.log(budget)
    
    if (value > 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-center text-blue-600 font-bold">
          Definir presupuesto
        </label>
        <input
          id="budgetID"
          name="budget"
          type="number"
          value={budget}
          className="w-full bg-white border-gray-200 border focus:outline-none p-2"
          placeholder="Define tu presupesto"
          onChange={e => handleChange(e)}
        />
      </div>
      <input
        type="submit"
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl uppercase cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed" 
        disabled={isValid}
        value={"Definir Presupuesto"}
      />
    </form>
  );
};

export default BudgetForm;
