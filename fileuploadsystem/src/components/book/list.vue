<template>
  <div>
    <div>图书</div>
    <!-- 新建图书 -->
    <ckx-addbook></ckx-addbook>
    <!-- 图书列表 -->
    <ckx-booklist></ckx-booklist>
  </div>
</template>

<script>
import addBook from './addBook.vue'
import bookList from './bookList.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    'ckx-addbook': addBook,
    'ckx-booklist': bookList
  }
}
</script>

<style scoped>

</style>
