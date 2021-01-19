<template>
  <div class="flex h-screen">
    <Sidebar />
    <Canvas />
  </div>
</template>

<script>
import Vuex from "vuex";
import Sidebar from "./components/Sidebar.vue";
import Canvas from "./components/Canvas.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Canvas,
  },
  mounted() {
    var theme = window.localStorage.getItem("theme") || "light";
    var container = document.documentElement;
    container.classList.add(`theme-${theme}`);
  },
};
</script>
