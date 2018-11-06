<template>
  <div id="app" class="container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/TheFooter'
import Header from '@/components/TheHeader'

export default {
  components: { Footer, Header }
}
</script>

<style>
#app {
  min-width: 320px;
}
</style>
