
const menu = [
  {
    title: '系统首页',
    key: 'index',
    children: [
      {
        key: 'adminIndex',
        title: '我的简介'
      },
      {
        key: 'artical',
        title: '我的文章'
      }
    ]
  },
  {
    title: '基础组件',
    key: 'base',
    children: [
      {
        key: 'table',
        title: '列表数据'
      },
      {
        key: 'form',
        title: '基础表单'
      },
      {
        key: 'linkage',
        title: '三级联动'
      },
      {
        key: 'drag',
        title: '拖拽列表'
      },
      {
        key: 'tree',
        title: '树形组件'
      },
      {
        key: 'org',
        title: '组织架构'
      }
    ]
  },
  {
    key: 'file',
    title: '文件相关',
    children: [
      {
        key: 'upload',
        title: '文件上传'
      },
      {
        key: 'excel',
        title: '导出excel'
      },
      {
        key: 'pdf',
        title: 'PDF预览'
      },
      {
        key: 'editor',
        title: '富文本编辑'
      },
      {
        key: 'Markdown',
        title: 'Markdown编辑'
      }
    ]
  },
  {
    key: 'pic',
    title: '图片相关',
    children: [
      {
        key: 'preview',
        title: '图片预览'
      },
      {
        key: 'swiper',
        title: '图片特效'
      }
    ]
  },
  {
    key: 'chart',
    title: '可视化',
    children: [
      {
        key: 'charts',
        title: 'charts图表'
      },
      {
        key: 'map',
        title: '高德地图'
      },
      {
        key: 'ChinaMap',
        title: '中国地图'
      }
    ]
  }
]

export { menu }