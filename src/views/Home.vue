<template>
  <div class="wrapper-home">
    <TaskAdd />
    <TaskRow v-for="(task, index) in tasks" :title="task" :id="index" @remove-task="removeTodo" :key="task" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import TaskRow from "@/components/TaskRow.vue";
  import TaskAdd from "@/components/TaskAdd.vue";

  @Component({
    components: {
      TaskRow,
      TaskAdd,
    },
  })
  export default class Home extends Vue {
    tasks = ["Work", "Suck", "Ready"];

    removeTodo(id: number) {
      console.log(this.tasks.splice(id, 1));
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-home {
    background: rgb(59, 59, 59);
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
</style>
