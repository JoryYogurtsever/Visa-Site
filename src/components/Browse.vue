<template>
  <div>
    <hero-image chosenPicture="BrowseBackground.jpg"></hero-image>
    <h3 class="section-title"> Browse </h3>
    <div class="introduction">If you already have something in mind this is a great place to start
    I have listed all the nations alphabetically by region so you can compare the place you are interested
    in to the others around it. If you really don't know where to start yet, then head over to the search section
    to got some ideas. Currently this site doesn't have much information listed. But feel free to take a look
    and get an idea as to what it is we are intending to do. </div>
    <div class="nav-holder">
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(1)"> Africa </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(0)"> Asia </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(3)"> Caribbean </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(2)"> Europe </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(4)"> North-America </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(5)"> South-America </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(6)"> Oceania </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
      <div class="btn-holder"><button class="btn" @click="regionLoader(7)"> Alphabetical </button></div>
      <div class="hole-holder"><div class="hole"></div></div>
    </div>
      <div v-if="alphaFlip"> This feature is not yet available </div>
    <div>
    <nationsList :region="Region" v-if="RegionClicked"></nationsList>
      <display-nation :nation="activeNation" v-if="NationClicked"></display-nation>
    </div>
  </div>
</template>

<script>
import topHeader from './topHeader.vue'
import heroImage from './HeroImage.vue'
import nationsList from './NationsList.vue'
import displayNation from './DisplayNation.vue'
import {eventBus} from '../main.js'

export default {
  data: () => {
    return {
      Region: [],
      RegionClicked: false,
      NationClicked: false,
      activeNation: [],
      nationsArray: [],
      alphaFlip: false
    }
  },
  components: {
    topHeader,
    heroImage,
    nationsList,
    displayNation
  },
  methods: {
    regionLoader (x) {
      if (x === 7) {
        this.alphaFlip = true
      } else {
        this.Region = this.nationsArray[x]
        this.RegionClicked = true
        console.log(this.Region, this.RegionClicked)
      }
      this.NationClicked = false
    }
  },
  created () {
    eventBus.$on('loadNationPage', (data, data2) => {
      this.activeNation = [data2]
      this.RegionClicked = false
      this.NationClicked = true
      console.log(data, data2)
    })
  },
  mounted () {
    this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Asia.json').then(response => {
      this.nationsArray.push(response.body)
      this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Africa.json').then(response => {
        this.nationsArray.push(response.body)
        this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Europe.json').then(response => {
          this.nationsArray.push(response.body)
          this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Caribbean.json').then(response => {
            this.nationsArray.push(response.body)
            this.$http.get('https://vuejs-http-96a4b.firebaseio.com/North America.json').then(response => {
              this.nationsArray.push(response.body)
              this.$http.get('https://vuejs-http-96a4b.firebaseio.com/South America.json').then(response => {
                this.nationsArray.push(response.body)
                this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Oceania.json').then(response => {
                  this.nationsArray.push(response.body)
                })
              })
            })
          })
        })
      })
    })
  }
}
</script>

<style>
  .section-title {
    font-size: 2em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
  }
  .introduction {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    padding: 2% 5%;
    text-decoration: none;
    line-height: 1.5em;
  }
  .btn-holder {
    float: left;
    width: 10.02%
  }
  .hole-holder {
    float: left;
    width: 2.205%
  }
  .nav-holder {
    width: 100%;
    height: 80px;
    background-image: url("../../static/buttonBackground.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .btn {
    background-color: rgba(0, 0, 0, 0);
    height: 80px;
    width:100%;
    color: white;
    font-size: 1em;
  }
  .hole {
    height: 80px;
    background-color: white;
  }
</style>
