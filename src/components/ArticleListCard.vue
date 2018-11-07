<template>
  <ImageCard
    v-on:card-image-click="navigateToArticle"
    :image="require(`@/../${article.cover}`)"
    :title="article.title"
  >
    <span  @click="navigateToArticle" class="card-subtitle">{{ article.subtitle }}</span>
    <div class="card-tags">
      <a v-for="tag in article.tags" class="chip truncate">{{ tag }}</a>
    </div>
  </ImageCard>
</template>

<script>
import { mapActions } from 'vuex'
import ImageCard from '@/components/ImageCard'

export default {
  components: { ImageCard },

  props: {
    article: Object
  },

  methods: {
    navigateToArticle () {
      this.ACTIVATE_ARTICLE(this.article.id)
        .then(() => this.$router.push('article'))
    },

    ...mapActions('articles', [ 'ACTIVATE_ARTICLE' ])
  }
}
</script>

<style>
.card-subtitle {
  display: block;
  margin-bottom: 16px;
  
  color: #AAA;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
}

.card-tags {
  padding-top: 8px;
  border-top: 1px solid #eee;
}

.card-tags .chip {
  cursor: pointer;
  transition: box-shadow .3s;
}

@media only screen and (max-width: 601px) {
  .card-tags .chip {
    font-size: 9px;
  }
}

.card-tags .chip:hover {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
}
</style>
