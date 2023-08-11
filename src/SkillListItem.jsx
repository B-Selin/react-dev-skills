export default function SkillListItem({ skill }) { //t take in skill prop which is an object with name and level properties
  return (
    <li className="SkillListItem">
      {/* display the skill name and level. The name and level is rendered by interpolating property */}
      {skill.name} <span className="level">LEVEL {skill.level}</span>
    </li>
  );
}
