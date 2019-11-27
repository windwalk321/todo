export default {
  todoList: JSON.parse(localStorage.getItem('todo-list') || '[]'),
  filter: 'all'
}
