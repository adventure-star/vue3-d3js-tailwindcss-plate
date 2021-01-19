<template>
  <div class="mb-4">
    <label for="" class="text-black">{{ label }}</label>
    <div
      class="w-full h-12 border rounded-md flex justify-between items-center p-2 bg-white text-black"
    >
      <div class="flex items-center">
        <div
          :style="{ background: this.color || this.value }"
          class="w-4 h-4 rounded-full mr-2"
        ></div>
        <div>{{ this.color || this.value }}</div>
      </div>
      <div class="relative">
        <input
          type="color"
          class="opacity-0 absolute w-4 h-4 cursor-pointer top-0 left-0"
          :value="this.value"
          @input="handleChangeLineColor"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="toe-icon ti ti-eye-dropper h-4 w-4"
          viewBox="0 0 64 64"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M32.132 21.23L42.644 32l-20.85 20.848c-.52.476-.63.45-.977.555L10.59 55.959c-1.47.299-2.853-1.051-2.55-2.55l2.557-10.225c.1-.335.133-.52.555-.977 10.694-10.696 20.979-20.976 20.979-20.976zm4.775 10.56l-4.788-4.605-17.581 17.581-1.567 6.264 6.263-1.568L36.907 31.79zM42.768 10.337s4.213-5.685 10.578.678c5.655 5.657.023 10.254.023 10.254l-7.186 7.02 3.413 3.444-2.615 2.618-17.686-17.686 2.612-2.598 3.56 3.53 7.3-7.26z"
            fill-rule="nonzero"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Colorpicker",
  data() {
    return {
      color: "",
    };
  },
  props: {
    label: String,
    value: {
      type: String,
    },
  },
  methods: {
    handleChangeLineColor(e) {
      this.color = e.target.value;
    },
  },
};
</script>

<style></style>
