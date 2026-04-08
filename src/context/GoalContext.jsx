import { createContext, useState, useEffect } from "react";
import { getGoals, saveGoals } from "../utils/storage";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setGoals(getGoals());
  }, []);

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const updateGoal = (id, updated) => {
    setGoals(goals.map(g => g.id === id ? updated : g));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <GoalContext.Provider value={{ goals, addGoal, updateGoal, deleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
};