import { useState } from "react";
import ContributionModal from "./Contribution";
import ProgressBar from "./progressBar";
import { convertCurrency } from "../utils.js/ConvertCurrency";
import { FaDollarSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function GoalCard({ goal, setGoals, rate }) {
  console.log("gaol",goal)
  const [open, setOpen] = useState(false);

  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const converted =
    rate && convertCurrency(goal.targetAmount, goal.currency, rate);

  return (
    <div className="border p-4 rounded justify-start shadow-gray-300 shadow-xl">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">{goal.name}</h3>
        <p className="max-w-fit max-h-fit p-[2px] text-xs bg-gray-300 rounded-lg">{progress.toFixed(0)}%</p>
      </div>
      <p className="flex flex-row items-center gap-0 font-bold text-2xl text-blue-400"><FaDollarSign/>{goal.currency == "USD"?goal.targetAmount:converted.toFixed(0)} </p>
      {rate && <p className="text-xs text-gray-500 flex flex-row items-center"><LiaRupeeSignSolid/>{goal.currency == "USD"?converted.toFixed(0):goal.targetAmount}</p>}
      <div>
        <div className="flex flex-row justify-between text-sm font-medium text-gray-400">
          <p>Progress</p>
          <p className="flex flex-row items-center"><FaDollarSign/>{goal.savedAmount} saved</p>
        </div>
        <ProgressBar value={progress} />
      </div>

      {/* <div className="w-full font-medium text-center"> */}
        <button className="w-full px-full font-medium  py-1 border-2 border-gray-500 rounded-xl mt-2 hover:scale-95 cursor-pointer"  onClick={() => setOpen(true)}>+  Add Contribution</button>
      {/* </div> */}

      {open && (
        <ContributionModal
          goal={goal}
          setGoals={setGoals}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
