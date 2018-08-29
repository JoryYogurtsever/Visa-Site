<template>
  <div>
    <hero-image chosenPicture="SearchBackground.jpg"></hero-image>
    <section class="introduction">
      <p> We hope to have our search feature up and running in the coming months. At this point it is
      not ready, please refer to the browse section. Thank you and have a great day!
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
</style>
