
type AmountDisplayProps ={
    label: string,
    amount: number
}

const AmountDisplay = ({label, amount}:AmountDisplayProps) => {
  return (
    <div className="flex flex-col">
        <p>{label}</p>
        <p>{amount}</p>
    </div>
  )
}

export default AmountDisplay