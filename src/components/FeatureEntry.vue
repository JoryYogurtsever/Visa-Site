<template>
  <div>
      <div class="feature-entry" :id="something" :class="{onDisplayMid: isSelectedMid,
      onDisplayLeft: isSelectedLeft, onDisplayRight: isSelectedRight}"
       @mouseenter="selector()" @mouseleave="deSelector(); isSelectedMid = false,
        isSelectedLeft = false, isSelectedRight = false">
        <img class="thumbnail" :src="`/static/${image}`"
             :class="{obscure: isSelectedLeft || isSelectedMid || isSelectedRight}">
          <div class="info-panel" v-if="isSelectedLeft || isSelectedMid || isSelectedRight">
            <div class="info-list"> <h4 id="nationTitle"> {{ entry.Nation }} </h4>
              <p class="nationText"> {{ entry.text }}</p>
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
      something: this.baseId + this.index
    }
  },
  props: ['entry', 'index', 'baseId'],
  methods: {
    selector () {
      if (this.index === 0) {
        this.isSelectedLeft = true
      } else if (this.index === 1) {
        this.isSelectedMid = true
        document.getElementById(`${this.baseId}2`).setAttribute('class', 'leftyTighty')
      } else if (this.index === 2) {
        this.isSelectedRight = true
        document.getElementById(`${this.baseId}1`).setAttribute('class', 'middleTighty')
      }
    },
    deSelector () {
      if (this.index === 1) {
        document.getElementById(`${this.baseId}2`).removeAttribute('class')
        document.getElementById(`${this.baseId}2`).setAttribute('class', 'feature-entry')
      } else if (this.index === 2) {
        document.getElementById(`${this.baseId}1`).removeAttribute('class')
        document.getElementById(`${this.baseId}1`).setAttribute('class', 'feature-entry')
      }
    }
  },
  created () {
    this.image = this.entry.Image
  }
}

</script>

<style>
  #nationTitle {
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
  }
  .onDisplayLeft {
    width: 66%;
  }
  .onDisplayMid {
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
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 20px;
  }

  .info-panel {
    opacity: 1;
    position: absolute;
    top: 6%;
    text-align: center;
    z-index: 4;
  }
  .nationText {
    padding: 10%;
  }

  .obscure {
    opacity: 0.3;
  }
</style>
