import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  // creating a variable to assign default values for new skill from
  const initialSkill = {
    name: '',
    level: 3
  }

  // using the useState hook from React to initialize and manage state for a variable called newSkill. 
  //  we are using array destructuring to extract those two values into separate variables:
  // newSkill - This will hold the current value of the state 
  // setNewSkill - This is a function that can be used to update the state value
  const [newSkill, setNewSkill] = useState(initialSkill);


  // creating the handleAddSkill function
  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill(initialSkill);
  }

  function handleChange(evt) {
    const newSkillData = { ...newSkill, [evt.target.name]: evt.target.value };
    setNewSkill(newSkillData)
  }

  return (
    <>
      <form onSubmit={handleAddSkill} className="NewSkillForm">
        <label> Skill </label>
        <input
          value={newSkill.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
        <label>Level</label>
        <select
          value={newSkill.level}
          onChange={handleChange}
          name="level"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button type="submit" id="button">ADD SKILL</button>
      </form>
    </>
  );
}
