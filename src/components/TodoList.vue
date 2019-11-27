<template>
  <ul class="todo__list">
    <li class="list__item" v-for="todo in todoListFilter" :key="todo.id">
      <template v-if="!editing">
        <input
          type="checkbox"
          class="checkbox"
          v-model="todo.completed"
          @change="doneEdit(todo)"
        >
        <span
          class="label"
          :class="{ completed: todo.completed }"
          @dblclick="editTodo(todo)"
        >
          {{ todo.title }}
        </span>
        <span @click="removeTodo(todo)" class="remove">&times;</span>
      </template>
      <input
        v-else
        @keyup.enter="doneEdit(todo)"
        @blur="cancelEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
        type="text"
        class="edit"
        v-model="todo.title"
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      editing: false,
      beforeEditValue: ''
    }
  },
  computed: {
    todoListFilter () {
      return this.$store.getters.todoListFilter
    }
  },
  methods: {
    removeTodo (todo) {
      this.$store.dispatch('removeTodo', todo.id)
    },
    editTodo (todo) {
      this.beforeEditValue = todo.title
      this.editing = true
    },
    doneEdit (todo) {
      if (todo.title.trim().length === 0) {
        return
      }
      this.editing = false
      this.$store.dispatch('updateTodo', {
        id: todo.id,
        title: todo.title,
        completed: todo.completed
      })
    },
    cancelEdit (todo) {
      todo.title = this.beforeEditValue
      this.editing = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/_todoList.scss";
</style>
