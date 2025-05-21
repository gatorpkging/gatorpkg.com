<script setup>
import MemberComponent from '@/components/MemberComponent.vue';
import JumbotronComponent from '@/components/JumbotronComponent.vue';
</script>

<template>
  <div id="app">

    <JumbotronComponent Title="Our Team" Description="The Students and Mentors that make up the Robotics Team." />

    <div class="team">
      <MemberComponent Name="Carrie Dadey" Role="Coach" Image="/images/user-solid.svg" Description=""
        class="scale-60" />
      <MemberComponent Name="Tristan Chapman" Role="Team Capitan" Image="/images/people/tristan-chapman.jpg"
        Description="" class="scale-60" />
      <MemberComponent Name="Dilansh Tiwari" Role="E-Board" Image="/images/people/dilansh-tiwari.jpg"
        Description="Dilansh is one of the many significant assets of the WIHI RoboWolves. He is dedicated to seeing his team's success and is a build team member. He also takes part in other extracurriculars like cricket and Student Government."
        class="scale-60" />
      <MemberComponent Name="Haashir Ahmed" Role="E-Board" Image="/images/people/haashir-ahmed.jpg"
        Description="Haashir is a diligent hard-worker, dedicated to inspiring his fellow members to success. With experience in programming and robotics competitions, Haashir uses his knowledge and leadership to guide the team to victory."
        class="scale-60" />
      <MemberComponent Name="Alexa Jacob" Role="E-Board" Image="/images/people/alexa-jacob.jpg"
        Description="My name's Alexa Jacob and a sophomore in high school. I'm interested in robotics cause I like to discover and understand new technology! I work on the business side of our team off season and mechanical building in season."
        class="scale-60" />
      <MemberComponent Name="Aydin Akhoon" Role="E-Board" Image="/images/people/aydin-akhoon.jpg"
        Description="⁤Aydin is a proactive and dedicated individual who strives for excellence in every endeavor. ⁤⁤As a key member of the WIHI Robowolves leadership team, his passion for science fuels his commitment to applying research, engineering, and teamwork skills, driving success for him and his team."
        class="scale-60" />
    </div>
  </div>
</template>

<style>
.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.scale-100 img {
  scale: 1;
  object-fit: contain;
}

.scale-90 img {
  scale: 0.9;
  object-fit: contain;
}

.scale-80 img {
  scale: 0.8;
  object-fit: contain;
}

.scale-70 img {
  scale: 0.7;
  object-fit: contain;
}

.scale-60 img {
  scale: 0.6;
  object-fit: contain;
}

.scale-50 img {
  scale: 0.5;
  object-fit: contain;
}

.scale-40 img {
  scale: 0.4;
  object-fit: contain;
}

.scale-30 img {
  scale: 0.3;
  object-fit: contain;
}

.scale-20 img {
  scale: 0.2;
  object-fit: contain;
}

.scale-10 img {
  scale: 0.1;
  object-fit: contain;
}
</style>
