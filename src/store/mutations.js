import * as types from './mutation-types'

export default {
  [types.ADD_TODO] (state, title) {
    state.todoList.push({
      id: Date.now(),
      title: title,
      completed: false
    })
  },
  [types.REMOVE_TODO] (state, id) {
    const index = state.todoList.findIndex(item => item.id === id)
    state.todoList.splice(index, 1)
  },
  [types.UPDATE_TODO] (state, todo) {
    const todoList = state.todoList
    const index = todoList.findIndex(item => item.id === todo.id)
    todoList.splice(index, 1, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    })
  },
  [types.REMOVE_COMPLETED] (state) {
    state.todoList = state.todoList.filter(item => !item.completed)
  },
  [types.TOGGLE_ALL] (state, value) {
    state.todoList.forEach(item => (item.completed = value))
  },
  [types.UPDATE_FILTER] (state, filter) {
    state.filter = filter
  }
}
