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
        title: 'First folder folder first folder folderfolderfolderfolder',
        color: '#b6e6bd'
      },
      {
        id: 2,
        title: 'Second foldereds',
        color: '#c355f5'
      },
      {
        id: 3,
        title: 'Third folder',
        color: '#ffbbcc'
      },
      {
        id: Date.now(),
        title: 'Fourth folder',
        color: '#ffbbcc'
      }
    ],
    todos: [
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
        title: 'Third item Third item Third item Third item Third itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird itemThird item',
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
