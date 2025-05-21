<script setup>
import JumbotronComponent from "@/components/JumbotronComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="The FIRST Robotics Competition (FRC)"
      Description="Our team competes in the FIRST Robotics Competition, but what exactly is that?" />

    <div class="competiton">
      <TableComponent RowCount="1" ColumnCount="1" Title="FIRST"
        Text="FIRST (For Inspiration and Recognition of Science and Technology) is a non-profit which aims to inspire young people to become leaders in STEM fields. Founded in 1989 by Dean Kamen, FIRST provides students with hands-on experience in STEM through robotics competitions and mentorship programs. Through these programs, FIRST aims to foster a passion for STEM education, promote teamwork and problem-solving skills, and develop the next generation of innovators and leaders." />
      <TableComponent RowCount="1" ColumnCount="1" Title="FRC"
        Text="FIRST Robotics Competition (FRC) is a program designed to provide high school students with the opportunity to design, build, and compete with robots. Each year, FRC releases a new game that challenges teams to build a robot that can complete various tasks and objectives. Students develop important skills in leadership, communication, and critical thinking. FRC culminates in regional and national competitions, where teams from all over the world come together to compete." />
    </div>
  </div>
</template>

<style></style>
