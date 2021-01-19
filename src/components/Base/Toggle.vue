<template>
  <div class="mb-4 font-body">
    <label for="" class="text-black">{{ this.label }}</label>
    <div class="w-12 relative my-1 cursor-pointer" @click="handleToggle($event)">
      <div class="h-8 w-12 rounded-full" :class="toggle ? 'bg-blue-500' : 'bg-gray-300'">
        <div
          class="mt-1 w-6 h-6 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white shadow-toggle border-gray-300 top-0"
          :class="toggle ? 'left-96 -ml-6' : 'left-4'"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  name: "Toggle",
  props: {
    label: String,
    value: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.toggle = this.value;
  },
  methods: {
    handleToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggle = !this.toggle;
      this.$emit("click", this.toggle);
    },
  },
};
</script>

<style>
.shadow-toggle {
  box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.1), -1px 1px 4px 1px rgba(0, 0, 0, 0.06);
}

.left-4 {
  left: 4% !important;
}

.left-96 {
  left: 96% !important;
}
</style>
