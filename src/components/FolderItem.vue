<template>
  <li
    class="folder"
  >
    <div class="folder__title">
      <h4 :style="{color: folder.color}">{{ folder.title }}</h4>
    </div>
    <ul v-if="items.length" class="folder__todos">
      <todo-item v-for="todo in items" :key="todo.id" :todo="todo"/>
    </ul>
    <span v-else class="folder__notification">Задачи отсутствуют</span>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'FolderItem',

  components: {
    TodoItem
  },

  props: {
    folder: Object
  },

  computed: {
    ...mapState(['todos']),
    items () {
      return this.todos.filter(item => item.parent === this.folder.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.folder {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  background: #ffffff;
  &:last-child {
    padding: 30px;
  }
  &__title {
    font-size: 32px;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    h4 {
      line-height: 41px;
      font-weight: bold;
      width: 100%;
      font-family: 'Lato', sans-serif;
    }
  }
  &__notification {
    font-family: 'Lato', sans-serif;
    margin-top: 14px;
    letter-spacing: .3px;
    color: #C9D1D3;
  }
}
</style>
