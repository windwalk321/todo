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
  editItem ({ commit }, item) {
    commit('EDIT_ITEM', { item, title: item.title })
  },
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  initialStore ({ commit }) {
    commit('INITIAL_STORE')
  }
}
