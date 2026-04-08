export const getGoals = () => {
  return JSON.parse(localStorage.getItem("goals")) || [];
};

export const saveGoals = (goals) => {
  localStorage.setItem("goals", JSON.stringify(goals));
};