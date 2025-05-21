<script setup>
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="The Robot"
      Description="Our robot was designed for the FIRST Robotics Competition (FRC). This page lists its components, functions, and design methodologies."
      HasButton Button="See The Robot" Link="/gallery" />

    <div class="robot">
      <h2>Making The Robot</h2>
      <TableComponent RowCount="1" ColumnCount="1" Title="Kickoff & Planning" Text="TBA" />
      <TableComponent RowCount="1" ColumnCount="1" Title="Design & Construction" Text="TBA" />
      <TableComponent RowCount="1" ColumnCount="1" Title="Programming & Competition" Text="TBA" />

      <h2>Specifications</h2>
      <TableComponent RowCount="5" ColumnCount="1" Title="Robot Specifications"
        Text="6in Mechanum Drive Wheel Base; Bumper fully surrounds the chassis and is made of 1/2in plywood and Foam Pool Noodles.; Chassis is made of 6061 and high strength 7075 aluminum.; Uses REV Robotics NEO v1.1 motors to drive and pickup/shoot.; All code is ran by a NI RoboRIO v1.0 which is a small programmable computer." />
      <TableComponent RowCount="5" ColumnCount="1" Title="Functions & Features"
        Text="Moves fast & brakes instantly with a estimated top speed of 12 mp/h.; Can move in any direction with the Mechanum Drive Base.; Can pickup and shoot foam rings.; Has a gyroscope for accurate movement and turning.; Adheres to all FRC rules and regulations" />
    </div>
  </div>
</template>

<style>
.robot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.robot h2 {
  font-size: 35px;
  text-align: center;
}
</style>
