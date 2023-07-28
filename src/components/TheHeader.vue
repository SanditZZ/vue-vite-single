<script setup lang="ts">
import { ref } from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
  <nav id="the-header"
    class="z-50 absolute text-1xl px-3 py-1 lg:text-2xl font-bold top-0 right-14 mt-8 select-none transform -translate-x-1/2 ease-in-out duration-300 hover:bg-[#0ef069] border-2 border-[#0ef069] rounded-xl">
    <a @click="toggleDropdown" class="cursor-pointer">
      <p>Menu</p>
    </a>
  </nav>

  <transition name="slide-down" mode="out-in">
    <aside v-if="showDropdown"
      class="absolute top-0 right-0 z-50 flex bg-[#242424] px-28 py-32 gap-3 w-1/6 transition-all duration-300 overflow-hidden min-h-screen flex-col text-right text-black ">
      <nav id="the-header"
        class=" absolute text-1xl px-3 py-1 lg:text-2xl font-bold top-0 right-14 mt-8 select-none transform -translate-x-1/2 ease-in-out duration-300 hover:bg-[#0ef069] border-2 border-[#0ef069] rounded-xl">
        <a @click="toggleDropdown" class="cursor-pointer">
          <p>Close</p>
        </a>
      </nav>

      <RouterLink icon-btn to="/">
        <p>Home</p>
      </RouterLink>

      <router-link to="/about">About</router-link>

      <a rel="noreferrer" href="https://github.com/SanditZZ" target="_blank" title="GitHub">
        <p>GitHub</p>
      </a>
      <a rel="noreferrer" href="https://sanditzz.github.io/3d-portfolio-po" target="_blank" title="Portfolio">
        <p>Portfolio</p>
      </a>
    </aside>
  </transition>
</template>

<style scoped>
#the-header {
  z-index: 50;
}

aside a:hover {
  color: white;
}

a {
  font-weight: 700;
  color: #0ef069;
  text-decoration: inherit;
  transition: all 0.3s;
}

a:hover {
  color: white;
  transition: all 0.3s;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
