<template>
  <div>
    <h1 class="classyTitle"> {{ nation[0].nation }}</h1>
    <p class="introduction"> {{ nation[0].overview}} </p>
    <h1 class="classyTitle"> Requirements </h1>
    <br>
      {{ nation[0].requirements }}
    <h1 class="classyTitle"> Visa Durations </h1>
    {{ nation[0].visaDurations }}
    <h1 class="classyTitle"> Visa Extensions </h1>
    {{ nation[0].visaExtension }}
  </div>
</template>

<script>
export default {
  props: ['nation']
}
</script>

<style>
  .classyTitle {
    font-size: 1.2em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
    text-align: center;
  }
</style>
