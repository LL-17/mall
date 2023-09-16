// 路由配置
export default [
  // 重定向：访问“/”的时候立马定向到首页
  {
    path: '*',
    redirect: "/home"
  },
  // 首页城市列表页
  {
    path: '/home',
    component: () => import('@/views/Home/Home')
  },
  // 搜索页
  {
    path: '/search',
    component: () => import('@/views/Search/Search')
  }
]