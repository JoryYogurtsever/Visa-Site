<template>
  <div>
    <hero-image chosenPicture="SearchBackground.jpg"></hero-image>
    <section class="introduction">
      <p> Welcome to Wanderlust Visa Information Centre. The purpose of this website is two-fold
        we intend to make best efforts to centralize information about visa policies around the World.
        We are not interested on whether or not visa free entry is posible, this can be found in a concise
        collection on websites like wikipedia. Our goal is to inform on longer term visa and visa extensions.
        We also aim to provide information to those wishing to start living and/or working abroad. See the
        guides section as a jump-off point into the global world. One final note, despite our best efforts there
        is absolutely no guarentee the information on this website is up to date, before making any decisions
        be sure to contact the appropriate embassies. Good luck and happy travels! </p>
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
