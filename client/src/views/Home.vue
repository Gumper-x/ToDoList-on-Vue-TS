<template>
  <div class="home">
    <!-- <button @click="click">CLICK</button> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component
  export default class Home extends Vue {
    counter = 1;
    // click() {
    //   const routeHistory = this.$router.base;
    //   console.log(routeHistory);
    // }
  }
</script>

<style lang="scss" scoped></style>
