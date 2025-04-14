import { useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget]= useState(0)

  const handleChange = (e)=>{
    console.log(e.target.value);
    
  }
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-center text-blue-600 text-3xl font-bold">Definir presupuesto</label>
        <input 
          type="number" 
          value={0} 
          className="w-full border-2 border-blue-700 p-2" 
          onChange={e =>handleChange(e)}  
        />
      </div>
      <input 
        type="submit"
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl uppercase cursor-pointer"
        value={'Definir Presupuesto'} 
      />
    </form>
  );
};

export default BudgetForm;
