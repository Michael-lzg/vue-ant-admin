<template>
  <div>
    <div class="crop-demo">
      <img :src="activeImg" class="pre-img" width="85" height="85">
      <span class="crop-demo-btn">选择图片
        <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage($event)" />
      </span>
    </div>

    <a-modal title="裁剪图片" :visible="dialogVisible" width="30%" @cancel="cancel" @ok="dialogVisible = false">
      <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
    </a-modal>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
  data () {
    return {
      // defaultImg: require('../assets/img/kobe.jpg'),
      activeImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      dialogVisible: false,
      imgSrc: ''
    }
  },
  components: { VueCropper },
  methods: {
    setImage (e) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        this.dialogVisible = true
        this.imgSrc = event.target.result
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result)
      }
      reader.readAsDataURL(file)
    },
    cropImage () {
      this.activeImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    cancel () {
      this.dialogVisible = false
      this.activeImg = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  },
  created () {
    // this.activeImg = this.defaultImg
  }
}
</script>

<style scoped>
.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
}
.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
