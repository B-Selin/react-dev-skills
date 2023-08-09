export default function NewSkillForm() {
  return (
    <form action="" className="NewSkillForm">
      <label htmlFor="input"> Skill </label>
      <input type="text" id="input" />
      <label htmlFor="select">Level{" "} </label>
      <select id="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button id="button">ADD SKILL</button>
    </form>
  );
}
