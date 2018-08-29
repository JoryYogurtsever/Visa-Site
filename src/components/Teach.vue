<template>
  <div>
    <hero-image chosenPicture="TeachBackground.jpg"></hero-image>
    <section class="introduction">
      <h3 class="section-title"> Introduction </h3>
      <p> So you are thinking of teaching English as a Second language? Maybe you have a friend who did a gap year teaching in
        Japan. If English is your first language, or if you were able to read the 'about us' section without using a dictionary,
        then teaching ESL may be a real option for you. Perhaps you have already starting searching for jobs online a bit and
        you were likely pummeled with hundreds of ads for TESOL certificates. Let's start with qualifications, I have been teaching
        ESL for nearly three years and I do not have a TESOL. Some jobs ask for TESOL and it's not impossible for you to be rejected
        for not having one, but that has never been my experience. I was once told I needed one for a job, but the company would
        allow me to take it while working and even offered me a discounted rate for the course (I didn't take that job). Secondly,
        if you do take TESOL do not pay hundreds of dollars, you should be able to find a 120 hour TESOL for around $50 using
        groupons or something. If you have a university degree (in anything) and are a native speaker, you can find a job without
        TESOL. If you are a near native speaker and have a degree you can find a job in most places but be weary of passport
        requirements for work visas, especially in north-east Asia.
      </p>
      <h4 class="sub-section-title">jump first and ask questions later.</h4>
      <p>  It might be nerve racking or downright terrifying, but many serious ESL companies won't
        hire teachers until they have made it through customs. Apparently the concern is that they will hire a teacher and that teacher
        will get cold feet. This is not the case everywhere, if you want to teach in China (which must be one of the world's largest
        employers) you can easily get a job before you leave home, and they will often reimburse you for your airfare as well. For
        many other nations they want to see you on the ground, and although options may be available that will hire you before you
        leave, you will generally find a better job if you are hunting from within the country. Facebook groups can be a great resource
        to get you oriented before you leave.
      </p>
      <h4  class="sub-section-title">Wages</h4>
      <p> I will try to get into this in more detail in the country profiles, but as a rule of thumb, we can lump wages into regions
        The top pay is likely in the middle east, areas like UAE, Qutar, Dubai and Saudi Arabia where you can make as much as US$4000
        per month. Second place is north-east asia, China, Japan, South Korea, Taiwan. Here you can make US$2000, maybe even up to
        $3000 in a month. In south-east asia you can expect a bit less, maybe $1500 on the high end, perhaps $1000 is more realistic.
        other areas of the middle east I would expect to be even less, I made less than 1000 working in Turkey. I think $1000 is about
        cap for most of Latin America, but I am not certain, expect lower wages little more than enough to get by day to day.
      </p>
      <h4 class="sub-section-title">Online Teaching </h4>
      <p> There are a growing number of online teaching platforms that can pay teachers a reletively handsome wage for teachings
        students in groups of no more than four. Teaching online can be done from anywhere in the world that you can get a
        decent internet connection (you will likely be required to use a hardwired connection). The titan of the online teaching
        industry is once again China, there are some options elsewhere in the world, but if you persue this career path you will
        likley be working between 6-9PM Beijing time on weekdays, and perhaps more hours on weekends. This can be an excellent job
        but be warned of a few things. The hiring process can often take nearly a month, so don't expect to start right away, further
        you may have difficulty getting students (and thus getting paid hours) for the first month of work or so, or perhaps longer
        depending on the company. Look for online reviews. Despite the relatively high hourly wages, it is unlikely you will make too
        much more than $1000 or $1500 teaching online. Also be warned, the contracts you sign with the companies are quite one sided
        if you have an issue with the employer the contract does not really hold them accountable and your only real defence is to
        publish a negative review. I don't know that anyone has won any legal action based on an online contract and it is unlikely to
        happen in China.
      </p>
      <p>
      <h4 class="sub-section-title"> Resources </h4>
      I will provide a few resorces below to help you get started in the ESL world, a few final words of advice:
      <ul class="bullets">
        <li> Be sure that teaching is something you will enjoy. It may seem like a silly thing to say
          but if you seriously dislike your job you will not really enjoy your travels. </li>
        <li> Teaching kids or adults? if you like teaching children then east asia has many opportunities
          jobs in the middle east tend to be more focused on adult learners. think about which group you
          would prefer teaching </li>
        <li> Remember settling into a new country means new bedding, kitchen ware, and a million other things
          that you probably didn't think of, like a shoe rack, make sure you have enough saved to get to the first
          paycheque. </li>
      </ul>

      include some links here!!!!!
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
  .introduction .sub-section-title {
    font-size: 1.5em;
    padding-top: 4%;
    padding-bottom: 4%;
    font-family: "Pacifico", cursive;
  }
</style>
