export default {
  remaining: state => state.todoList.filter(item => !item.completed).length,
  anyRemaining: (state, getters) => getters.remaining !== 0,
  todoListLength: state => state.todoList.length,
  todoListFilter: state => {
    if (state.filter === 'all') {
      return state.todoList
    } else if (state.filter === 'completed') {
      return state.todoList.filter(item => item.completed)
    } else if (state.filter === 'active') {
      return state.todoList.filter(item => !item.completed)
    }
    return state.todoList
  }
}
