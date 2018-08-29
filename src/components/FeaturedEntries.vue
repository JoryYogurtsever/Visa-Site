<template>
  <div :id="this.id" class="lovelyClass">
    <h3> {{ entry.title }}</h3>
    <div class="introduction"> {{ entry.Intro }}</div>
    <feature-entry v-for="(nation, key) in nations" :entry="nation" :index="key" :baseId="id"
    @orderChanger="orderChange()"></feature-entry>
    <div class="cf"></div>
  </div>
</template>
<script>
import featureEntry from './FeatureEntry'
export default {
  data () {
    return {
      nations: []
    }
  },
  props: ['entry', 'id'],
  components: {
    featureEntry
  },
  created () {
    for (let i = 0; i < 3; i += 1) {
      this.nations.push(this.entry.Nations[i])
    }
  }
}
</script>
<style>
  .cf {
    clear: both;
  }
  .lovelyClass {
    position: relative;
  }
</style>
