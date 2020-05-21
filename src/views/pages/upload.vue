<template>
  <div class="upload clearfix">
    <div class="item">
      <div class="tips">用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失</div>
      <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card" :file-list="fileList" @preview="handlePreview" @change="handleChange">
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="previewVisible = false">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>

    <div class="item">
      <vueCropper></vueCropper>
    </div>
  </div>
</template>
<script>
import vueCropper from '../../components/vue-cropper'

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
export default {
  components: { vueCropper },
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error'
        }
      ]
    }
  },
  methods: {
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>
<style lang="less" scoped>
.upload {
  padding: 24px;
}
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
