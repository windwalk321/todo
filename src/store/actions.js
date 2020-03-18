export default {
  addFolder ({ commit }, folder) {
    commit('ADD_FOLDER', folder)
  },
  removeFolder ({ commit }, id) {
    commit('REMOVE_FOLDER', id)
  },
  toggleTodo ({ commit }, todo) {
    commit('TOGGLE_TODO', { todo, completed: !todo.completed })
  },
  removeTodo ({ commit }, id) {
    commit('REMOVE_TODO', id)
  },
  editTodo ({ commit }, todo) {
    commit('EDIT_TODO', { todo, title: todo.title })
  }
}
