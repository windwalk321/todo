<template>
  <li
    class="folder"
  >
    <div class="folder__title">
      <h4 :style="{color: folder.color}">{{ folder.title }}</h4>
    </div>
    <ul class="folder__todos">
      <todo-item v-for="todo in items" :key="todo.id" :todo="todo"/>
    </ul>
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
}
</style>
