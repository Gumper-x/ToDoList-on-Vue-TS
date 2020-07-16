<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header/index.vue";

  @Component({
    components: {
      Header,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "./assets/css/minireset.min.css";

  :root {
    --text: #f1f3f3;
    --context: #1aadf1;
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #181717;
    color: var(--text);
  }
</style>
