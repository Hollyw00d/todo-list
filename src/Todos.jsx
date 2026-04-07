
/*
You're given some existing HTML for a Todo List app. Add the following functionality to the app:

Add new tasks on clicking the "Submit" button.
The <input> field should be cleared upon successful addition.
Remove tasks from the Todo List upon clicking the "Delete" button.

1. Clarify requirements (5 min)
   Mental model:
   Work backwards from the customer (user) such as:
   1. Responsiveness
   2. Browser support
   3. What do I need to know for the input or output
   4. How do I manage the state and recommend "controlled" state
      1. PERSONAL THOUGHT: Will I need local storage
      2. Will this be shareable
      3. Maybe use React context 

Plan:
1. Components to create:
   1. Todos:
      1. Add handleTodo that stores array of todo
      2. Add handleDelete to be able to delete todo
   2. Todo
   3. DeleteTodo
*/
import {useState} from 'react';
import Todo from './Todo';
import DeleteTodo from './DeleteTodo';

export default function Todos() {
   const [todos, setTodos] = useState([]);
   const [newTodo, setNewTodo] = useState('');

   const handleNewTodoChange = e => {
      setNewTodo(e.currentTarget.value);
   };

   const handleAddNewTodo = (e) => {
      e.preventDefault();
      const newTodoTrimmed = newTodo.trim();
      if(!newTodoTrimmed) return;
      
      setTodos(prevTodos => [
         ...prevTodos, 
         {
            id: crypto.randomUUID(),
            text: newTodoTrimmed
         }
      ]);
      setNewTodo('');
   };

   const handleDeleteTodo = (id) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
   };

   return (
      <div>
         <h1>Todo List</h1>
         <form onSubmit={handleAddNewTodo}>
            <p>
               <label htmlFor="todo">New Todo</label><br />
               <input type="text" id="todo" name="todo" value={newTodo} onChange={handleNewTodoChange} required />
            </p>
            <p>
               <button type="submit">Submit</button>
            </p>
         </form>
         <ul>
            {todos.map(todo => (
               <li key={todo.id}>
                  <Todo todo={todo} />{' '}
                  <DeleteTodo todo={todo} handleDeleteTodo={handleDeleteTodo} />
               </li>
            ))}
         </ul>
      </div>
   );
}