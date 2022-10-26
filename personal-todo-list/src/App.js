import './App.css';
import InputForm from './components/InputForm';
import TaskLists from './components/TaskLists';
import {useState} from 'react'

function App() {
    const [taskName, setTaskName] = useState('')
    const [taskList, setTaskList] = useState([])
    return (
        <div className="App">
            <h1>Khairunnisaas's Todo List</h1>
            <InputForm 
                taskName={taskName} 
                setTaskName={setTaskName} 
                setTaskList={setTaskList} 
                taskList={taskList}
            />

            <div className="task-lists">
                <ul>
                    {taskList.map(task => (
                        <TaskLists task={task} key={task} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
