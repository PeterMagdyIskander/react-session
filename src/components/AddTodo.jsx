import '../index.scss';
import { useState } from 'react';

const AddTodo = ({ addTodoToList }) => {
    //destructure vs props.funcName
    const [todoTitle, setTodoTitle] = useState("");

    const handleAddTodo = (e) => {
        setTodoTitle(e.target.value)
    }
    const handleAddingToList = () => {
        const todo = {
            id:Math.floor((Math.random() * 100000000) + 1),
            title: todoTitle,
            done: false
        }
        addTodoToList(todo)
    }
    return (
        <div className="add-todo">
            <h3 className="title">What do you want to do?</h3>
            <div className="add-todo-actions">
                <input type="text" onChange={handleAddTodo} />
                <button onClick={handleAddingToList}>SUBMIT</button>
            </div>
        </div>
    )
}
export default AddTodo;