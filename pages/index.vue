<template>
  <div>
    <v-card :width="width" class="mt-10 mx-auto">
      <v-card-title>自己紹介</v-card-title>
      <v-list>
        <v-list-item v-for="item of items" :key="item.id">
          <v-list-item-avatar>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>{{ item.desc }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <a href="https://github.com/hirosuke29" target="_blank" class="mx-5"><img src="~/assets/github.png" width="40rem"></a>
          <a href="https://twitter.com/hirosuke29" target="_blank"><img src="~/assets/twitter.png" width="40rem"></a>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card :width="width" class="my-10 pb-10 mx-auto">
      <v-card-title>投稿</v-card-title>
      <v-card v-for="page in scrapbox.pages" :key="page.id" width="90%" class="mb-2 mx-auto">
        <v-card-title><a :href="`https://scrapbox.io/hirosuke29/${page.title}`" target="_blank">{{ page.title }}</a></v-card-title>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data () {
    return {
      items: [
        {
          icon: 'mdi-account',
          desc: 'Yoshihiro Koyama'
        },
        {
          icon: 'mdi-school',
          desc: '神戸大学農学部3年'
        },
        {
          icon: 'mdi-translate',
          desc: '日本語, English'
        },
        {
          icon: 'mdi-motorbike',
          desc: 'スーパーカブ110 JA44'
        },
        {
          icon: 'mdi-language-python',
          desc: 'FastAPI, Django, PyTorch'
        },
        {
          icon: 'mdi-language-go',
          desc: 'net/http'
        },
        {
          icon: 'mdi-language-javascript',
          desc: 'Vue.js, Nuxt.js'
        },
        {
          icon: 'mdi-language-cpp',
          desc: 'AtCoder highest 858'
        },
        {
          icon: 'mdi-thumb-up',
          desc: '機械学習, 統計学'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      scrapbox: 'scrapbox/scrapbox'
    }),
    width () {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return '90%'
      }
      return '50%'
    }
  },
  mounted () {
    this.$store.dispatch('scrapbox/fetchScrapbox')
  }
})
</script>
