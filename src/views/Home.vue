<template>
  <div class="wrapper-home">
    <TaskAdd />
    <transition-group tag="ul" name="remove">
      <TaskRow v-for="task in storeTask.getTasks" :id="task.id" :key="task.id">
        {{ task.title }}
      </TaskRow>
    </transition-group>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  // Components
  import TaskRow from "@/components/TaskRow.vue";
  import TaskAdd from "@/components/TaskAdd.vue";
  // Vuex
  import { getModule } from "vuex-module-decorators";
  import Task from "@/store/modules/task";

  @Component({
    components: {
      TaskRow,
      TaskAdd,
    },
  })
  export default class Home extends Vue {
    storeTask = getModule(Task, this.$store);
  }
</script>

<style lang="scss" scoped>
  .remove-enter-active,
  .remove-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .remove-enter, .remove-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: scale(0.8);
    opacity: 0;
  }
  .wrapper-home {
    margin-top: 1rem;
    background: rgb(59, 59, 59);
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 6px;
  }
</style>
