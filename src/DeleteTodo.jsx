export default function DeleteTodo({todo, handleDeleteTodo}) {
   return <button aria-label={`Delete: ${todo.text}`} type="button" onClick={()=> handleDeleteTodo(todo.id)}>Delete</button>;
}