const TaskLists = ({taskName, deadline, id, deleteTask, updateTask}) => {
    return (
        <li id={id}>
            <p>{taskName}, {deadline}</p>
            <button onClick={deleteTask}>delete</button>
            <button onClick={updateTask}>update</button>
        </li>
    );
}
 
export default TaskLists;