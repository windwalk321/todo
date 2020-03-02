import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: [
      {
        id: 1,
        title: 'First folder',
        color: '#42B883'
      },
      {
        id: 2,
        title: 'Second folder',
        color: '#64C4ED'
      },
      {
        id: 3,
        title: 'Third folder',
        color: '#FFBBCC'
      }
    ],
    items: [
      {
        id: 1,
        title: 'First item',
        parent: 1,
        completed: false
      },
      {
        id: 2,
        title: 'Second item',
        parent: 1,
        completed: true
      },
      {
        id: 3,
        title: 'Third item',
        parent: 2,
        completed: true
      },
      {
        id: 4,
        title: 'Fourth item',
        parent: 2,
        completed: false
      },
      {
        id: 5,
        title: 'Fifth item',
        parent: 1,
        completed: true
      },
      {
        id: 6,
        title: 'Sixth item',
        parent: 3,
        completed: true
      },
      {
        id: 7,
        title: 'Seventh item',
        parent: 3,
        completed: true
      }
    ]
  },
  mutations,
  actions
})
