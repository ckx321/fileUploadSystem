<template>
  <!-- <el-header class="navbar"> -->
    <el-row class="navbar">
      <el-col :span="1">
        <div class="pt10 pb10 cursor_p text_center">
          <span class="el-input__icon fa-bars"></span>
        </div>
      </el-col>
      <el-col :span="17">
        <el-menu mode="horizontal">
          <el-menu-item index="1" class="text_blue">资源计划</el-menu-item>
          <el-menu-item index="2">协同编纂</el-menu-item>
          <el-menu-item index="3">资源管理</el-menu-item>
          <el-menu-item index="4">运营管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-row class="pt10">
          <el-col :span="6">
            <img class="editor_img" src="./../../assets/images/test/girl.jpg" />
          </el-col>
          <el-col :span="14" class="lh40 text_ellipse">小明小明小明</el-col>
          <el-col :span="4">
            <span class="el-input__icon fa-cog"></span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  .navbar{
    border-bottom: 1px solid #f3f4f5;
  }
  .editor_img{
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border-radius: 50%;
  }
</style>
