import './index.scss';
import AddTodo from './components/AddTodo';
import TodoCard from './components/TodoCard';

import { useEffect, useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTodos([{ id: 1, title: 'dasdsa', done: false }, { id: 2, title: 'dasdsa', done: false }, { id: 3, title: 'dasdsa', done: false }])
  //   }, 100)
  // },[todos])

  // setTimeout(() => {
  //   setTodos([{ id: 1, title: 'dasdsa', done: false }, { id: 2, title: 'dasdsa', done: false }, { id: 3, title: 'dasdsa', done: false }])
  // }, 100)

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
      <HeaderComponent title="Add a task" emoji="💪" subtitle="Rome wasn't built in a day 🌟"></HeaderComponent>
      <AddTodo addTodoToList={handleAddTodoToTodosList} ></AddTodo>
      {todos.map(todo => {
        return <TodoCard key={todo.id} todoItem={todo} deleteTodoFromList={handleDeleteTodoFromTodosList} completeTodo={handleCompleteTodoFromTodosList}></TodoCard>
      })}
    </div>
  );
}

export default App;
