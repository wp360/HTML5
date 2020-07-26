<template>
  <div>
    <common-card
      title="累计销售额"
      value="￥ 1,0000"
    >
      <template>
        <div class="compare"></div>
      </template>
      <template v-slot:footer>
        <div class="footer">
          <span>昨日销售额</span>
          <span class="money">￥ 8,000</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .compare {
    height: 100%;
    background: yellow;
  }

  span {
    font-size: 12px;
  }

  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
