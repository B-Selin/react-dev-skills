import { useState } from "react";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import './App.css'
import './NewSkillForm.css'
import './SkillListItem.css'



export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  function addSkill(skill) {
    // take a new skill, and uses the spread syntax (...) to create a new array that contains aaaall of the existing skills plus the new skill passed in. This new array is then set as the skills state using the setSkills function??
    setSkills([...skills, skill])
  }
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {/* SkillList component that takes in the skills array as a prop. This will display the list of skills. */}
      <SkillList skills={skills} />
      {/*NewSkillForm component that takes in the addSkill function as a prop. This form allows the user to add new skills by calling the addSkill function */}
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}


