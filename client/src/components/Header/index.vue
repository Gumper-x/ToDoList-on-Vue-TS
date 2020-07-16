<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">Abdout</router-link>
      <div class="activeLink"></div>
    </nav>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { ctxRouter } from "./typings";

  @Component
  export default class Header extends Vue {
    mounted() {
      const ctxRouter: any = this.$route.name;
      console.log(ctxRouter);
    }
  }
</script>

<style lang="scss" scoped>
  header {
    padding: 10px 15px;
    background: #2a2d2e;
    nav {
      position: relative;
      a {
        color: var(--text);
        &.router-link-exact-active {
          color: var(--context);
        }
      }
      .activeLink {
        background: #363636;
      }
    }
  }
</style>
