import taskDot from "../assets/images/task-dot.svg";
// import { useEffect } from "react";
const TodoCard = ({ todoItem, deleteTodoFromList, completeTodo }) => {
  const handleDelete = () => {
    deleteTodoFromList(todoItem);
  };
  // const handleDone = () => {
  //     todoItem.done = true //this isnt working because we didnt update the state
  // }
  const handleCompleteTodo = () => {
    completeTodo(todoItem.id);
  };
  // useEffect(() => {
  //     const interval=setInterval(()=>{
  //       console.log("HI")
  //     },100)
  //     return ()=>{clearInterval(interval)}
  //   },[])
  return (
    <div className="card-container">
      <div className="title">
        <img src={taskDot} alt="task dot" />
        <p className={todoItem.done ? "done" : null}>{todoItem.title}</p>
      </div>
      {!todoItem.done && (
        <div className="buttons-container">
          <button onClick={(event) => handleDelete(event)}>Delete</button>
          <button onClick={(event) => handleCompleteTodo(event)}>Done</button>
          {/* with each rerender of the view the method will be called, this will only run on click */}
        </div>
      )}
    </div>
  );
};
export default TodoCard;
