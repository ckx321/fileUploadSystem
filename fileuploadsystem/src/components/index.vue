<template>
  <el-container>
    <ckx-sidebar></ckx-sidebar>
    <el-container class="main">
      <el-header class="pr0 pl0">
        <ckx-navbar></ckx-navbar>
      </el-header>
      <el-main class="content">
        <el-row>
          <el-col :span="23">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navbar from './common/navbar.vue'
import sidebar from './common/sidebar.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'ckx-navbar': navbar,
    'ckx-sidebar': sidebar
  },
  methods: {
    runs: function () {
    }
  }
}
</script>

<style>
  .content{
    background-color: #f8f8f8;
  }
</style>
