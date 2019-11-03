<template>
  <div class="container">
    <div class="content">
      <div class="content__title">
        シェアする内容
      </div>
      <div>
        <textarea
          v-model="shareContent.text"
          cols="30"
          rows="10"
          type="text"
          class="textarea"
        ></textarea>
      </div>
      {{ err }}
      <div>
        <button class="content__button" @click="share">
          共有する
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      shareContent: {
        text: ''
      },
      err: ''
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
    this.shareContent.text =
      this.shareTitle +
      '\n' +
      this.shareUrl +
      '\n' +
      '#thanks_mentions' +
      '\n' +
      '\n' +
      twitterId +
      '\n'
  },
  methods: {
    share() {
      if (navigator.canShare && navigator.canShare(this.shareContent)) {
        navigator
          .share(this.shareContent)
          .then(() => {
            console.log('error')
          })
          .catch((err: any) => {
            ;(this as any).err = err
          })
      } else {
        alert('this environment is not support')
      }
    }
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
