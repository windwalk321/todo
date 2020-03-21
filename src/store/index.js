import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: [
      // {
      //   id: Number,
      //   title: String,
      //   color: String
      // }
    ],
    todos: [
      // {
      //   id: Number,
      //   title: String,
      //   parent: Number,
      //   completed: Boolean
      // }
    ]
  },
  mutations,
  actions
})
