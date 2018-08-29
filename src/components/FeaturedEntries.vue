<template>
  <div :id="this.id" class="lovelyClass">
    <h3> {{ entry.title }}</h3>
    <div class="introduction"> {{ entry.Intro }}</div>
    <!--feature-entry v-for="nation in entry.Nations" :entry="nation"></feature-entry-->
    <feature-entry v-for="(nation, key) in nations" :entry="nation" :index="key" :baseId="id"
    @orderChanger="orderChange()"></feature-entry>
    <div class="cf"></div>
  </div>
</template>
<script>
import featureEntry from './FeatureEntry'
export default {
  data() {
    return {
      nations: [],
    }
  },
  props: ['entry', 'id'],
  components: {
    featureEntry
  },
/*  mounted () {
    let blaghflugel = 2;
    let fuckingworkatthispoint = blaghflugel.toString();
    console.log(`${this.id} ${fuckingworkatthispoint}`);
    document.getElementById(`${this.id}${fuckingworkatthispoint}`).addEventListener('mouseenter', () => {
      //let fuckMySandwich = this.nations[1];
     // this.nations.splice(1, 1);
      document.getElementById(`${this.id}1`).setAttribute('class', 'rightyTighty');
      document.getElementById(`${this.id}0`).setAttribute('class', 'rightyTighty');
      document.getElementById(`${this.id}2`).setAttribute('class', 'rightyMighty');
      console.log('My testicles are the most lovely of testicles')
    })
  },*/
  created () {
    for (let i = 0; i < 3; i += 1) {
      this.nations.push(this.entry.Nations[i]);
      console.log(this.id.toString());
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
