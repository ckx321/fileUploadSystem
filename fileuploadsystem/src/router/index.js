import Vue from 'vue'
import Router from 'vue-router'

// layout
import index from '@/components/index'
// home
import home from '@/components/home/home'
// user
import login from '@/components/user/login'
import resetPwd from '@/components/user/reset_pwd'
// 图书
import bookList from '@/components/book/list'
import bookDetail from '@/components/book/detail'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 找回密码
    {
      path: '/reset_pwd',
      name: 'resetPwd',
      component: resetPwd
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home', // 重定向到首页
      children: [
        // 首页
        {path: '/home', component: home, name: 'home'},
        // book
        {path: '/book', component: bookList, name: 'bookList'},
        {path: '/book/index', redirect: '/book'},
        {path: '/book/', redirect: '/book'},
        // 图书详情页
        {path: '/book/detail', component: bookDetail, name: 'bookDetail'}
      ]
    }
  ]
})
