<template>
  <div class="text-left bg-white absolute z-0 w-auto min-w-full md:pl-64">
    <LineChart :data="chartData" :config="{ ...chartConfig, ...config }"></LineChart>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LineChart from "./LineChart.vue";
import axios from "axios";
import data from "./data/lineChartData.js";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chartData: data,
      chartConfig: {
        width: 1200,
        height: 700,
      },
    };
  },
  computed: mapState(["config"]),
};
</script>

<style lang="">
/* .canvas-width {
  width: calc(100% - 128px);
} */
</style>
