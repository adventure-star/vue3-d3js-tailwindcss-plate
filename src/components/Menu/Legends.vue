<template>
  <Select :label="'Legend Position'" :options="this.position" />
  <Radio :label="'Label'" :items="this.radioItems" />
  <Toggle :label="'Justify'" />
  <Slider :label="'Translabe X'" />
  <Slider :label="'Translabe Y'" />
  <Slider :label="'Item Width'" />
  <Slider :label="'Item Height'" />
  <Slider :label="'Item Spacing'" />
  <Slider :label="'Symbol Size'" />
  <Select :label="'Item Direction'" :options="this.direction" />
</template>
<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";
import Select from "../Base/Select.vue";
import Radio from "../Base/Radio.vue";
import Colorpicker from "../Base/Colorpicker.vue";

export default {
  name: "Legends",
  components: {
    Slider,
    Toggle,
    Select,
    Colorpicker,
    Radio,
  },
  data() {
    return {
      position: [{ id: 1, text: "Bottom Right" }],
      direction: [{ id: 1, text: "left-to-right" }],
      radioItems: [
        { label: "Column", value: 0 },
        { label: "Row", value: 1 },
      ],
    };
  },
};
</script>
