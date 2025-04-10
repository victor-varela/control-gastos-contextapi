import BudgetForm from "./components/BudgetForm";

function App() {
  return (
    <>
      <header className="bg-blue-600 py-8 ">
        <h1 className="text-center uppercase font-black text-white text-4xl"> Planificador de gastos</h1>
      </header>
      <div className="mt-10 p-10 w-3xl mx-auto bg-white rounded-lg shadow-lg  ">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
