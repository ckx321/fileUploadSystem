<template>
  <div class="add_book common_pannel">
    <el-row class="clearb">
      <div class="fl">
        <el-button type="primary" size="mini" icon="el-icon-plus">新建</el-button>
      </div>
      <div class="fr">
        <el-button type="primary" size="mini">批量提交</el-button>
        <el-button type="primary" size="mini">批量通过</el-button>
        <el-button type="primary" size="mini">批量退改</el-button>
        <el-button type="primary" size="mini">批量发布</el-button>
        <el-button type="primary" size="mini">批量撤回</el-button>
        <el-button type="primary" size="mini">批量删除</el-button>
      </div>
    </el-row>
    <el-row class="mt10">
      <el-form ref="form" :model="form" label-width="130px" label-position="right">
        <el-col :span="8">
          <el-form-item label="ID：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="出版号：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="出版地：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="中国法分类号：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="丛书名称：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="错误码：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="状态：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="是否有电子版权：">
            <el-radio-group size="mini" v-model="form.ywbq">
              <el-radio-button label="有"></el-radio-button>
              <el-radio-button label="无"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="到期日期：">
            <el-date-picker v-model="form.dqrq" type="date" size="mini" style="width:100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="版次：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="印次：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="出版机构：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="丛书责任者：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="GIP主题词：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="数据来源：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="所属部门：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="责任编辑：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="美术编辑：">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="搜索词：">
            <el-input size="mini" class="search_word_select">
              <el-select v-model="form.select" slot="prepend" placeholder="书名">
                <el-option label="111" value="1"></el-option>
                <el-option label="222" value="2"></el-option>
                <el-option label="333" value="3"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="出版日期：">
            <el-date-picker v-model="form.dqrq" type="date" size="mini" style="width:100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="更新日期：">
            <el-date-picker v-model="form.dqrq" type="date" size="mini" style="width:100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="发布日期：">
            <el-date-picker v-model="form.dqrq" type="date" size="mini" style="width:100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="排版单位：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="制作单位：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="质检员：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="运营编辑：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="版权经理：">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        dqrq: '',
        ywbq: '有',
        select: ''
      }
    }
  },
  components: {

  }
}
</script>

<style>
  .add_book .el-form-item{
    margin-bottom: 2px;
  }
  .add_book .search_word_select .el-input-group__prepend{
    background-color: #fff;
    width: 30px;
  }
</style>
