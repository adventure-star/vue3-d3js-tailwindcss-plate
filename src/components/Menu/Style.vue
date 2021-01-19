<template>
  <Select :label="'Themes'" :options="this.themes" @change="handleChangeTheme" />
  <Colorpicker
    :label="'Colors'"
    :value="lineStyle.color"
    @input="handleChangeLineStyle('color', $event)"
  />
  <Select :label="'Curve'" :options="this.curve" />
  <Slider
    :label="'Line Width'"
    :value="lineStyle.width"
    @input="handleChangeLineStyle('width', $event)"
  />
  <Toggle :label="'Enable Area'" :value="enableFill" @click="handleChangeFillRect" />
  <Slider :label="'Area Baseline Value Width'" />
  <Slider :label="'Area Opacity'" />
  <Select :label="'Area Opacity'" :options="this.opacity" />
</template>

<script>
import Slider from "../Base/Slider.vue";
import Toggle from "../Base/Toggle.vue";
import Select from "../Base/Select.vue";
import Colorpicker from "../Base/Colorpicker.vue";

export default {
  name: "Style",
  components: {
    Slider,
    Toggle,
    Select,
    Colorpicker,
  },
  data() {
    return {
      enableFill: this.$store.state.config.fillRect,
      lineStyle: {
        width: this.$store.state.config.lineStyle.width,
        color: this.$store.state.config.lineStyle.color,
      },
      themes: [
        { id: "dark", text: "Dark Theme" },
        { id: "light", text: "Light Theme" },
        
      ],
      curve: [
        { id: 1, text: "Curve 1" },
        { id: 2, text: "Curve 2" },
        { id: 3, text: "Curve 3" },
        { id: 4, text: "Curve 4" },
        { id: 5, text: "Curve 5" },
      ],
      opacity: [
        { id: 0, text: "0%" },
        { id: 1, text: "10%" },
        { id: 2, text: "20%" },
        { id: 3, text: "30%" },
        { id: 4, text: "40%" },
        { id: 5, text: "50%" },
        { id: 6, text: "60%" },
        { id: 7, text: "70%" },
        { id: 8, text: "80%" },
        { id: 9, text: "90%" },
        { id: 10, text: "100%" },
      ],
    };
  },
  methods: {
    handleChangeLineStyle(flag, e) {
      const value = flag === "width" ? e.target.value * 1 : e.target.value;
      this.$store.dispatch("handleChangeLineStyle", { [flag]: value });
    },
    handleChangeFillRect(event) {
      this.$store.dispatch("handleChangeFillRect", event);
    },
    handleChangeTheme(e) {
      let container = document.documentElement;
      window.localStorage.setItem("theme", e.target.value);
      let theme = window.localStorage.getItem("theme");

      // remove all class names on html tags
      container.classList.remove("theme-dark");
      container.classList.remove("theme-light");

      // add the class name of theme that you want
      switch (theme) {
        case "light":
          container.classList.add("theme-light");
          break;
        case "dark":
          container.classList.add("theme-dark");
          break;


        default:
          break;
      }
    },
  },
};
</script>
