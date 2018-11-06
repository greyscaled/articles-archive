<template>
  <div  class="article container" v-html="require(`@/../${article.path}README.md`)"></div>
</template>

<script>

export default {
  props: {
    article: Object
  }
}
</script>
