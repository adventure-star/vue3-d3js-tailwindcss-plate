<template>
  <Menus :label="'MARGIN'"><Margin /></Menus>
  <Menus :label="'STYLE'"><Style /></Menus>
  <Menus :label="'POINTS'"><Points /></Menus>
  <Menus :label="'GRID'"><Grid /></Menus>
  <Menus :label="'INTERACTIVITY'"><Interactivity /></Menus>
  <Menus :label="'LEGENDS'"><Legends /></Menus>
  <Menus :label="'MOTION'"><Motion /></Menus>
</template>

<script>
import Margin from "./Menu/Margin.vue";
import Style from "./Menu/Style.vue";
import Grid from "./Menu/Grid.vue";
import Interactivity from "./Menu/Interactivity.vue";
import Points from "./Menu/Points.vue";
import Motion from "./Menu/Motion.vue";
import Legends from "./Menu/Legends.vue";
import Menus from "./Menus.vue";
export default {
  name: "Link",
  components: {
    Menus,
    Margin,
    Style,
    Motion,
    Grid,
    Points,
    Interactivity,
    Legends,
  },
};
</script>
