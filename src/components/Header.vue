<template>
  <header>
    <h1><router-link :to="{ name: 'Home' }">TTD</router-link></h1>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }" ref="homeLink">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" ref="aboutLink">About</router-link>
        </li>
      </ul>
      <div class="active-link-indicator" :style="{ left: routeTracking }"></div>
    </nav>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Header extends Vue {
    private propertyNavs = {
      homeLinkWidth: 0,
      aboutLinkWidth: 0,
    };
    $refs!: {
      homeLink: HTMLFormElement;
      aboutLink: HTMLFormElement;
    };
    mounted() {
      this.$nextTick(() => {
        this.propertyNavs.homeLinkWidth = this.$refs.homeLink.$el.offsetWidth;
        this.propertyNavs.aboutLinkWidth = this.$refs.aboutLink.$el.clientWidth;
      });
    }
    get routeTracking(): string {
      if (this.$route.name === "Home") {
        return `${this.propertyNavs.homeLinkWidth / 2 - 10}px`;
      } else if (this.$route.name === "About") {
        return `${this.propertyNavs.homeLinkWidth + 10 + (this.propertyNavs.aboutLinkWidth / 2 - 10)}px`;
      } else {
        return `${this.propertyNavs.homeLinkWidth / 2 - 10}px`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: #2a2d2e;
    box-shadow: 0 2px 10px rgba(42, 45, 46, 0.2);
    h1 {
      font-size: 2em;
      font-weight: 800;
      cursor: pointer;
      &:hover {
        animation: text-shadow 1.5s ease-in-out;
      }
      a {
        display: block;
      }
    }

    nav {
      position: relative;
      margin: 0 auto;
      padding: 5px 0;
      ul {
        display: flex;
        list-style: none;
        li {
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
          a {
            display: block;
            transition: color 0.1s ease;
            &:hover {
              color: var(--context-half);
            }
            &.router-link-exact-active {
              color: var(--context);
            }
          }
        }
      }
      .active-link-indicator {
        position: absolute;
        bottom: 0;
        height: 3px;
        border-radius: 10px;
        width: 20px;
        background: var(--context);
        transition: left 0.3s ease-in-out;
      }
    }
  }
  @keyframes text-shadow {
    0% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }

    20% {
      transform: translateY(-0.05em);
      text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b, 0 -0.25em 0 #fefc4b;
    }

    40% {
      transform: translateY(0.05em);
      text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd, 0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
    }

    60% {
      transform: translateY(-0.05em);
      text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd, 0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
    }

    80% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }
  }
</style>
