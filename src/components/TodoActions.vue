<template>
  <div class="todo__actions" v-if="todoListLength">
    <span class="count">{{ remaining }} {{ remaining | pluralize('item') }} left</span>
    <div class="filters">
      <button :class="{ active: filter === 'all'}" class="filter" @click="updateFilter ('all')">All</button>
      <button :class="{ active: filter === 'active'}" class="filter" @click="updateFilter ('active')">Active</button>
      <button :class="{ active: filter === 'completed'}" class="filter" @click="updateFilter ('completed')">Completed</button>
    </div>
    <button
      :disabled="todoListLength === remaining"
      @click="removeCompleted"
      class="clear__completed"
    >Clear completed</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'TodoFooter',
  computed: {
    ...mapGetters([
      'remaining',
      'todoListLength'
    ]),
    ...mapState(['filter'])
  },
  filters: {
    pluralize: (number, word) => number === 1 ? word : (word + 's')
  },
  methods: {
    removeCompleted () {
      this.$store.dispatch('removeCompleted')
    },
    updateFilter (filter) {
      this.$store.dispatch('updateFilter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/_todoActions.scss";
</style>
