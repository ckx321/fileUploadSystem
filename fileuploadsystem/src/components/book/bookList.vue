<template>
  <div class="common_pannel mt20">
    <el-row class="clearb">
      <div class="fl">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">刷新</el-button>
      </div>
      <div class="fr">
        <el-button type="primary" size="mini">导出营销数据</el-button>
        <el-button type="primary" size="mini">模块下载</el-button>
        <el-button type="primary" size="mini">批量导入</el-button>
        <el-button type="primary" size="mini">批量导出</el-button>
      </div>
    </el-row>
    <el-row class="pt20 pb20">
      <span>显示</span>
      <el-select size="mini" class="wd60" placeholder="10">
        <el-option label="10" value="10"></el-option>
        <el-option label="20" value="20"></el-option>
        <el-option label="30" value="30"></el-option>
      </el-select>
      <span>项结果</span>
    </el-row>
    <el-row>
      <el-table :data="tableData" border size="small" >
        <el-table-column type="selection" label="全选" width="80" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column label="图书名称" align="center">
          <template slot-scope="scope">
            <router-link to="/book/detail">{{scope.row.bookname}}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" align="center"></el-table-column>
        <el-table-column prop="bumen" label="所属部门" align="center"></el-table-column>
        <el-table-column prop="zrbj" label="责任编辑" align="center"></el-table-column>
        <el-table-column prop="msbj" label="美术编辑" align="center"></el-table-column>
        <el-table-column prop="pbdw" label="排版单位" align="center"></el-table-column>
        <el-table-column prop="zjy" label="质检员" align="center"></el-table-column>
        <el-table-column prop="yxbj" label="运行编辑" align="center"></el-table-column>
        <el-table-column prop="jiage" label="价格" align="center"></el-table-column>
        <el-table-column prop="zt" label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.cz ==1" @click="handleClick(scope.row.zt)" class="text_primary">编辑中</span>
            <span v-if="scope.row.cz ==2" @click="handleClick(scope.row.zt)" class="text_primary">待质检</span>
            <span v-if="scope.row.cz ==3" @click="handleClick(scope.row.zt)" class="text_primary">未通过</span>
          </template>
        </el-table-column>
        <el-table-column prop="cz" label="操作" align="center">
          <template slot-scope="scope">
            <el-button v-if="scope.row.cz ==1" @click="handleClick(scope.row.cz)" type="text" size="small">编辑</el-button>
            <el-button v-if="scope.row.cz ==2" @click="handleClick(scope.row.cz)" type="text" size="small">提交</el-button>
            <el-button v-if="scope.row.cz ==3" @click="handleClick(scope.row.cz)" type="text" size="small">通过</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <ckx-pagination></ckx-pagination>
  </div>
</template>

<script>
import pagination from '../common/pagination.vue'

export default {
  data () {
    return {
      tableData: [{
        id: '12121122',
        bookname: '书籍名称测试',
        author: '测试作者',
        bumen: '测试部门',
        zrbj: '测试责任',
        msbj: '测试责任',
        pbdw: '测试责任',
        zjy: '测试责任',
        yxbj: '测试责任',
        jiage: '测试责任',
        zt: '1',
        cz: '2'
      }, {
        id: '12121122',
        bookname: '书籍名称测试',
        author: '测试作者',
        bumen: '测试部门',
        zrbj: '测试责任',
        msbj: '测试责任',
        pbdw: '测试责任',
        zjy: '测试责任',
        yxbj: '测试责任',
        jiage: '测试责任',
        zt: '2',
        cz: '3'
      }, {
        id: '12121122',
        bookname: '书籍名称测试',
        author: '测试作者',
        bumen: '测试部门',
        zrbj: '测试责任',
        msbj: '测试责任',
        pbdw: '测试责任',
        zjy: '测试责任',
        yxbj: '测试责任',
        jiage: '测试责任',
        zt: '3',
        cz: '1'
      }, {
        id: '12121122',
        bookname: '书籍名称测试',
        author: '测试作者',
        bumen: '测试部门',
        zrbj: '测试责任',
        msbj: '测试责任',
        pbdw: '测试责任',
        zjy: '测试责任',
        yxbj: '测试责任',
        jiage: '测试责任',
        zt: '1',
        cz: '1'
      }, {
        id: '12121122',
        bookname: '书籍名称测试',
        author: '测试作者',
        bumen: '测试部门',
        zrbj: '测试责任',
        msbj: '测试责任',
        pbdw: '测试责任',
        zjy: '测试责任',
        yxbj: '测试责任',
        jiage: '测试责任',
        zt: '2',
        cz: '1'
      }]
    }
  },
  components: {
    'ckx-pagination': pagination
  }
}
</script>

<style scoped>

</style>
