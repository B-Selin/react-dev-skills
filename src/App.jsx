import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import './App.css'


export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}

