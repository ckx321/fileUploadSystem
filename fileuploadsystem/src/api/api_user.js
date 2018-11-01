/**
 * Created by jerry on 2017/11/13.
 * 用户相关api
 */
import * as API from './index'

export default {
  // 登录
  login: params => {
    return API.POST('/api/v1/users/login', params)
  },
  // 登出
  logout: params => {
    return API.GET('/api/v1/users/logout', params)
  },
  // 找回密码
  resetPwd: params => {
    return API.PATCH('/api/v1/users/profile', params)
  },

  // 查询获取user列表(通过page分页)
  findList: params => {
    return API.GET('/api/v1/users', params)
  }
}
