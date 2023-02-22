
import './App.css';
import List from './components/List'
import Input from "./components/Input/Input";
function App() {
    const tasks = [
        {
            id:1,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        },
        {
            id:4,
            task: 'cleaning'
        }
    ]
  return (
    <div className="App">
        <List taskList={tasks}/>
        <Input />
    </div>
  );
}

export default App;
