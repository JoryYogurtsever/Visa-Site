<template>
  <div>
      <div class="feature-entry" :id="something" :class="{onDisplayMid: isSelectedMid,
      onDisplayLeft: isSelectedLeft, onDisplayRight: isSelectedRight}"
       @mouseenter="selector()" @mouseleave="deSelector(); isSelectedMid = false,
        isSelectedLeft = false, isSelectedRight = false">
        <img class="thumbnail" :src="`/static/${image}`"
             :class="{obscure: isSelectedLeft || isSelectedMid || isSelectedRight}">
          <div class="info-panel" v-if="isSelectedLeft || isSelectedMid || isSelectedRight">
            <div class="info-list"> <h4 id="poopySuprise"> {{ entry.Nation }} </h4>
              <p class="SoSoPoopyToday"> {{ entry.text }}</p>
            </div>
          </div>
          <i class="fa fa-angle-double-right"></i>
          <a class="country-link" href="#"> View Profile </a>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      image: '',
      isSelectedLeft: false,
      isSelectedMid: false,
      isSelectedRight: false,
      flipper: 'left',
      something: this.baseId + this.index,
    }
  },
  props: ['entry', 'index', 'baseId'],
  methods: {
    selector() {
      if (this.index === 0) {
        this.isSelectedLeft = true;
        // this.$emit('orderChanger');
        console.log('Glorious Testicles!')
      } else if (this.index === 1) {
        //this.flipper = 'left';
        this.isSelectedMid = true;
        document.getElementById(`${this.baseId}2`).setAttribute('class', 'leftyTighty');
        console.log('Gently cascading Testicles!')
      } else if (this.index === 2) {
        this.isSelectedRight = true;
        document.getElementById(`${this.baseId}1`).setAttribute('class', 'middleTighty');
        console.log('the nuturing warmth of Testicles!')
      }
    },
    deSelector() {
     if (this.index === 1) {
       //this.flipper = 'left';
       //this.isSelectedMid = true;
       document.getElementById(`${this.baseId}2`).removeAttribute('class');
       document.getElementById(`${this.baseId}2`).setAttribute('class', 'feature-entry');
     }
     else if (this.index === 2) {
       document.getElementById(`${this.baseId}1`).removeAttribute('class');
       document.getElementById(`${this.baseId}1`).setAttribute('class', 'feature-entry');
     }
    }
  },
  created() {
    this.image = this.entry.Image;
    console.log(this.something);
  }
}

</script>

<style>
  #poopySuprise {
    font-size: 1.5em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
    opacity: 1;
    z-index: 10;
  }
  .feature-entry {
    width: 33%;
    padding-left: 3%;
    padding-right: 3%;
    float: left;
    padding-bottom: 1%;
    position: relative;
   /* border: 2px solid black;*/
  }
  .onDisplayLeft {
   /* opacity: 0.3;*/
    width: 66%;
/*    position: absolute;
    display: block;*/
  }
  .onDisplayMid {
   /* opacity: 0.3;*/
    width: 66%;
    display: block;
  }
  .onDisplayRight {
    width: 66%;
    position: absolute;
    right: 0;
    top: 75px;
  }
  .leftyTighty {
    width: 33%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 1%;
    padding-top: 18%;
    position: absolute;
    left: 0;
    /*top: 322px;*/
  }
  .middleTighty {
    width: 33%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 1%;
    position: relative;
    left: 0;
    top: 0;
  }
  .thumbnail {
    width: 100%;
    /*height: 200px;*/
    transition: .5s ease;
    backface-visibility: hidden;
   /* margin-left: 10%;*/
    border-radius: 20px;
  }

  .info-panel {
   /* transition: .5s ease;*/
    opacity: 1;
    position: absolute;
    top: 6%;
 /*   transform: translate(-220%, -700%);
    -ms-transform: translate(-50%, -50%);*/
    text-align: center;
    z-index: 4;
  }
  .SoSoPoopyToday {
    padding: 10%;
  }

  .obscure {
    opacity: 0.3;
  }
/*  .rightyTighty {
    float: right;
    width: 33%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 1%;
    position: relative;
    left: 0;
  }
  .rightyMighty {
    /*float: right;
    opacity: 0.3;
    width: 66%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 1%;
    position: relative;
  }*/

</style>
