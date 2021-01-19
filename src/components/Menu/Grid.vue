<template>
  <Toggle :label="'Enable GridX'" />
  <Toggle :label="'Enable GridY'" />
  <Toggle
    :label="'Enable Axis Top'"
    @click="handleChangeAxis('top', $event)"
    :value="this.axis.top"
  />
  <template v-if="this.axis.top">
    <Slider :label="'Tick Size'" />
    <Slider :label="'Tick Padding'" />
    <Slider :label="'Tick Rotation'" />
    <Text :label="'Legend'" value="transportation" />
    <Slider :label="'Legend Offset'" />
  </template>
  <Toggle
    :label="'Enable Axis Bottom'"
    @click="handleChangeAxis('bottom', $event)"
    :value="this.axis.bottom"
  />
  <template v-if="this.axis.bottom">
    <Slider :label="'Tick Size'" />
    <Slider :label="'Tick Padding'" />
    <Slider :label="'Tick Rotation'" />
    <Text :label="'Legend'" value="transportation" />
    <Slider :label="'Legend Offset'" />
  </template>
  <Toggle
    :label="'Enable Axis Left'"
    @click="handleChangeAxis('left', $event)"
    :value="this.axis.left"
  />
  <template v-if="this.axis.left">
    <Slider :label="'Tick Size'" />
    <Slider :label="'Tick Padding'" />
    <Slider :label="'Tick Rotation'" />
    <Text :label="'Legend'" value="transportation" />
    <Slider :label="'Legend Offset'" />
  </template>
  <Toggle
    :label="'Enable Axis Right'"
    @click="handleChangeAxis('right', $event)"
    :value="this.axis.right"
  />
  <template v-if="this.axis.right">
    <Slider :label="'Tick Size'" />
    <Slider :label="'Tick Padding'" />
    <Slider :label="'Tick Rotation'" />
    <Text :label="'Legend'" value="transportation" />
    <Slider :label="'Legend Offset'" />
  </template>
</template>
<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";
import Text from "../Base/Text.vue";

export default {
  name: "Grid",
  components: {
    Slider,
    Toggle,
    Text,
  },
  data() {
    return {
      axis: this.$store.state.config.axis,
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
  methods: {
    handleChangeAxis(flag, event) {
      this.$store.dispatch("handleChangeAxis", { [flag]: event });
      this.axis = this.$store.state.config.axis;
    },
  },
};
</script>
