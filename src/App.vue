<template>
  <div id="app">
    <!-- loading layer -->
    <loading></loading>
    <!-- /loading layer -->

    <!-- router-view -->
    <!-- <transition> -->
      <router-view/>
    <!-- </transition> -->
    <!-- /router-view -->
    
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'app',
  components: {
    Loading
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
