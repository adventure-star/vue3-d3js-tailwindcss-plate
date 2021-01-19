<template>
  <div class="mb-4">
    <label for="" class="text-black">{{ label }}</label>
    <input
      type=""
      name=""
      :value="this.text"
      class="w-full h-12 p-3 border rounded-md focus:outline-none bg-white text-black"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  name: "Text",
  props: ["label", "value"],
  mounted() {
    this.text = this.value;
  },
};
</script>
