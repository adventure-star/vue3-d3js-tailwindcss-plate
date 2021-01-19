<template>
  <div class="mb-4">
    <label for="" class="text-black">{{ label }}</label>
    <select class="w-full h-12 border border-gray-300 rounded-md bg-white text-black">
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Select",
  data() {
    return {
      toggle: false,
    };
  },
  name: "Toggle",
  props: ["label", "options"],
};
</script>

<style></style>
