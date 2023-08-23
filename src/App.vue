<template>
  <div id="app">
    <NavBar />

    <Banner />
  </div>
</template>

<script>
import Banner from './components/Pages/Homepage/Banner.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Banner,
    NavBar,
  },
}
</script>

<style src=""></style>
