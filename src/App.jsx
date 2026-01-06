import { useState } from "react";
import Dashboard from "./components/Dashboard";
import GoalCard from "./components/GoalCard";
import {useExchangeRate} from "./hooks/ExchangeRate";
import AddGoalForm from './components/AddGoal';

function App() {
  const [goals, setGoals] = useState([]);
  const { rate, lastUpdated, refreshRate } = useExchangeRate();
  const [open,setOpen] = useState(false);

  return (
    <div className="w-screen max-w-5/6 p-6  mx-auto">
      <Dashboard lastUpdated={lastUpdated} refreshRate={refreshRate}  rate = {rate} goals={goals} />

      <div className="w-full flex flex-row justify-between mt-3">
        <p className="font-bold text-xl">Your Goals</p>
        <button className="bg-blue-500 rounded py-2 px-4 hover:scale-95 cursor-pointer"
          onClick={() =>{
            setOpen(true)
          }}
        >+  Add Goals</button>
      </div>


      {
        open && (
          <div className="fixed inset-0 flex justify-center items-center  backdrop-blur-2xl">
            <AddGoalForm setGoals={setGoals} onClose={() => setOpen(false)}/>
          </div>
        )
      }

      
      <div className="w-full grid md:grid-cols-4 gap-4 mt-6">
        {goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            setGoals={setGoals}
            rate={rate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
