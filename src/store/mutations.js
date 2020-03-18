export default {
  ADD_FOLDER (state, folder) {
    state.folders.push(folder)
  },
  REMOVE_FOLDER (state, id) {
    const index = state.folders.findIndex(item => item.id === id)
    state.folders.splice(index, 1)
  },
  TOGGLE_TODO (state, { todo, completed = todo.completed }) {
    todo.completed = !completed
  },
  REMOVE_TODO (state, id) {
    const index = state.todos.findIndex(item => item.id === id)
    state.todos.splice(index, 1)
  },
  EDIT_TODO (state, { todo, title = todo.title }) {
    todo.title = title
  }
}
