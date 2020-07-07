import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/login')
    },
    {
      path: '/admin',
      component: () => import('../views/admin'),
      redirect: 'admin/adminIndex',
      children: [
        {
          path: 'adminIndex',
          meta: { title: '系统首页' },
          component: () => import('../views/pages/adminIndex')
        },
        {
          path: 'table',
          meta: { title: '列表数据' },
          component: () => import('../views/pages/table')
        },
        {
          path: 'form',
          meta: { title: '基础表单' },
          component: () => import('../views/pages/form')
        },
        {
          path: 'linkage',
          meta: { title: '三级联动' },
          component: () => import('../views/pages/linkage')
        },
        {
          path: 'drag',
          meta: { title: '拖拽列表' },
          component: () => import('../views/pages/drag')
        },
        {
          path: 'upload',
          meta: { title: '文件上传' },
          component: () => import('../views/pages/upload')
        },
        {
          path: 'excel',
          meta: { title: '导出excel' },
          component: () => import('../views/pages/excel')
        },
        {
          path: 'pdf',
          meta: { title: 'pdf预览' },
          component: () => import('../views/pages/pdf')
        },
        {
          path: 'editor',
          meta: { title: '富文本编辑' },
          component: () => import('../views/pages/editor')
        },
        {
          path: 'preview',
          meta: { title: '图片预览' },
          component: () => import('../views/pages/preview')
        },
        {
          path: 'tree',
          meta: { title: '树形组件' },
          component: () => import('../views/pages/tree')
        },
        {
          path: 'org',
          meta: { title: '组织结构' },
          component: () => import('../views/pages/org')
        },
        {
          path: 'markdown',
          meta: { title: 'markdown编辑' },
          component: () => import('../views/pages/markdown')
        },
        {
          path: 'echarts',
          meta: { title: 'echarts图表' },
          component: () => import('../views/pages/echarts.vue')
        },
        {
          path: 'bMap',
          meta: { title: '高德地图' },
          component: () => import('../views/pages/bMap.vue')
        },
        {
          path: 'ChinaMap',
          meta: { title: '中国地图' },
          component: () => import('../views/pages/ChinaMap')
        },
        {
          path: 'ChinaScatterMap',
          meta: { title: '中国散点图' },
          component: () => import('../views/pages/ChinaScatterMap')
        },
        {
          path: 'provinceMap',
          meta: { title: '省份地图' },
          component: () => import('../views/pages/provinceMap')
        },
        {
          path: 'artical',
          meta: { title: '我的文章' },
          component: () => import('../views/pages/artical')
        }
      ]
    },
    {
      path: '/pdf/download',
      meta: { title: 'pdf下载' },
      component: () => import('../components/pdfDownload')
    },
    {
      path: '/pdf/preview',
      meta: { title: 'pdf下载' },
      component: () => import('../components/pdrPreview')
    }
  ]
})

export default router
