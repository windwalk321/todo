export default {
  addFolder ({ commit }, folder) {
    commit('ADD_FOLDER', folder)
  },
  removeFolder ({ commit }, id) {
    commit('REMOVE_FOLDER', id)
  }
}
