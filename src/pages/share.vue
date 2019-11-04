<template>
  <div>
    <div class="title">
      シェアする内容
    </div>
    <div>
      <textarea
        v-model="shareContent.text"
        cols="30"
        rows="10"
        type="text"
        class="textarea"
      />
    </div>
    <div>
      <button class="button" @click="share">
        共有する
      </button>
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
      }
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
      const newVariable: any = window.navigator

      if (newVariable && newVariable.share) {
        newVariable
          .share(this.shareContent)
          .then(() => {
            console.log('success')
          })
          .catch((err: any) => {
            console.log(err)
          })
      } else {
        alert('this environment is not support')
      }
    }
  }
})
</script>

<style lang="stylus" scoped>
.title, .button
  margin 20px

.textarea
  border 0
  border-bottom 1px solid #1b2538
  width 80%
</style>
