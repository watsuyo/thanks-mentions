<template>
  <div>
    Hello World
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    const url = location.href
    const title = document.title
    console.log(title + '\n' + url)
  }
})
</script>

<style lang="scss" scoped></style>
