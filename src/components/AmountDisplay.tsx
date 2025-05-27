import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
};

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="text-black font-black">{formatCurrency(amount)}</span>
    </p>
  );
};

export default AmountDisplay;

/**
 *   label?: string;
 * se usa el ? OPCIONAL, ese valor puede ser opcional porque el componente ExpenseDetail no necesita enviar el prop label, asi que se coloca el condicional para que no tenga errores. Label puede venir o no...
 * 
 */
