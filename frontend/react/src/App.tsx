import SideBar from './Components/SideBar';
import TaskList from './Components/TaskList';
import { useEffect } from 'react';

const side_bar_buttons = [{title: "Add Task", onClick: () => {}}];

function App() {
  useEffect(() => {
    document.body.classList.add("bg-slate-700");
  });
  return (
  	<div className="flex">
  	<SideBar buttons={side_bar_buttons} open={false}/>
  	<TaskList />
	</div>
	)
}

export default App
