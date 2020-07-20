<template>
  <section class="wrapper-task-row">
    <svg
      :class="{ animate: animateState }"
      :style="{ opacity: opacityTrash, transform: 'translateX(' + offsetTrash + 'px)' }"
      id="trash-icon"
      viewBox="0 0 16 16"
      class="bi bi-trash2-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"
      />
      <path
        fill-rule="evenodd"
        d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
      />
    </svg>
    <div class="container-task-row" :class="{ animate: animateState }" :style="{ '--x': shiftPan + 'px' }">
      <h3>{{ title }}</h3>
      <button v-hammer:pan.horizontal="panHorizontal" v-hammer:panstart="panStart" v-hammer:panend="panEnd">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-grip-horizontal"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue } from "vue-property-decorator";
  import { VueHammer } from "vue2-hammer";
  Vue.use(VueHammer);

  @Component
  export default class Home extends Vue {
    @Prop({ required: true, type: String }) readonly title!: string;
    @Prop({ required: true, type: Number }) readonly id!: number;

    shiftPan = 0;
    offsetTrash = 30;
    opacityTrash = 0;
    animateState = true;

    panHorizontal(e: any) {
      if (e.deltaX <= 0) {
        this.shiftPan = e.deltaX;
      }
      if (e.additionalEvent === "panleft") {
        if (this.opacityTrash <= 1) {
          this.opacityTrash += 0.01;
        }

        if (this.offsetTrash >= 0) {
          this.offsetTrash -= 0.3;
        }
      } else if (e.additionalEvent === "panright") {
        if (e.deltaX >= -100) {
          this.opacityTrash -= 0.01;
          this.offsetTrash += 0.3;
        }
      }
    }

    panStart() {
      this.animateState = false;
    }

    panEnd(e: any) {
      this.animateState = true;
      this.shiftPan = 0;
      this.offsetTrash = 30;
      this.opacityTrash = 0;
      if (e.deltaX <= -100) {
        this.removeTask(this.id);
      }
    }

    @Emit()
    removeTask(index: number) {
      return index;
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-task-row {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: -2px 0 6px rgba(9, 8, 32, 0.15);
    margin: 8px 0;
    background: linear-gradient(-90deg, rgba(204, 34, 34, 0.7), #cc2222);
    #trash-icon {
      position: absolute;
      top: 0;
      right: 30px;
      width: 2.2rem;
      height: 100%;
      display: inline-block;
      vertical-align: text-bottom;
      &.animate {
        transition: 0.3s ease-in-out;
      }
    }
    .container-task-row {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #e4e4e4;
      border-radius: 4px;
      padding-left: 10px;
      color: #000;
      transform: translateX(var(--x, 0));
      &.animate {
        transition: 0.3s ease-in-out;
      }
      button {
        border: none;
        padding: 5px 0 5px 2px;
        margin-left: 100px;
        outline: none;
        cursor: grab;
        background: var(--context);
        transition: background 0.3s ease;
        &:hover {
          background: var(--context-half);
        }
        svg {
          width: 2.4rem;
          height: 100%;
          fill: white;
          display: inline-block;
          vertical-align: text-bottom;
        }
      }
    }
  }
</style>
