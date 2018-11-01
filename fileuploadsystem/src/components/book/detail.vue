<template>
  <div>
    <!-- 图书基本信息 -->
    <ckx-bookBaseInfo></ckx-bookBaseInfo>
    <!-- 图书信息导航 -->
    <el-tabs v-model="activeName" class="mt10">
      <el-tab-pane label="排版文件" name="1">
        <!-- 排版文件 -->
        <ckx-pbwj></ckx-pbwj>
      </el-tab-pane>
      <el-tab-pane label="印刷文件" name="2">
        <!-- 印刷文件 -->
        <ckx-yswj></ckx-yswj>
      </el-tab-pane>
      <el-tab-pane label="数字文件" name="3">
        <!-- 数字文件 -->
        <ckx-szwj></ckx-szwj>
      </el-tab-pane>
      <el-tab-pane label="多媒体文件" name="4">
        <!-- 多媒体文件 -->
        <ckx-dmtwj></ckx-dmtwj>
      </el-tab-pane>
      <el-tab-pane label="版权文件" name="5">
        <!-- 版权文件 -->
        <ckx-bqwj></ckx-bqwj>
      </el-tab-pane>
      <el-tab-pane label="元数据" name="6">
        <!-- 元数据 -->
        <ckx-ysj></ckx-ysj>
      </el-tab-pane>
      <el-tab-pane label="工价计算" name="7">
        <!-- 工价计算 -->
        <ckx-gjjs></ckx-gjjs>
      </el-tab-pane>
      <el-tab-pane label="获奖情况" name="8">
        <!-- 获奖情况 -->
        <ckx-hjqk></ckx-hjqk>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import bookBaseInfo from './bookBaseInfo.vue'
import infoPbwj from './infoPbwj.vue'
import infoYswj from './infoYswj.vue'
import infoSzwj from './infoSzwj.vue'
import infoDmtwj from './infoDmtwj.vue'
import infoBqwj from './infoBqwj.vue'
import infoYsj from './infoYsj.vue'
import infoGjjs from './infoGjjs.vue'
import infoHjqk from './infoHjqk.vue'

export default {
  data () {
    return {
      activeName: '1'
    }
  },
  components: {
    'ckx-bookBaseInfo': bookBaseInfo,
    'ckx-pbwj': infoPbwj,
    'ckx-yswj': infoYswj,
    'ckx-szwj': infoSzwj,
    'ckx-dmtwj': infoDmtwj,
    'ckx-bqwj': infoBqwj,
    'ckx-ysj': infoYsj,
    'ckx-gjjs': infoGjjs,
    'ckx-hjqk': infoHjqk
  }
}
</script>

<style scoped>

</style>
