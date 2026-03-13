import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function GoalNew() {

  const { addGoal } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Date.now(),
      title,
      category,
      progress: 0,
      status: "active"
    };

    addGoal(newGoal);

    setTitle("");
  };

  return (
    <div>
      <h2>Create Goal</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Goal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Study</option>
          <option>Health</option>
          <option>Work</option>
          <option>Personal</option>
        </select>

        <button type="submit">
          Add Goal
        </button>

      </form>
    </div>
  );
}

export default GoalNew;