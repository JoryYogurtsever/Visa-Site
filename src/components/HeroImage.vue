<template>
  <div class="parallax" :style="`backgroundImage: url(./static/${chosenPicture})`">
  </div>
</template>

<script>
export default {
  props: ['chosenPicture'],
  methods: {
    imagemaker () {
      return '"' + this.chosenPicture + '"'
    }
  }
}
</script>

<style>
  .parallax {
    /* The image used */
    /*background-image: url("../assets/webpagephoto.jpg");*/

    /* Set a specific height */
    height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
