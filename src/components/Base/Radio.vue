<template>
  <div class="mb-4">
    <label for="" class="text-black">{{ label }}</label>
    <div class="block">
      <label
        class="inline-flex items-center mr-3"
        v-for="item in items"
        :key="item.value"
        @click="this.value = item.value"
      >
        <input
          type="radio"
          class="form-radio h-5 w-5 text-orange-600"
          :checked="value === item.value"
        /><span class="ml-2 text-gray-700">{{ item.label }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  data() {
    return {
      value: 0,
    };
  },
  name: "Toggle",
  props: ["label", "items"],
};
</script>

<style></style>
