<template>
  <div class="add-todo">
    <div v-if="isCreating" class="add-todo__form">
      <input
        v-focus
        v-model="title"
        placeholder="Текст задачи"
        type="text"
      >
      <div class="buttons">
        <button @click="add" class="button button-add">Добавить задачу</button>
        <button @click="isCreating = false" class="button button-close">Отмена</button>
      </div>
    </div>
    <button
      v-else
      @click="isCreating = true"
      class="button initial-button"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1V15"
          stroke="#B4B4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 8H15"
          stroke="#B4B4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Новая задача</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data: function () {
    return {
      isCreating: false,
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),

    add () {
      if (this.title.length !== 0) {
        this.addTodo({
          id: Date.now(),
          title: this.title,
          compelted: false,
          parent: parseInt(this.$route.params.id)
        })
        this.isCreating = false
        this.title = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-todo {
  margin-top: 14px;
  .initial-button {
    padding: 0;
    color: #B4B4B4;
    font-size: 16px;
    font-weight: normal;
    span {
      margin-left: 10px;
    }
  }
  &__form {
    input {
      width: 100%;
      border: 1px solid #EFEFEF;
      border-radius: 4px;
      padding: 8px 11px;
      font-size: 14px;
      outline: 0;
      font-family: 'Roboto', sans-serif;
      &::placeholder {
        letter-spacing: .15px;
        color: #C7C7C7;
        letter-spacing: 0.15px;
      }
    }
    .buttons {
      display: flex;
      margin-top: 16px;
      .button {
        border-radius: 4px;
        padding: 8px 16px;
      }
      .button-add {
        color: #fff;
        background: #4DD599;
      }
      .button-close {
        margin-left: 9px;
        color: #9C9C9C;
        background: #F4F6F8;
      }
    }
  }
}
</style>
