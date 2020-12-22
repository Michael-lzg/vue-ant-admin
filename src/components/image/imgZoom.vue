<template>
  <div>
    <img-zoom :src="smallImg" width="150" height="100" :bigsrc="smallImg" :configs="configs"></img-zoom>
  </div>
</template>

<script>
import imgZoom from 'vue2.0-zoom'
export default {
  components: { imgZoom },
  data () {
    return {
      smallImg: require('../../assets/img/kobe.jpg'),
      configs: {
        width: 500,
        height: 300,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: 'red',
        maskOpacity: 0.2
      }
    }
  }
}
</script>
