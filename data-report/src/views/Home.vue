<template>
  <div class="home">
    <top-view></top-view>
    <h1>首页</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    background: #eee;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
