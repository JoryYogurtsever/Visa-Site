<template>
  <div>
    <h1 class="section-title"> {{ region.Region }}</h1>
    <p class="introduction"> {{ region.regionText }}</p>
    <nation v-for="(nation, index) in region.nations" :region="region" :nation="nation" :index="index" class="nation"></nation>
  </div>
</template>

<script>
import nation from './Nation.vue'
export default {
  props: ['region'],
  components: {
    nation
  }
}
</script>

<style>
  .nation {
    float: left;
  }
  .section-title {
    font-size: 2em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
  }
</style>
