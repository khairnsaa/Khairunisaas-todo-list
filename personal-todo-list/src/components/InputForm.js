const InputForm = ({taskName, setTaskName, taskId, addTask}) => {

    const handleChange = (e) => {
        setTaskName({
            ...taskName,
            id: taskId,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="from-container">
            {/* <input type="date" name="" id="" /> */}
            <input type="text" name="taskName" className="input-task" value={taskName.taskName} onChange={handleChange} />
            <input type="date" name="deadline" className="input-task" value={taskName.deadline} onChange={handleChange} />
            <button onClick={addTask}>Add</button>
        </section>
    );
}
 
export default InputForm;