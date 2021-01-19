<template>
  <Toggle :label="'Enable Points'" />
  <Slider :label="'Point Size'" />
  <Colorpicker :label="'Point Color'" />
  <Slider :label="'Point Border Width'" />
  <Colorpicker :label="'Point Border Color'" />
  <Toggle :label="'Enable Point Label'" />
  <Select :label="'Point Label'" :options="this.label" />
  <Slider :label="'Point Label Y Offset'" />
</template>
<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";
import Select from "../Base/Select.vue";
import Colorpicker from "../Base/Colorpicker.vue";

export default {
  name: "Point",
  components: {
    Slider,
    Toggle,
    Select,
    Colorpicker,
  },
  data() {
    return {
      label: [
        { id: 1, text: "Point Label 1" },
        { id: 2, text: "Point Label 2" },
        { id: 3, text: "Point Label 3" },
        { id: 4, text: "Point Label 4" },
        { id: 5, text: "Point Label 5" },
      ],
    };
  },
};
</script>
