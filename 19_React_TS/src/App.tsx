import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

const DUMMY_GOALS = [
  {
    id: 1,
    title: "Learn TS",
    description: "Learn TS from the ground up",
  },
  {
    id: 2,
    title: "Learn React",
    description: "Learn React from the ground up",
  },
];

function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  function handleDeleteGoal(id: number) {
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: text, description: summary })
    );
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
        <NewGoal onAdd={handleAddGoal} />
      </main>

      {/* <h1>Hello World!</h1> */}
    </>
  );
}

export default App;
