<template>
  <div>
    <hero-image chosenPicture="ozgeimage.jpg"></hero-image>
    <section class="introduction">
      <h3 class="section-title"> About Wanderlust </h3>
      <p> We live in a quickly changing world and a world where instant access to information is becoming
        the norm rather than a novelty. We also live in a world that is rapidly becoming more
        interconnected and globalized. People are traveling more than they ever were before and visas
        are what control the flow or restriction of this human traffic.
      </p>
      <p> Searching the web for visa policies of different countries can be tedious and exhausting
        (you can safely trust me on this one). The case is much worse if you are searching for something
        abstract, an idea in your head that you want to acctualize, rather than something more tangible.
        here at wonderlust, we aim to make this process a bit easier. The aim of this website is to collect
        information by ideas and visa policies, by things like climate, history and extendability of visas.
        Here at Wanderlust we want to show you that your experiences of this world need not be limited by visa exempt
        policies of nations, but rather open your mind to what is possible if you take the time to do a bit of paperwork
      </p>
      <p>
        For those of you who thinking of diving into an adventure abroad that is something more than just a holiday, check out
        the guides section for some information and tips on a couple different ways to see the world while your life carries on.
        As for the rest of you, feel free to access the quick pop up visa profiles of countries around the world using the browse
        tab in Get Started, you can also use the search tab to give us a bit of information as to what you want and see how well
        we can do as a matchmaker between you and your dream-destination.
      </p>
    </section>
    <section class="introduction">
      <h3 class="section-title"> About <em class="bold"> Us </em> </h3>
      <p> We are a couple of kids who are now pushing thirty and seem to have got hopelessly lost out in this world.
        I have been on four different student exchanges and taught ESL for nearly three years and taught ESL online
        for over a year as well. My girlfriend has also been an English teacher for several years. We have both traveled many
        places and had more than our fair share (both good and bad) of dealing with visas in all their complexity. We are both
        currently working hard to transition in computer based jobs, myself in programming and my girlfriend in graphic design.
        I've been living abroad in four different countries in the past three years, we've also participated in workaway programs.
        We made this site to try and help people find the information they need to start exploring this world. Good luck and
        happy travels!
      </p>
    </section>
    <section class="introduction">
      <h3 class="section-title"> I can't stress this enough </h3>
      <p>
        Please understand the enormity of this task, despite my best efforts I will absolutely not be able to keep this site
        completely up to date. Wonderlust Visa is only a reference, a starting point to make bigger plans, please verify with a
        government representiive of your prospective destination before making any definitive plans. I shall do my best to keep
        this infomation current, but policies change frequently and with little notice, I will certainly fail to effectively monitor
        the entire world. If you do learn of an inacuracy on this web-page please send me an email so I can update my Information
        thank you for your interest and understanding!
      </p>
    </section>
  </div>
</template>

<script>
import heroImage from './HeroImage.vue'
import topHeader from './topHeader.vue'
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
