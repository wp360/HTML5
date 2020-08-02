<template>
  <!-- 销售数据表 -->
  <v-chart :options="data" />
</template>

<script>
export default {
  name: 'salesView',
  data () {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [100, 200, 300]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
