<template>
  <div>
    <h1> {{ region.Region }}</h1>
    <p> {{ region.regionText }}</p>
    <div v-for="(nation, key) in region.nations" @mouseenter="selected = true" @mouseleave="selected = false" class="nationHolder">
      <img
        :src="`../../static/${value[key]}`"
        class="classyImage"
       :class="{classyChoice: selected}">
      <h1 v-if="selected"> {{ nation.nation }} </h1>
      <p v-if="selected"> {{ nation.overview }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['region'],
  data() {
    return {
      selected: false,
      value: [],
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
  created () {
    for (let i = 0; i < this.region.nations.length; i += 1) {
      this.value[i] = this.imageArray[Math.floor(Math.random() * 8)];
      console.log(this.value[i]);
    }
  }
}
</script>

<style>
  .classyImage {
    width: 40%;
    border-radius: 30px;
    border: 2px solid navy;
  }
  .classyChoice {
    opacity: 0.3;
  }
  .nationHolder {
    float: left;
    position: relative
  }
</style>
