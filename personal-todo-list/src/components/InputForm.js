const InputForm = ({taskName, setTaskName, setTaskList, taskList}) => {

    const addTask = () => {
        setTaskList([...taskList, taskName])
        setTaskName('')
    }

    return (
        <section className="from-container">
            <input type="text" name="Task" className="input-task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </section>
    );
}
 
export default InputForm;