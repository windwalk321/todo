<template>
  <div class="home">
    <ul class="home__folders">
      <folder-item
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FolderItem from '../components/FolderItem'

export default {
  name: 'Home',
  components: {
    FolderItem
  },
  computed: {
    ...mapState(['folders', 'todos'])
  }
}
</script>
