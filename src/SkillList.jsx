import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  return (
    <ul className="SkillList">
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