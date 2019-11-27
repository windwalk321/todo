<template>
  <div class="todo__header">
    <input
      class="checkbox"
      type="checkbox"
      @change="toggleAll"
      :checked="!anyRemaining"
      v-if="todoListLength"
    >
    <input
      class="input"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="Type your task and press Enter"
      type="text"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoHeader',
  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters([
      'anyRemaining',
      'todoListLength'
    ])
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim().length === 0) {
        return
      }
      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = ''
    },
    toggleAll () {
      this.$store.dispatch('toggleAll', event.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/_todoHeader.scss";
</style>
