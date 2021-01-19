<template>
  <div id="line-chart-container" class="h-screen"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: ["data", "config"],
  mounted() {
    this.drawChart(this.data, this.config);
  },
  watch: {
    config() {
      this.drawChart(this.data, this.config);
    },
    data() {
      this.drawChart(this.data, this.config);
    },
  },
  methods: {
    drawChart(json, config) {
      d3.select("#line-chart-container svg").remove();
      const svg = d3
        .select("#line-chart-container")
        .append("svg")
        .attr("class", "bar-chart text-black")
        .attr("viewBox", `0 0 ${config.width} ${config.height}`)
        .attr("width", config.width);

      const data = Object.assign(
        json.map(({ date, value }) => ({ date, value })),
        { y: "$ Close" }
      );

      const line = d3
        .line()
        .defined((d) => !isNaN(d.value))
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      const x = d3
        .scaleUtc()
        .domain(d3.extent(data, (d) => d.date))
        .range([config.margin.left, config.width - config.margin.right]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice()
        .range([config.height - config.margin.bottom, config.margin.top]);

      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${config.height - config.margin.bottom})`)
          .attr("class", "font-body")
          .call(
            d3
              .axisBottom(x)
              .ticks(config.width / 80)
              .tickSizeOuter(0)
          );

      const yAxis = (g) =>
        g
          .attr("transform", `translate(${config.margin.left},0)`)
          .attr("class", "text-black")
          .call(d3.axisLeft(y))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .select(".tick:last-of-type text")
              .clone()
              .attr("x", 3)
              .attr("text-anchor", "start")
              .attr("font-weight", "bold")
              .text(data.y)
          );

      config.axis.bottom && svg.append("g").call(xAxis);

      config.axis.left && svg.append("g").call(yAxis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", config.fillRect ? "#000" : "none")
        .attr("stroke", config.lineStyle.color)
        .attr("stroke-width", config.lineStyle.width)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line);
    },
  },
};
</script>
