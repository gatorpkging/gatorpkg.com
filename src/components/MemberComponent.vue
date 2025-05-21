<script>

export default {
  name: "MemberComponent",
  props: {
    PlaceholderImage: Boolean,
    Image: String,
    Name: String,
    Role: String,
    Description: String
  }
};

</script>

<template>
  <div class="member">
    <img v-if="PlaceholderImage" src="/src/assets/images/user-solid.svg" alt="Member Image" />
    <img v-else :src="Image" alt="Member Image" />
    <div class="text">
      <h2>{{ Name }} - {{ Role }}</h2>
      <hr />
      <p>{{ Description }}</p>
      <br />
    </div>
  </div>
</template>

<style scoped>
.member {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  border: 2px solid #384046;
  border-radius: 10px;
  height: 200px;
  width: calc(50% - 40px);
}

.member .text {
  position: relative;
  top: calc(50% - 405px);
  left: 160px;
  padding: 10px;
  width: calc(100% - 168px);
}

.member .text h2 {
  font-size: 22px;
  font-weight: 400;
  position: relative;
  margin-top: 2px;
  margin-bottom: 5px;
  text-wrap: nowrap;
  overflow: hidden;
}

.member .text p {
  font-size: 18px;
  font-weight: 300;
  color: #ADB5BD;
  overflow: scroll;
  scrollbar-width: none;
  padding: 0;
  margin-top: 5px;
  height: 130px;
}

.member img {
  position: relative;
  top: calc(50% - 150px);
  left: -39px;
  width: fit-content;
  height: 300px;
  border-radius: 10px;
}

.member .text hr,
br {
  border: #34363B 1px solid;
  width: 100%;
}
</style>
