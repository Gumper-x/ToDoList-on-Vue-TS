<template>
  <div class="task-add">
    <input v-model="inputValue" @keyup.enter="addTask" type="text" class="task-add__input" required />
    <button class="task-add__button-add" @click="addTask">+</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  // Vuex
  import { getModule } from "vuex-module-decorators";
  import Task from "@/store/modules/task";

  @Component
  export default class TaskAdd extends Vue {
    storeTask = getModule(Task, this.$store);
    inputValue = "";
    addTask() {
      if (this.inputValue !== "") {
        this.storeTask.addTask(this.inputValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-add {
    display: flex;
    .task-add__input {
      outline: none;
      font-size: 1.2em;
      width: 100%;
      padding: 10px 10px;
      border: 2px solid rgb(163, 163, 163);
      border-radius: 4px 0 0 4px;
      &:valid,
      &:focus {
        border: 2px solid var(--context);
      }
    }
    .task-add__button-add {
      font-size: 1.3em;
      cursor: pointer;
      outline: none;
      border: none;
      color: var(--text);
      width: 2.4rem;
      border-radius: 0 4px 4px 0;
      background: var(--context);
      transition: background 0.2s;
      &:hover {
        background: var(--context-half);
      }
    }
  }
</style>
