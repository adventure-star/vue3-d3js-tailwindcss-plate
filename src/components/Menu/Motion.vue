<template>
  <Toggle :label="'Animate'" />
  <Slider :label="'Motion Stiffness'" />
  <Slider :label="'Motion Damping'" />
</template>
<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";

export default {
  name: "Motion",
  components: {
    Slider,
    Toggle,
  },
};
</script>
