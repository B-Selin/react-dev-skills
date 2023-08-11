import SkillListItem from "./SkillListItem";

// SkillList component takes in a skills prop which is an array of skill objects
export default function SkillList({ skills }) {
  return (
    <ul className="SkillList">
      {/* Map through the skills array and for each skill it renders a <SkillListItem> component, passing the skill object as a prop */}
      {skills.map((s, idx) => (
        <SkillListItem
          skill={s}
          key={idx}
        >
          {s.name} - {s.level}
        </SkillListItem>
      ))}
    </ul>
  );
}