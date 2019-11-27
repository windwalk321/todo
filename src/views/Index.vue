<template>
  <div class="todo__wrap">
    <h1 class="title">todos</h1>
    <div class="main">
      <todo-header />
      <todo-actions />
      <todo-list />
    </div>
    <about />
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import TodoActions from '../components/TodoActions'
import TodoList from '../components/TodoList'
import About from '../components/About'

export default {
  name: 'Index',
  components: {
    TodoHeader,
    TodoActions,
    TodoList,
    About
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/views/_index.scss";
</style>
