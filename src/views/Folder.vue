<template>
  <div class="folder" v-if="folder">
    <div class="folder__title">
      <input
        v-if="editing"
        type="text"
        v-focus
        @keypress.enter="editDone"
        @blur="editDone"
        @keypress.esc="editClose(folder)"
        v-model="folder.title"
        :style="{color: folder.color}"
      >
      <template v-else>
        <h4 :style="{color: folder.color}">{{ folder.title }}</h4>
        <span @click="edit(folder)">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z"
              fill="black"
            />
          </svg>
        </span>
      </template>
    </div>
    <ul class="folder__todos">
      <todo-item v-for="todo in items" :key="todo.id" :isEditable="true" :todo="todo"/>
      <li>
        <add-todo />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TodoItem from '../components/TodoItem'
import AddTodo from '../components/AddTodo'

export default {
  name: 'Folder',
  components: {
    TodoItem,
    AddTodo
  },
  data: function () {
    return {
      beforeEditValue: '',
      editing: false
    }
  },
  computed: {
    ...mapState(['folders', 'todos']),

    id () {
      return parseInt(this.$route.params.id)
    },

    folder () {
      return this.folders.find(item => item.id === this.id)
    },

    items () {
      return this.todos.filter(item => item.parent === this.id)
    }
  },
  methods: {
    ...mapActions([
      'editItem'
    ]),
    edit (folder) {
      this.beforeEditValue = folder.title
      this.editing = true
    },
    editDone (e) {
      const value = e.target.value.trim()
      const { folder } = this

      if (!value) {
        this.editClose(folder)
      } else if (this.editing) {
        this.editItem({
          folder,
          value
        })
      }
      this.editing = false
    },
    editClose (folder) {
      folder.title = this.beforeEditValue
      this.editing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.folder {
  width: 100%;
  &__title {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    &:hover {
      span {
        opacity: 1;
      }
    }
    h4 {
      line-height: 41px;
    }
    input {
      width: 100%;
      font-family: 'Lato', sans-serif;
      font-size: 32px;
      font-weight: bold;
      border: 0;
      outline: 0;
    }
    span {
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: lighten(#f4f6f8, 2%);
      cursor: pointer;
      &:hover {
        color: darken(#f4f6f8, 2%);
        svg {
          opacity: 0.9;
        }
      }
      svg {
        width: 15px;
        height: 15px;
        opacity: 0.4;
      }
    }
  }
  &__todos {
    margin-top: 14px;
  }
}
</style>
