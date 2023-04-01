<script setup>
import Logo from './components/Logo.vue';
import SocialBar from './components/SocialBar.vue'
</script>

<template>
  <!---- Header ---->
  <header>
    <router-link to="/">
      <Logo />
    </router-link>
  </header>
  <!---- Main ---->
  <main>
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </main>
  <!---- Footer ---->
  <footer>
    <SocialBar />
  </footer>
</template>

<style scoped>
  header {
    padding: 1rem 2rem;
    display: flex;
  }
  main {
    overflow-x: hidden;
  }
  footer {
    position: fixed;
    bottom: 0;
    height: 2rem;
    padding: 1rem 2rem;
    width: calc(100% - 4rem);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .slide-enter-from,.slide-leave-to {
    opacity: 0;
    filter: blur(1rem);
    transform: translateX(-30vw);
  }
</style>
