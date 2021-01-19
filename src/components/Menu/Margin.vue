<template>
  <Slider
    :label="'Margin: Top'"
    :value="margin.top"
    @input="handleChange('top', $event)"
  />
  <Slider
    :label="'Margin: Bottom'"
    :value="margin.bottom"
    @input="handleChange('bottom', $event)"
  />
  <Slider
    :label="'Margin: Left'"
    :value="margin.left"
    @input="handleChange('left', $event)"
  />
  <Slider
    :label="'Margin: Right'"
    :value="margin.right"
    @input="handleChange('right', $event)"
  />
</template>
<script>
import Slider from "../Base/Slider.vue";

export default {
  name: "Margin",
  data() {
    return {
      margin: this.$store.state.config.margin,
    };
  },
  components: {
    Slider,
  },
  methods: {
    handleChange(flag, e) {
      this.margin = { ...this.margin, [flag]: e.target.value * 1 };
      this.$store.dispatch("handleChangeMargin", this.margin);
    },
  },
};
</script>
