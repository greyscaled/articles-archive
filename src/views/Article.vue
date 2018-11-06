<template>
  <MarkdownRenderer :article="getActive" />
</template>

<script>
import { mapGetters } from 'vuex'
import MarkdownRenderer from '@/components/TheMarkdownRenderer'

export default {
  components: { MarkdownRenderer },
  computed: mapGetters('articles', ['getActive'])
}
</script>
