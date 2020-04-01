<template>
  <li class="todo">
    <template v-if="editing">
      <input
        v-focus
        type="text"
        class="todo__edit"
        v-model="todo.title"
        @keypress.esc="editClose(todo)"
        @blur="editDone"
        @keypress.enter="editDone"
      >
    </template>
    <template v-else>
      <div class="todo__checkbox">
        <input
          type="checkbox"
          :id="todo.id"
          v-model="todo.completed"
          @change="toggleTodo(todo)"
        >
        <label :for="todo.id">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
      <span class="todo__title">{{ todo.title }}</span>
      <template v-if="isEditable">
        <div class="todo__actions">
          <span @click="edit(todo)">
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
          <span @click="removeTodo(todo.id)">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </template>
    </template>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',

  props: {
    isEditable: Boolean,
    todo: Object
  },

  data: function () {
    return {
      editing: false,
      beforeEditValue: ''
    }
  },

  methods: {
    ...mapActions([
      'toggleTodo',
      'removeTodo',
      'editItem'
    ]),

    edit (todo) {
      this.beforeEditValue = todo.title
      this.editing = true
    },

    editDone (e) {
      const value = e.target.value.trim()
      const { todo } = this

      if (!value) {
        this.removeTodo(todo)
      } else if (this.editing) {
        this.editItem({
          todo,
          value
        })
      }
      this.editing = false
    },

    editClose (todo) {
      todo.title = this.beforeEditValue
      this.editing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  margin: 14px 0 0 0;
  display: flex;
  align-items: center;
  &:hover {
    .todo__actions span {
      opacity: 1;
    }
  }
  &__edit {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 0;
    line-height: 24px;
    border: 0;
    outline: 0;
    padding-left: 30px;
    letter-spacing: .15px;
  }
  &__checkbox {
    margin-right: 10px;
    input {
      display: none;
    }
    svg {
      transition: opacity 0.15s ease-in-out;
      path {
        stroke: #f2f2f2;
      }
    }
    input:checked + label {
      background-color: #4dd599;
      border-color: #4dd599;
      svg {
        opacity: 1;
        path {
          stroke: #fff;
        }
      }
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #e8e8e8;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
      svg {
        opacity: 0;
      }
    }
    &:hover {
      label {
        background-color: #f2f2f2;
        border-color: #f2f2f2;
        svg {
          opacity: 1;
          path {
            stroke: #b2b2b2;
          }
        }
      }
    }
  }
  &__title {
    width: 100%;
    word-break: break-all;
    line-height: 24px;
    letter-spacing: .15px;
  }
  &__actions {
    display: flex;
    span {
    transition: opacity 0.15s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: lighten(#f4f6f8, 2%);
    cursor: pointer;
      &:hover {
        color: darken(#f4f6f8, 2%);
        svg {
          opacity: 0.9;
        }
      }
      svg {
        width: 11px;
        height: 11px;
        opacity: 0.4;
      }
    }
  }
}
</style>
