<template>
  <div>
    <hero-image chosenPicture="DNBackground.jpg"></hero-image>
    <section class="introduction">
      <h3 class="section-title"> So here's the thing </h3>
      <p>
      At the moment I don't know a lot about this industry. As you can see I am trying to kick my foot in the
      door of the web development world. Although I can't say too much I do think this is worth persuing and I will update
      this page when I have some personal experience to add. Computer programming is one of the largest industries in the DN
      world but there is room for any job that can be done from another country. Many people are answering phones, working as
      remote assistants and teaching online in order to live the Digital Nomad lifestyle.
      </p>
    </section>

  </div>
</template>

<script>
import topHeader from './topHeader.vue'
import heroImage from './HeroImage.vue'

export default {
  components: {
    topHeader,
    heroImage
  }
}
</script>

<style>
  .introduction {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    padding: 2% 5%;
    text-decoration: none;
    line-height: 1.5em;
  }
  .introduction .section-title {
    font-size: 2em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
  }
</style>
