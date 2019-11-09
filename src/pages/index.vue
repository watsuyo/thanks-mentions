<template>
  <div>
    <div class="title">
      thanks-mentions
    </div>
    <div class="share">
      thanks-mentionsをシェア
      <div>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-text="Qiitaの記事をメンション付きでシェアできるPWA"
          data-url="http://thanks-mentions.web.app/"
          data-via="watsuyo_2"
          data-hashtags="thanks_mentions"
          data-related="watsuyo_2,watsuyo_2"
          data-dnt="true"
          data-show-count="false"
        >
          Twitterでシェア
        </a>
      </div>
    </div>
    <div class="subtitle">
      <p>Qiitaの記事をメンション付きで共有できるPWAアプリ</p>
    </div>
    <div class="description">
      <p>「記事の読んで共感した」</p>
      <p>「わからなかった部分が分かった」</p>
    </div>
    <div class="message">
      こんな想いを作者に「thanks-mentions」で伝えてみよう！
    </div>
    <div class="procedure-title">
      アプリを使う手順
    </div>
    <div class="procedure-description">
      <p>
        ①モバイル版Google Chromeで<br />
        「
        <a href="https://thanks-mentions.web.app/">
          thanks-mentions
        </a>
        」にアクセス
      </p>
      <p>
        ②下から出てくるポップアップから<br />
        「ホーム画面に追加」
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/thanks-mentions.appspot.com/o/popup.jpg?alt=media&token=7f5f15da-e6b9-477e-b0ec-2c0beebf2a33"
      />
      <p>
        ③Qiitaの記事からGoogle Chromeの共有から「
        <a href="https://thanks-mentions.web.app/"> thanks-mentions </a>」を選択
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/thanks-mentions.appspot.com/o/menu.jpg?alt=media&token=2f3d2525-1579-4efa-a3c5-60b31e2d8212"
      />
      <p>
        ④共有ボタンをタップしてTweet画面へ
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/thanks-mentions.appspot.com/o/share.jpg?alt=media&token=8fc6b81a-c3b3-44f1-8528-9a4bc0ffb12c"
      />
      <p>
        ⑤「
        <a href="https://thanks-mentions.web.app/">
          thanks-mentions
        </a>
        」上でタイトルと URLを、作者のTwitterIDが
        表示されていますので感謝の想いを 伝えてみよう！
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/thanks-mentions.appspot.com/o/tweet.jpg?alt=media&token=43e7f995-5b7b-4762-af92-3e2f325c3fb3"
      />
    </div>
    <a
      href="https://twitter.com/intent/tweet?screen_name=watsuyo_2&ref_src=twsrc%5Etfw"
      class="twitter-mention-button"
      data-size="large"
      data-text="Qiitaの記事をメンション付きで共有できるPWA"
      data-url="http://thanks-mentions.web.app/"
      data-via="watsuyo_2"
      data-hashtags="thanks_mentions"
      data-related="watsuyo_2,watsuyo_2"
      data-dnt="true"
      data-show-count="false"
    >
      Tweet to @watsuyo_2
    </a>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="stylus" scoped>
img
  width 80%
  height 80%
  object-fit cover

.title
  font-size 36px

.share
  margin 50px

.subtitle
  font-size 20px
  margin 50px

.description
  font-size 16px
  margin 50px

.procedure-title
  font-size 20px

.procedure-description
  text-align center
  font-size 16px
  margin 20px 50px

.message
  font-size 20px
  margin 50px
</style>
