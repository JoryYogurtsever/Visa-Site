<template>
  <div class="featured-lists">
    <div class="featured-header">
      <h2> Today's Features </h2>
    </div>
    <ul>
      <li class="feature-article">
        <featured-entries v-for="(feature, key) in TodaysFeatures" :entry="feature" :id="'entry'+ key"></featured-entries>
      </li>
    </ul>
  </div>
</template>

<script>
import featuredEntries from './FeaturedEntries.vue'
export default {
  data: function () {
    return {
      TodaysFeatures: []
    }
  },
  methods: {
    LoadFeaturedList () {
      this.$http.get('https://vuejs-http-96a4b.firebaseio.com/FeaturedLists.json').then(response => {
        return response.json()
      }).then(data => {
        const resultArray = []
        for (let key in data.features) {
          resultArray.push(data.features[key])
        }
        this.TodaysFeatures = resultArray
      })
    }
  },
  created () {
    this.LoadFeaturedList()
  },
  components: {
    featuredEntries
  }
}
</script>
