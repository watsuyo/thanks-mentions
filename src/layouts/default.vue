<template>
  <div class="container">
    <OgpContents />
    <div class="content">
      <div>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OgpContents from '../components/OgpContents.vue'

export default Vue.extend({
  components: {
    OgpContents
  }
})
</script>

<style lang="stylus" scoped>
.container
  text-align center

.content
  margin-top 8%
</style>
