<template>
  <div>
    <common-card
      title="今日交易用户数"
      value="1,200"
    >
      <template>
        <div id="today-users-chart" :style="{width: '100%', height: '100%'}"></div>
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'todayUsers',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
        show: false,
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [410, 82, 334, 390, 330, 220, 150, 82, 200, 320, 134, 290, 330, 150],
        barWidth: '60%'
      }],
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    })
  }
}
</script>
