import './index.scss';
import AddTodo from './components/AddTodo';
import TodoCard from './components/TodoCard';

import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodoToTodosList = (todo) => {
    setTodos([...todos, todo])
  }
  const handleDeleteTodoFromTodosList = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }
  const handleCompleteTodoFromTodosList = (todo) => {
    setTodos(todos.filter(t => t.id === todo ? t.done = true : t))
  }

  return (
    <div className="app">
      <AddTodo addTodoToList={handleAddTodoToTodosList} ></AddTodo>
      {todos.map(todo => {
        return <TodoCard key={todo.id} todoItem={todo} deleteTodoFromList={handleDeleteTodoFromTodosList} completeTodo={handleCompleteTodoFromTodosList}></TodoCard>
      })}
    </div>
  );
}

export default App;
