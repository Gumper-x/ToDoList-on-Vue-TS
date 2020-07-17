<template>
  <div class="home">
    <Header showDetails="HI" />
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";

  export default class Home extends Vue {
    counter = 1;
    click() {
      const dd = 2;
    }
  }
</script>

<style lang="scss" scoped></style>
