<template>
  <li
    class="folder"
  >
    <span :style="{color: folder.color}" class="folder__title">{{ folder.title }}</span>
    <ul class="folder__todos">
      <todo v-for="todo in items" :key="todo.id" :todo="todo"/>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import Todo from './Todo'

export default {
  name: 'Folder',
  components: {
    Todo
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

<style lang="scss">
.folder {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  &:last-child {
    padding: 30px;
  }
  &__title {
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    border-bottom: 1px solid #f2f2f2;
  }
}
</style>
