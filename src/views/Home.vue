<template>
  <div class="wrapper-home">
    <TaskAdd />
    <button @click="click">d</button>
    {{ storeUser.getName }}
    <TaskRow v-for="(task, index) in tasks" :id="index" @remove-task="removeTodo" :key="task">
      {{ task }}
    </TaskRow>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  // Components
  import TaskRow from "@/components/TaskRow.vue";
  import TaskAdd from "@/components/TaskAdd.vue";
  // Vuex
  import { getModule } from "vuex-module-decorators";
  import User from "@/store/modules/user";

  @Component({
    components: {
      TaskRow,
      TaskAdd,
    },
  })
  export default class Home extends Vue {
    storeUser = getModule(User, this.$store);

    tasks = ["Work", "Suck", "Ready"];
    click() {
      console.log(this.storeUser);
    }
    removeTodo(id: number) {
      console.log(this.tasks.splice(id, 1));
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-home {
    margin-top: 1rem;
    background: rgb(59, 59, 59);
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 6px;
  }
</style>
