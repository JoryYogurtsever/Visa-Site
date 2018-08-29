<template>
  <div>
    <hero-image chosenPicture="StudyBackground.jpg"></hero-image>
    <section class="introduction">
      <p>
        There are two main study abroad options that I can think of, the first is a student exchange
        program, the second is enroling in a foreign university. If you are interested in a student
        exchange program, it is best to talk to a councelor at your school. There are many different
        programs available, and availability will depend on your school. One of the largest programs
        is the Erasmus program in Europe.
      </p>
      <p>
        You can also consider studying in a university abroad. Although it is often more expensive to study
        as a non-citizen, that is not always the case. There are a good selection of schools that are cheap or
        even free for foreign students and opportunities increase at the Master's and Doctorate levels. Many
        universities offer education in English as well as the first language of the students. Some are
        entirely in English. Knowing a second language may open more doors however. Scholarships are often
        available as well, and many countries will issue a student visa if you are enrolled in courses to
        learn a second language. This also varies by nation but some have a minimum number of hours per week.
        I hope to include more infomation and resources here in a future update.
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
