<template>
  <div>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@watsuyo_2" />
    <meta property="og:url" :content="`${currentUrl}`" />
    <meta property="og:title" content="thanks-mentions" />
    <meta
      property="og:description"
      content="Qiitaの記事をメンション付きでシェアできるPWA"
    />
    <meta
      property="og:image"
      content="https://firebasestorage.googleapis.com/v0/b/thanks-mentions.appspot.com/o/OGP.png?alt=media&token=71228a5f-25c5-4c69-ba0e-b1e261c8327a"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      currentUrl: ''
    }
  },
  mounted() {
    this.currentUrl = location && location.href
  }
})
</script>
