<template>
  <el-row class="pt20 pb20">
    <el-col :span="12">
      显示第<span class="text_primary ml5 mr5">1</span>至第<span class="text_primary ml5 mr5">10</span>项结果，共<span class="text_primary ml5 mr5">1,950</span>项
    </el-col>
    <el-col :span="12" class="text_right">
      <el-pagination background layout="prev, pager, next" page-size="20" pager-count="6" :total="total"></el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      total: 10000
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
