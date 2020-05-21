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
      // redirect: 'admin/adminIndex',
      children: [
        {
          path: 'adminIndex',
          meta: { title: '系统首页' }
          // component: () => import('../views/pages/adminIndex')
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
