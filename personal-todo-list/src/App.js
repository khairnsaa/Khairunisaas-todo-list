import './App.css';
import InputForm from './components/InputForm';
import TaskLists from './components/TaskLists';
import {useState} from 'react'

function App() {
    const [taskId, setTaskId] = useState(0)
    const [task, setTask] = useState({
        id: 0,
        taskName: '',
        deadline: ''
    })
    const [taskList, setTaskList] = useState([])
    const [ currentIndex, setCurrentIndex] = useState(-1)

    const addTask = () => {
        if(currentIndex !== -1){
            taskList.map((taskLoop, index) => {
                if(taskLoop.id == currentIndex){
                    console.log(task)
                    taskList[index] = task
                }
            })
            console.log(task)
            setTask({
                taskName: '',
                deadline: ''
            })
            console.log(taskList)
            setTaskId(taskId+1)
            setCurrentIndex(-1)
        } else {
            setTaskList([...taskList, task])
            setTaskId(taskId+1)
            setTask({
                taskName: '',
                deadline: ''
            })
        }
        
    }

    const deleteTask = (e) => {
        const newTask = taskList.filter((el) => el.id != e.target.parentElement.id)
        setTaskList(newTask)
    }

    const updateTask = (e) => {
        const editTask = taskList.filter(el => el.id == e.target.parentElement.id)
        console.log(editTask)
        setTask({
            id: editTask[0].id,
            taskName: editTask[0].taskName,
            deadline: editTask[0].deadline
        })
        setCurrentIndex(editTask[0].id)
    }
    return (
        <div className="App">
            <h1>Khairunnisaas's Todo List</h1>
            <InputForm 
                taskName={task} 
                setTaskName={setTask} 
                taskId={taskId}
                addTask={addTask}
            />

            <div className="task-lists">
                <ul>
                    {taskList.map(task => (
                        <TaskLists 
                            taskName={task.taskName} 
                            deadline={task.deadline} 
                            key={task.id} 
                            id={task.id}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
