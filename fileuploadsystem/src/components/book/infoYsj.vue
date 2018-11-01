<template>
  <div class="book_ysj common_pannel">
    <!-- 元数据 -->
    <!-- 工价计算 -->
    <el-row>
      <el-col :span="3" class="text_right pr20">
        <h3>图书元数据</h3>
      </el-col>
    </el-row>
    <el-row>
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
          <el-form-item label="图书名称（英文）：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="图书副名（英文）：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="出版机构：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="出版地：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="出版日期">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="印刷日期">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="版次：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="印次：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="出版号：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="作者：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="作者简介：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="著作方式：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="其他作者：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="其他作者简介：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="其他作者著作方式：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="是否有电子版权：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="电子版权到期日期：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="纸质书价格：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="电子书价格：">
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
          <el-form-item label="读者对象：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="ID：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="上架建议：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="页数：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="字数：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="开本：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="GIP主题词：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="内容简介：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="丛书名称：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="丛书责任者：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="丛书著作方式：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="中国法分类号：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="中国法分类：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="新书核准号：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="数据来源：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="封面：">
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
          </el-form-item>
          <el-form-item label="排版单位：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="制作单位：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
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
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="备注：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="正文用纸：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="装帧：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="包册：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="首印数：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
          <el-form-item label="单位印章：">
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
            <el-col :span="2" class="text_center">
              <span class="text_danger">*</span>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="开本：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="目录：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="广告语：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="编辑推荐：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="媒体评论：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="书摘：">
            <el-col :span="22">
              <el-input size="mini"></el-input>
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
  .book_ysj .el-form-item{
    margin-bottom: 2px;
  }
</style>
