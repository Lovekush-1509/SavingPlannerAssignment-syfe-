import { useState } from "react";

export default function ContributionModal({ goal, setGoals, onClose }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addContribution = () => {
    if (amount <= 0) return;

    setGoals(prev =>
      prev.map(g =>
        g.id === goal.id
          ? {
              ...g,
              savedAmount: g.savedAmount + Number(amount),
              contributions: [...g.contributions, { amount, date }]
            }
          : g
      )
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center  backdrop-blur-2xl">
      <div className=" flex flex-col items-center p-4 gap-2 shadow-2xl shadow-gray-700 bg-gray-200">
        <input className="w-full border-2 px-3 py-2" type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
        <input className="w-full border-2 px-3 py-2" type="date" onChange={e => setDate(e.target.value)} />
        <button className="w-full bg-blue-500 rounded py-2 px-4 hover:scale-95 cursor-pointer" onClick={addContribution}>Add</button>
        <button className="w-full bg-red-700 rounded py-2 px-4 hover:scale-95 cursor-pointer" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
