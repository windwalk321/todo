<template>
  <div class="add-folder">
    <button @click="isCreating = true" class="button initial-button">
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1V15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 8H15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span class="button__title">Добавить папку</span>
    </button>
    <div v-if="isCreating" class="popup">
      <input
        v-focus
        type="text"
        placeholder="Название папки"
        class="popup__input"
        v-model.trim="title"
      >
      <div class="popup__colors">
        <i
          @click="selectColor(color)"
          v-for="(color, index) in colors"
          :key="index"
          :style="{'background-color': color}"
          :class="{ active: selectedColor === color}"
        ></i>
      </div>
      <button @click="addFolder" class="button popup__button">Добавить</button>
      <div @click="isCreating = false" class="popup__close">
        <svg
          width="10"
          height="10"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddFolder',
  data: function () {
    return {
      isCreating: false,
      title: '',
      selectedColor: '#c9d1d3',
      colors: [
        '#c9d1d3',
        '#b6e6bd',
        '#c355f5',
        '#08001a',
        '#ff6464',
        '#42b883',
        '#64c4ed',
        '#ffbbcc'
      ]
    }
  },
  methods: {
    ...mapActions(['ADD_FOLDER']),
    selectColor (color) {
      this.selectedColor = color
    },
    addFolder () {
      this.ADD_FOLDER({
        id: Date.now(),
        title: this.title,
        color: this.selectedColor
      })
      this.isCreating = false
      this.title = ''
    }
  }
}
</script>

<style lang="scss">
.add-folder {
  .initial-button {
    font-size: 14px;
    color: #767676;
    letter-spacing: 0.15px;
    padding: 8px 4px;
    .button__title {
      margin-left: 5px;
    }
  }
  .popup {
    left: 80px;
    height: 150px;
    width: 240px;
    display: block;
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 18px;
    position: relative;
    box-sizing: border-box;
    &__input {
      width: 100%;
      border: 1px solid #EFEFEF;
      border-radius: 4px;
      font-size: 14px;
      padding: 8px 11px;
      outline: 0;
      font-family: 'Lato', sans-serif;
      &::placeholder {
        font-weight: 600;
        color: #C7C7C7;
        letter-spacing: 0.15px;
      }
    }
    &__colors {
      display: flex;
      justify-content: space-between;
      margin-top: 13px;
      i {
        display: block;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid transparent;
        &.active {
          border: 2px solid #525252;
        }
      }
    }
    &__button {
      transition: opacity 0.15s ease-in-out;
      margin-top: 13px;
      background-color: #4DD599;
      border-radius: 4px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      padding: 11px 0;
      color: #fff;
      &:hover {
        background-color: darken(#4DD599, 10%);
      }
    }
    &__close {
      position: absolute;
      top: -9px;
      right: -9px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 24px;
      height: 24px;
      background-color: #5C5C5C;
      border-radius: 50%;
    }
  }
}
</style>
