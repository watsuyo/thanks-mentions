<template>
  <div>
    <p>シェアする内容</p>
    <div>
      <p>記事タイトル</p>
      <input type="text" :value="shareTitle" />
    </div>
    <div>
      <p>shareUrl</p>
      <input type="text" :value="shareUrl" />
    </div>
    <div>
      <p>メンション先</p>
      {{ userId }}
      {{ test }}
      <input type="text" :value="userId" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import searchAccount from '../api/searchAccount'
import handler from '../api/handler'

export default Vue.extend({
  data() {
    return {
      test: {}
    }
  },
  computed: {
    shareTitle() {
      const shareTitle = process.browser && this.$route.query.name
      return shareTitle
    },
    shareUrl() {
      const shareUrl = process.browser && this.$route.query.description
      return shareUrl
    },
    userId() {
      handler
        .searchAccount('/api/searchAccount', (this as any).shareUrl)
        .then((res) => res.data)
        .catch((err) => err)
      handler
        .result('/api/result')
        .then((res) => {
          this.test = res
        })
        .catch((err) => err)
      return 'aa'
    }
  }
})
</script>

<style lang="scss" scoped></style>
