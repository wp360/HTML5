<template>
  <div>
    <common-card
      title="累计用户数"
      value="1,800"
    >
      <template>
        <div id="total-users-chart" :style="{width: '100%', height: '100%'}"></div>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalUsers',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45C946'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [260],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            // console.log(params, api)
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              // type: 'path',
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M514.525867 956.474027L3.413333 70.46144l1017.173334-2.932053-506.0608 888.94464z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45C946'
                }
              },
              {
                type: 'path',
                shape: {
                  d: 'M514.525867 67.529387L3.413333 953.53856l1017.173334 2.92864L514.525867 67.529387z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45C946'
                }
              }]
            }
          }
        }
      ],
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

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
