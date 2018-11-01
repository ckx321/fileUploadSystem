<template>
  <div class="book_baseinfo common_pannel">
    <el-row>
      <el-col :span="6">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/book' }">图书</el-breadcrumb-item>
        <el-breadcrumb-item>图书详情页</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
      <el-col :span="18" class="text_right">
        <el-button type="primary" size="mini">操作记录</el-button>
        <el-button type="primary" size="mini">编辑中</el-button>
        <el-button type="primary" size="mini">保存</el-button>
        <el-button type="primary" size="mini">取消</el-button>
        <el-button type="primary" size="mini">提交</el-button>
        <el-button type="primary" size="mini">通过</el-button>
        <el-button type="primary" size="mini">退改</el-button>
        <el-button type="primary" size="mini">发布</el-button>
        <el-button type="primary" size="mini">撤回</el-button>
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-form ref="form" :model="form" label-width="120px" label-position="right">
        <el-col :span="12">
          <el-form-item label="ID：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="图书名称：">
            <el-col :span="20">
              <el-input size="mini" placeholder="禁用半角标点符号、全角字母和全角阿拉伯数字"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="图书副名：">
            <el-col :span="20">
              <el-input size="mini" placeholder="禁用半角标点符号、全角字母和全角阿拉伯数字"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="版次：">
            <el-col :span="20">
              <el-input size="mini" placeholder="禁用半角标点符号、全角字母和全角阿拉伯数字"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="印次：">
            <el-col :span="20">
              <el-input size="mini" placeholder="禁用半角标点符号、全角字母和全角阿拉伯数字，ISBN与数字之间无冒号、空格"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="出版号：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="所属部门：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
            <el-col :span="2" class="text_blue">
              <span class="el-input__icon fa-plus-circle"></span>
            </el-col>
          </el-form-item>
          <el-form-item label="责任编辑：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="美术编辑：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
            <el-col :span="2" class="text_blue">
              <span class="el-input__icon fa-plus-circle"></span>
            </el-col>
          </el-form-item>
          <el-form-item label="是否本地上传：">
            <el-radio-group size="mini">
              <el-radio-button label="有"></el-radio-button>
              <el-radio-button label="无"></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排版单位：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
            <el-col :span="2" class="text_blue">
              <span class="el-input__icon fa-plus-circle"></span>
            </el-col>
          </el-form-item>
          <el-form-item label="制作单位：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
            <el-col :span="2" class="text_blue">
              <span class="el-input__icon fa-plus-circle"></span>
            </el-col>
          </el-form-item>
          <el-form-item label="质检员：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="运营编辑：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="版权经理：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="创建者：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="更新者：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="备注：">
            <el-col :span="20">
              <el-input type="textarea" :rows="5"></el-input>
            </el-col>
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

      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .book_baseinfo .el-form-item{
    margin-bottom: 2px;
  }
</style>
