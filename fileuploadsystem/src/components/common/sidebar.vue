<template>
  <el-aside class="sidebar">
    <el-row>
      <el-col :span="24">
        <h1 class="sidebar_title">Data Editor</h1>
        <el-row class="pb20">
          <el-col :span="6">
            <img class="editor_img" src="./../../assets/images/test/girl.jpg" />
          </el-col>
          <el-col :span="14" class="lh40 text_ellipse">小明小明小明</el-col>
          <el-col :span="4">
            <span class="el-input__icon fa-check-circle"></span>
          </el-col>
        </el-row>
        <el-menu class="menu" router :default-active="this.$router.path">
          <el-menu-item index="/book">
            <i class="el-icon-menu"></i>
            <span slot="title">图书</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">文集（集刊）</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">论文</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">图片</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">音频</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">视频</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">作者库</span>
          </el-menu-item>
          <h3 class="text_light_blue sidebar_subtitle">主数据管理</h3>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图书</span>
            </template>
            <el-menu-item index="9-1">类别</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文集（集刊）</span>
            </template>
            <el-menu-item index="10-1">类别</el-menu-item>
            <el-menu-item index="10-2">集刊</el-menu-item>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图片</span>
            </template>
            <el-menu-item index="11-1">图片类型</el-menu-item>
            <el-menu-item index="11-2">图片来源</el-menu-item>
          </el-submenu>
          <el-submenu index="12">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>音频</span>
            </template>
            <el-menu-item index="12-1">格式</el-menu-item>
            <el-menu-item index="12-2">音频来源</el-menu-item>
          </el-submenu>
          <el-submenu index="13">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>视频</span>
            </template>
            <el-menu-item index="13-1">格式</el-menu-item>
            <el-menu-item index="13-2">视频来源</el-menu-item>
          </el-submenu>
          <el-submenu index="14">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>作者</span>
            </template>
            <el-menu-item index="14-1">分组1</el-menu-item>
            <el-menu-item index="14-2">分组2</el-menu-item>
          </el-submenu>
          <el-submenu index="15">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>通用</span>
            </template>
            <el-menu-item index="15-1">分组1</el-menu-item>
            <el-menu-item index="15-2">分组2</el-menu-item>
          </el-submenu>
          <div class="ht20"></div>
          <el-submenu index="16">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item index="16-1">分组1</el-menu-item>
            <el-menu-item index="16-2">分组2</el-menu-item>
          </el-submenu>
          <el-menu-item index="17">
            <i class="el-icon-setting"></i>
            <span slot="title">回收站</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  computed: {

  }
}
</script>

<style scoped>
  .sidebar_title{
    padding: 20px 0;
    text-align: center;
    font-size: 24px;

  }
  .sidebar_subtitle{
    font-size: 18px;
    padding-left: 40px;
    font-weight: normal;
  }
  .editor_img{
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .fa-check-circle {
    color: #53a9fe;
  }
</style>
