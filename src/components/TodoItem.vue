<template>
  <li class="todo">
    <div class="todo__checkbox">
      <input v-model="todo.completed" type="checkbox" id="checkbox">
      <label for="checkbox">
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
      <span class="todo__remove">
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
    </template>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    isEditable: Boolean
  }
}
</script>

<style lang="scss">
.todo {
  margin-top: 14px;
  display: flex;
  align-items: center;
  &:hover {
    .todo__remove {
      opacity: 1;
    }
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
  }
  &__remove {
    opacity: 0;
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
</style>
