<template>
  <div>
    <header class="navigation-panel">
      <ul class="page-navigation">
        <router-link tag="li" to="/"><a class="staticButton">Home</a></router-link>
        <li class="dropper target"  @mouseleave="GetStarted = false">
          <button class="drop-button staticButton" @mouseenter="GetStarted = true">Get Started <i class="fa fa-caret-down"></i>
          </button>
          <div class="drop-list" v-if="GetStarted">
            <router-link tag="a" class="drop-menu" to="Browse">Browse</router-link>
            <router-link tag="a" class="drop-menu" to="Search">Search</router-link>
          </div>
        </li>
        <li class="dropper target" @mouseleave="Guides = false">
          <button class="drop-button staticButton" @mouseenter="Guides = true"> Guides <i class="fa fa-caret-down"></i>
          </button>
          <div class="drop-list" v-if="Guides">
            <router-link tag="a" to="Study">Studying</router-link>
            <router-link tag="a" to="Teach">Teaching</router-link>
            <router-link tag="a" to="DigitalNomad">Digital Nomads</router-link>
          </div>
        </li>
        <router-link class="last-item" tag="li" to="AboutUs"><a class="staticButton">About Us</a></router-link>
      </ul>
    </header>
    <div class="cf"></div>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      Guides: false,
      GetStarted: false
    }
  }
}
</script>

<style>
  .page-navigation > li {
    float: left;
    width: 25%;
    padding-right: 10%;
    border-right: 2px solid black;
  }

  li > a {

    line-height: 2em;
    color: black;
    font-family: "Pacifico", cursive;
    text-decoration: none;
    display: block;
    float: left;
  }

  li > button {
    text-align: left;
    line-height: 2em;
    color: black;
    font-family: "Pacifico", cursive;
    text-decoration: none;
    display: block;
    float: left;
  }

  .page-navigation > li:last-child {
    border: none;
  }

  .hero-image {
    position: relative;
    width: 100%;
    padding: 10px 0px;
    z-index: -1;
  }

  .dropper {
    float: left;
    overflow: hidden;
    display: block;
  }

  .dropper .drop-button {
    /*  font-size: 17px;*/
    border: none;
    outline: none;
    color: black;
    background-color: white;
    font-family: "Pacifico", cursive;
    margin: 0;
    line-height: 2em;
    z-index: 100;
  }

  .drop-list {
    padding-top: 2em;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    min-width: 25%;
    box-shadow: 50px 50px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .drop-list a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .cf {
    clear: both;
  }
  .staticButton {
    font-size: 1.1em;
  }
</style>
