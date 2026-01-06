import { IoDiscOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";


export default function Dashboard({lastUpdated, refreshRate,rate, goals }) {
    const totalTarget = goals.reduce((sum, goal) => {
                                    if (goal.currency === "USD") {
                                      return sum + goal.targetAmount;
                                    } else {
                                      return sum + goal.targetAmount / rate;
                                    }
                                  }, 0);
    const totalSaved = goals.reduce((sum, goal) => {
                                if (goal.currency === "USD") {
                                  return sum + goal.savedAmount;
                                } else {
                                  return sum + goal.savedAmount / rate;
                                }
                              }, 0);

    const progress = totalTarget ? (totalSaved / totalTarget) * 100 : 0;
  
    return (
      <div className= " text-white w-full bg-blue-500 flex flex-col py-6 px-3 gap-6 rounded">
        <div className="w-full flex flex-row justify-between">
          <p className="flex flex-row items-center font-bold"> <AiOutlineStock/>Financial Overview</p>
          <button className=" bg-gray-300 rounded  py-3 px-4 flex flex-row items-center cursor-pointer hover:scale-95" onClick={refreshRate}>
            <BiRefresh/>
            Refresh Rate
          </button>
        </div>


        <div className="w-full flex flex-col md:flex-row gap-6 md:justify-between text-sm">
          <div>
            <p className="flex flex-row items-center text-gray-300"><IoDiscOutline/>Total Target</p>
            <p className="flex flex-row items-center text-xl"><LiaRupeeSignSolid/>{totalTarget*rate}</p>
            <p className="flex flex-row items-center text-gray-300"><FaDollarSign/>{totalTarget.toFixed(1)}</p>
          </div>
          <div>
              <p className="flex flex-row items-center text-gray-300"><CiWallet/>Total Saved</p>
              <p className="flex flex-row items-center text-xl"><LiaRupeeSignSolid/>{totalSaved*rate}</p>
              <p className="flex flex-row items-center text-gray-300"><FaDollarSign/>{totalSaved}</p>
          </div>
          <div>
              <p className="flex flex-row items-center text-gray-300"><GiProgression/>Overall Progress</p>
              <p className="flex flex-row items-center text-xl">{progress.toFixed(1)}%</p>
              <p className="text-gray-300"> Total goals completion</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 md:flex-row justify-between text-gray-300 text-sm border-t-2 border-gray-400 pt-3">
          <p className="flex flex-row items-center ">Exchange Rate: 1 USD = INR {rate}</p>
          <p>Last updated:{lastUpdated}</p>
        </div>
      </div>
    );
  }
  // 