<template>
  <div class="common_pannel">
    <!-- 数字文件 -->
    <!-- 封面（缩略图） -->
    <el-row>
      <el-col :span="3" class="text_right pr20">
        <h3>封面（缩略图）</h3>
        <el-button type="primary" plain size="small">上传文件</el-button>
        <el-button type="primary" plain size="small" class="mt16">全部导出</el-button>
      </el-col>
      <el-col :span="21">
        <el-row class="common_border">
          <el-col :span="20">
            <el-table :data="tableData" border height="400">
              <el-table-column prop="a" label="序号" align="center"></el-table-column>
              <el-table-column prop="b" label="文件名" align="center"></el-table-column>
              <el-table-column prop="c" label="文件类型" align="center"></el-table-column>
              <el-table-column prop="d" label="文件大小" align="center"></el-table-column>
              <el-table-column prop="e" label="排版单位" align="center"></el-table-column>
              <el-table-column prop="f" label="创建者" align="center"></el-table-column>
              <el-table-column prop="g" label="更新着" align="center"></el-table-column>
              <el-table-column prop="h" label="创建时间" align="center"></el-table-column>
              <el-table-column prop="i" label="更新时间" align="center"></el-table-column>
              <el-table-column label="操作" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text">预览</el-button>
                  <el-button type="text">导出</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="4" class="text_center">
            <el-button type="primary" size="small" class="mt40 wd96">上移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">下移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">删除</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最顶部</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最底部</el-button><br/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="3" class="text_danger fz12 mt5">*校验规则：限XXX、XXX、XXX格式文件
      </el-col>
    </el-row>
    <!-- 扉页（缩略图） -->
    <el-row class="mt24">
      <el-col :span="3" class="text_right pr20">
        <h3>扉页（缩略图）</h3>
        <el-button type="primary" plain size="small">上传文件</el-button>
        <el-button type="primary" plain size="small" class="mt16">全部导出</el-button>
      </el-col>
      <el-col :span="21">
        <el-row class="common_border">
          <el-col :span="20">
            <el-table :data="tableData" border height="400">
              <el-table-column prop="a" label="序号" align="center"></el-table-column>
              <el-table-column prop="b" label="文件名" align="center"></el-table-column>
              <el-table-column prop="c" label="文件类型" align="center"></el-table-column>
              <el-table-column prop="d" label="文件大小" align="center"></el-table-column>
              <el-table-column prop="e" label="排版单位" align="center"></el-table-column>
              <el-table-column prop="f" label="创建者" align="center"></el-table-column>
              <el-table-column prop="g" label="更新着" align="center"></el-table-column>
              <el-table-column prop="h" label="创建时间" align="center"></el-table-column>
              <el-table-column prop="i" label="更新时间" align="center"></el-table-column>
              <el-table-column label="操作" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text">预览</el-button>
                  <el-button type="text">导出</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="4" class="text_center">
            <el-button type="primary" size="small" class="mt40 wd96">上移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">下移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">删除</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最顶部</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最底部</el-button><br/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="3" class="text_danger fz12 mt5">*校验规则：限XXX、XXX、XXX格式文件
      </el-col>
    </el-row>
    <!-- PDF文件 -->
    <el-row class="mt24">
      <el-col :span="3" class="text_right pr20">
        <h3>PDF文件</h3>
        <el-button type="primary" plain size="small">上传文件</el-button>
        <el-button type="primary" plain size="small" class="mt16">全部导出</el-button>
      </el-col>
      <el-col :span="21">
        <el-row class="common_border">
          <el-col :span="20">
            <el-table :data="tableData" border height="400">
              <el-table-column prop="a" label="序号" align="center"></el-table-column>
              <el-table-column prop="b" label="文件名" align="center"></el-table-column>
              <el-table-column prop="c" label="文件类型" align="center"></el-table-column>
              <el-table-column prop="d" label="文件大小" align="center"></el-table-column>
              <el-table-column prop="e" label="排版单位" align="center"></el-table-column>
              <el-table-column prop="f" label="创建者" align="center"></el-table-column>
              <el-table-column prop="g" label="更新着" align="center"></el-table-column>
              <el-table-column prop="h" label="创建时间" align="center"></el-table-column>
              <el-table-column prop="i" label="更新时间" align="center"></el-table-column>
              <el-table-column label="操作" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text">预览</el-button>
                  <el-button type="text">导出</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="4" class="text_center">
            <el-button type="primary" size="small" class="mt40 wd96">上移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">下移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">删除</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最顶部</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最底部</el-button><br/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="3" class="text_danger fz12 mt5">*校验规则：限XXX、XXX、XXX格式文件
      </el-col>
    </el-row>
    <!-- EPUB文件 -->
    <el-row class="mt24">
      <el-col :span="3" class="text_right pr20">
        <h3>EPUB文件</h3>
        <el-button type="primary" plain size="small">上传文件</el-button>
        <el-button type="primary" plain size="small" class="mt16">全部导出</el-button>
      </el-col>
      <el-col :span="21">
        <el-row class="common_border">
          <el-col :span="20">
            <el-table :data="tableData" border height="400">
              <el-table-column prop="a" label="序号" align="center"></el-table-column>
              <el-table-column prop="b" label="文件名" align="center"></el-table-column>
              <el-table-column prop="c" label="文件类型" align="center"></el-table-column>
              <el-table-column prop="d" label="文件大小" align="center"></el-table-column>
              <el-table-column prop="e" label="排版单位" align="center"></el-table-column>
              <el-table-column prop="f" label="创建者" align="center"></el-table-column>
              <el-table-column prop="g" label="更新着" align="center"></el-table-column>
              <el-table-column prop="h" label="创建时间" align="center"></el-table-column>
              <el-table-column prop="i" label="更新时间" align="center"></el-table-column>
              <el-table-column label="操作" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text">预览</el-button>
                  <el-button type="text">导出</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="4" class="text_center">
            <el-button type="primary" size="small" class="mt40 wd96">上移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">下移</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">删除</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最顶部</el-button><br/>
            <el-button type="primary" size="small" class="mt40 wd96">移至最底部</el-button><br/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="3" class="text_danger fz12 mt5">*校验规则：限XXX、XXX、XXX格式文件
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          a: '1',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '2',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '3',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '4',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '5',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '6',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }, {
          a: '7',
          b: '测试',
          c: '文件',
          d: '100mb',
          e: '测试',
          f: '测试',
          g: '测试',
          h: '测试',
          i: '测试'
        }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
