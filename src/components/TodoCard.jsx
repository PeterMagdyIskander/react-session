import taskDot from '../assets/images/task-dot.svg'
const TodoCard = ({ todoItem, deleteTodoFromList, completeTodo }) => {
    const handleDelete = () => {
        deleteTodoFromList(todoItem)
    }
    // const handleDone = () => {
    //     todoItem.done = true //this isnt working because we didnt update the state
    // }
    const handleCompleteTodo = () => {
        completeTodo(todoItem.id)
    }
    return (
        <div className="card-container">
            <div className="title">
                <img src={taskDot} alt="task dot" />
                <p className={todoItem.done ? 'done' : null}>{todoItem.title}</p>
            </div>
            {!todoItem.done && <div className="buttons-container" >
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCompleteTodo}>Done</button>
            </div>}
        </div>
    )
}
export default TodoCard;