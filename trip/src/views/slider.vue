<template>
  <div>슬라이더 구현</div>
  <ul>
    <li id="image_list" v-for="images in image" :key="images">
      <img :src="images" alt="" />
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      image: ["./모코코.png"],
    };
  },
  methods: {},
};
</script>

<style>
#image_list {
  display: flex;
}
</style>
