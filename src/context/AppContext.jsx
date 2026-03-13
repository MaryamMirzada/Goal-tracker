import {  createContext, useState } from "react";

export const AppContext= createContext()
export const AppProvider = ({ children })=> {
    const [xp, setXp] = useState(0);
    const [streak, setStreak] =  useState(0);
const [goals, setGoals] = useState([]);

const addGoal = (goal)=>{
setGoals([...goals, goal]);
}
const deletGoal = (id) =>{
   setGoals(goals.filter(goal=> goal.id !==id));
}
const addXp = (amount) =>{
    setXp(prev => prev + amount );
}

const updateStreak = () =>{
    setStreak(prev => prev + 1);
}


const value = {
    goals,
    addGoal,
    deletGoal,
    xp,
    addXp,
    streak,
   updateStreak
}

return(
    <AppContext.Provider value= {value} >
        {children}
    </AppContext.Provider>
)
}