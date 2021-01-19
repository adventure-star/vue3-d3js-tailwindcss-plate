<template>
  <Toggle :label="'Is Interactive'" />
  <Toggle :label="'Use Mesh'" />
  <Toggle :label="'Debug Mesh'" />
  <Select :label="'Enable Slices'" :options="this.slices" />
  <Toggle :label="'Debug Slices'" />
  <Toggle :label="'Enable Crosshair'" />
  <Select :label="'Crosshair Type'" :options="this.types" />
</template>
<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";
import Select from "../Base/Select.vue";
import Colorpicker from "../Base/Colorpicker.vue";

export default {
  name: "Interactivity",
  components: {
    Slider,
    Toggle,
    Select,
    Colorpicker,
  },
  data() {
    return {
      slices: [
        { id: 1, text: "Slice 1" },
        { id: 2, text: "Slice 2" },
        { id: 3, text: "Slice 3" },
        { id: 4, text: "Slice 4" },
        { id: 5, text: "Slice 5" },
      ],
      types: [
        { id: 1, text: "Type 1" },
        { id: 2, text: "Type 2" },
        { id: 3, text: "Type 3" },
        { id: 4, text: "Type 4" },
        { id: 5, text: "Type 5" },
      ],
    };
  },
};
</script>
