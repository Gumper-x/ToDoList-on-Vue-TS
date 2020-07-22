<template>
  <div id="app">
    <Header />
    <main class="page__content" style="padding-top: 60px">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";

  @Component({
    components: {
      Header,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "./assets/css/minireset.css";
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700&display=swap");

  :root {
    --text: #f1f3f3;
    --context: #1aadf1;
    --context-half: rgba(25, 172, 240, 0.8);
  }

  body {
    font: 400 20px "Baloo Da 2", cursive;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #181717;
    color: var(--text);
    height: 2000px;
    a {
      color: var(--text);
      text-decoration: none;
    }
    main.page__content {
      width: 100%;
      padding: 0 0.4rem;
      max-width: 920px;
      margin: 0 auto;
    }
  }
</style>
