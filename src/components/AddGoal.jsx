import { useState } from "react";

export default function AddGoalForm({ setGoals ,onClose}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || amount <= 0) {
      alert("Name and Amount cannot be empty");
      onClose();
      return;
    }

    setGoals(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        targetAmount: Number(amount),
        currency,
        savedAmount: 0,
        contributions: []
      }
    ]);


    setName("");
    setAmount("");
    onClose()
  };

  return (
    <form className="w-1/2 h-1/2 flex flex-col items-center justify-around p-4  shadow-2xl shadow-gray-700 bg-gray-200" onSubmit={handleSubmit}>
      <input className="bg-blue-50 w-full border-2 px-3 py-2 rounded" placeholder="Goal name" onChange={e => setName(e.target.value)} />
      <input className=" bg-blue-50 w-full border-2 px-3 py-2 rounded" type="number" placeholder="Target" onChange={e => setAmount(e.target.value)} />
      <select className="bg-blue-50 w-1/2 border-2 px-3 py-2 rounded" onChange={e => setCurrency(e.target.value)}>
        <option>INR</option>
        <option>USD</option>
      </select>
      <button className="w-full bg-blue-500 rounded py-2 px-4 hover:scale-95 cursor-pointer">Add Goal</button>
      <button className="w-full bg-red-700 rounded py-2 px-4 hover:scale-95 cursor-pointer" onClick={onClose}>Cancel</button>
    </form>
  );
}
