<template>
  <div>
    <div>
      <input type="text" :value="url" />
    </div>
    <div>
      <input type="text" :value="title" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    url() {
      const url = process.browser && location.href
      return url
    },
    title() {
      const title = process.browser && document.title
      return title
    }
  }
})
</script>

<style lang="scss" scoped></style>
