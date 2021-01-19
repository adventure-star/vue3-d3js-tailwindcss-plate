<template>
  <div class="relative font-display">
    <div
      ref="buttonRef"
      @click="toggleMenu"
      class="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8"
    >
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-grid"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <rect x="4" y="4" width="6" height="6" rx="1"></rect>
          <rect x="14" y="4" width="6" height="6" rx="1"></rect>
          <rect x="4" y="14" width="6" height="6" rx="1"></rect>
          <rect x="14" y="14" width="6" height="6" rx="1"></rect>
        </svg>
        <span class="text-sm ml-2">{{ label }}</span>
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="isOpen"
        ref="menuRef"
        class="duration-150 ease-in-out absolute shadow-2xl top-0 left-48 md:left-64 md:w-64 w-48"
      >
        <div class="w-full bg-white rounded">
          <div class="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
            <p
              class="text-base text-gray-800 font-normal leading-normal tracking-normal opacity-50"
            >
              {{ label }}
            </p>
          </div>
          <div class="w-full h-full px-4 xl:px-8 pt-3 pb-5">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Menus",
  props: ["label"],
  data() {
    return {
      isOpen: false,
      windowHeight: 0,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isOpen = !this.isOpen;
    },
    closeMenu: function (e) {
      if (
        !this.$refs.menuRef.contains(e.target) &&
        !this.$refs.buttonRef.contains(e.target)
      ) {
        this.isOpen = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("click", this.closeMenu);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.closeMenu);
  },
  mounted: function () {
    const padding = 15;
    this.windowHeight = window.innerHeight;
    const buttonHeight = 44;
    this.$refs.menuRef.style.display = "inline";
    const height = this.$refs.menuRef.clientHeight;
    const top = this.$refs.menuRef.getBoundingClientRect().top;
    this.$refs.menuRef.style.maxHeight = `${this.windowHeight - 2 * padding}px`;
    this.$refs.menuRef.style.overflow = "auto";
    if (top === 0) {
      this.$refs.menuRef.style.top = `${padding}px`;
    }
    if (top + height > this.windowHeight) {
      this.$refs.menuRef.style.top = "auto";
      this.$refs.menuRef.style.bottom = `${
        top + buttonHeight + padding - this.windowHeight
      }px`;
    }
    this.$refs.menuRef.style.display = "none";
  },
};
</script>

<style lang="">
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
