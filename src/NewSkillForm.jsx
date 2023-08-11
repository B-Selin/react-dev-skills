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


  // creating the handleAddSkill function, evt parameter is the submit events
  function handleAddSkill(evt) {
    evt.preventDefault();  // prevent the default form submission behavior which would refresh the page
    addSkill(newSkill); //call addSkill and passes it the newSkill state variable which holds the data from the form
    setNewSkill(initialSkill); // reset the newSkill state back to some initial value after submitting
  }

  // creating handleChange function, event objewvt is the parameter
  function handleChange(evt) {
    //create a new object called newSkillData that contains the existing newSkill state object, along with dynamically setting the key [evt.target.name] to the updated value from evt.target.value
    const newSkillData = { ...newSkill, [evt.target.name]: evt.target.value }; //evt.target.name is in square brackets cause it will be the object[evt.target.name]
    setNewSkill(newSkillData) // call setNewSkill to update the newSkill state with the updated object
  }

  return (
    <>
      <form onSubmit={handleAddSkill} className="NewSkillForm">
        <label> Skill </label>
        <input
          value={newSkill.name} // necessary, also we are using fancy brackets here because we are embedding JS expressions 
          onChange={handleChange} // necessary
          name="name" // has to match the object key:value names
          type="text"
        />
        <label>Level</label>
        <select
          value={newSkill.level} // necessary
          onChange={handleChange} // necessary
          name="level" // has to match the object key:value names
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
