<script setup>
import JumbotronComponent from "@/components/JumbotronComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Our Mission" Description="Why our club exists, what we do, and how we can do it better."
      HasButton Button="Support Our Mission" Link="/sponsorship" />

    <div class="mission">
      <TableComponent RowCount="1" ColumnCount="1" Title="Goals & Beliefs"
        Text="We believe that the future belongs to those who are curious, imaginative, and willing to embrace change. We recognize the immense potential of robotics as a transformative technology that can revolutionize industries, improve lives, and solve some of the world's most pressing challenges. Our mission is to inspire and empower the next generation of students to become creators, innovators, and problem solvers who can leverage robotics to create a better future for all." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Methods & Activities"
        Text="Our programs and events are designed to be hands-on and engaging, allowing our members to experience collaboration and innovation while developing the skills and confidence they need to succeed. Through collaboration and innovation, we aim to foster creativity and critical thinking, helping our members think outside the box and approach problems from new angles. Ultimately, our goal is to create an environment where our members share the same passion for science, technology, and engineering and to inspire students to pursue their dreams and leave a positive impact on the world. We believe that robotics can be a powerful tool for creating a better future, and we are committed to helping the next generation of students express their unique potential collaboratively to form the best robotics team in the state." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Diversity & Inclusion"
        Text="Our top priority is always to provide a welcoming and inclusive learning environment where everyone is encouraged to participate, regardless of their background or experience. We believe that diversity is a strength, and we strive to create a safe and supportive space where everyone can feel valued and respected." />
    </div>
  </div>
</template>

<style></style>
