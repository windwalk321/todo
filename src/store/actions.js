import * as types from './mutation-types'

export default {
  addTodo ({ commit }, title) {
    commit(types.ADD_TODO, title)
  },
  removeTodo ({ commit }, id) {
    commit(types.REMOVE_TODO, id)
  },
  updateTodo ({ commit }, todo) {
    commit(types.UPDATE_TODO, todo)
  },
  removeCompleted ({ commit }) {
    commit(types.REMOVE_COMPLETED)
  },
  toggleAll ({ commit }, value) {
    commit(types.TOGGLE_ALL, value)
  },
  updateFilter ({ commit }, filter) {
    commit(types.UPDATE_FILTER, filter)
  }
}
