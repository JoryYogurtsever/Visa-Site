<template>
  <div @mouseenter="selected = true" @mouseleave="selected = false" class="nationHolder" @click="loadNationPage()">
    <img
      :src="`../../static/${value}`"
      class="classyImage"
      :class="{classyChoice: selected}">
    <div class="classyText">
      <h1 v-if="selected" class="classyTitle"> {{ nation.nation }} </h1>
      <p v-if="selected" class="introduction"> {{ nation.overview }} </p>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  props: ['region', 'nation', 'index'],
  data() {
    return {
      selected: false,
      value: 0,
      imageArray: [
        'IMGP2522.jpg',
        'IMGP2580.jpg',
        'IMGP2704.jpg',
        'IMGP2759.jpg',
        'IMGP2951.jpg',
        'IMGP3051.jpg',
        'IMGP4038.jpg',
        'IMGP4148.jpg',
      ]
    }
  },
  methods: {
    loadNationPage () {
      eventBus.$emit('loadNationPage', this.region, this.nation);
    }
  },
  created () {
    this.value = this.imageArray[Math.floor(Math.random() * 8)];
    console.log(this.value);
  }
}
</script>

<style>
  .classyImage {
    width: 90%;
    border-radius: 30px;
    border: 2px solid navy;
  }
  .classyChoice {
    opacity: 0.3;
  }
  .nationHolder {
    float: left;
    position: relative;
    display: inline;
    width: 50%;
    padding-bottom: 4%
  }
  .classyText {
    position: absolute;
    top: 0;
    text-align: center;
    padding-top: 10px;
    padding-left: 7%;
    padding-right: 7%;
    width: 100%
  }
  .classyTitle {
    font-size: 1.2em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
    text-align: center;
  }
</style>
