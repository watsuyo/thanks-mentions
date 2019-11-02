<template>
  <div class="container">
    <div class="content">
      <div class="content__title">
        シェアする内容
      </div>
      <div>
        <textarea
          cols="30"
          rows="10"
          type="text"
          class="textarea"
          :value="shareContent"
        ></textarea>
      </div>
      <div>
        <button class="content__button">
          共有する
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import handler from '../api/handler'

interface localData {
  shareContent: string[]
}

export default Vue.extend({
  data(): localData {
    return {
      shareContent: []
    }
  },
  computed: {
    shareTitle(): string {
      return this.$route.query.name.toString()
    },
    shareUrl(): string {
      return this.$route.query.description.toString()
    }
  },
  async mounted() {
    const qiitaId = (this as any).shareUrl.split('/')[3]

    const res = await (this as any).$axios.$get(
      `https://qiita.com/api/v2/users/${qiitaId}`
    )

    const twitterId = `@${res.twitter_screen_name}`
    this.shareContent.push(
      this.shareTitle,
      this.shareUrl,
      '#thanks_mentions',
      twitterId
    )
  }
})
</script>

<style lang="stylus" scoped>
.container
  text-align center

.content
  margin-top 20%

  &__title, &__button
    margin 20px

.textarea
  border 0
  border-bottom 1px solid #1b2538
  width 50%
</style>
