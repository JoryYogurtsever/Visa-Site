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
     <div class="btn-holder"><button class="btn"> Africa </button></div>
     <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> Asia </button></div>
     <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> Caribbean </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> Europe </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> North-America </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> South-America </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> Oceania </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
       <div class="btn-holder"><button class="btn"> Alphabetical </button></div>
       <div class="hole-holder"><div class="hole"></div></div>
   </div>
    <div>

    </div>
    <button @click="hereWEGo()"> here we go!</button>
  </div>
</template>

<script>
import topHeader from './topHeader.vue'
import heroImage from './HeroImage.vue'

export default {
  data: () => {
    return {
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
  components: {
    topHeader,
    heroImage
  },
  methods: {
    hereWEGo() {
      this.$http.get('https://vuejs-http-96a4b.firebaseio.com/Asia.json', (response) => {
        console.log(response)
      })
    }
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
