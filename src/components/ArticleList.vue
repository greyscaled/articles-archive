<template>
  <div class="row">
    <div
      class="col s12" 
      v-for="article in getArticles">
      <ArticleCard :article="article" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from '@/components/ArticleListCard'

export default {
  computed: mapGetters('articles', [ 'getArticles' ]),
  components: { ArticleCard }
}
</script>
