<template>
  <folder-item :isEditable="true" :folder="folder" />
</template>

<script>
import { mapState } from 'vuex'
import FolderItem from '../components/FolderItem'

export default {
  name: 'Folder',
  components: {
    FolderItem
  },
  computed: {
    ...mapState(['folders', 'todos']),
    id () {
      return parseInt(this.$route.params.id)
    },
    folder () {
      return this.folders.find(item => item.id === this.id)
    }
  }
}
</script>
