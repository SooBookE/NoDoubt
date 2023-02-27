<template>
  <!-- <div :html="frame"></div> -->
  <div v-html="video"></div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'app',
  data() {
    return {
      frame: `<iframe
      src="https://data.seoul.go.kr/SeoulRtd/"
      frameborder="0"
      width="400"
      height="400"
      ref="subWindow"
    ></iframe>`,
      video:
        '<iframe src="https://data.seoul.go.kr/SeoulRtd/" width="600" height="600" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Tr&amp;eacute;ning TEXT"></iframe>'
    }
  },
  methods: {
    someFunc() {
      var iframeWindow = this.$refs.subWindow.contentWindow
      // do with iframeWindow
    }
  }
}
</script>

<style></style>
