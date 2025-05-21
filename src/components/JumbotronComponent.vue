<script>
export default {
  name: "JumbotronComponent",
  props: {
    Title: String,
    Description: String,
    HasImage: Boolean,
    HasButton: Boolean,
    Image: String,
    Button: String,
    Link: String
  }
};
</script>

<template>
  <div class="jumbotron">
    <h2>{{ Title }}</h2>
    <p>{{ Description }}</p>
    <img v-if="HasImage" :src="Image" alt="Jumbotron Image" />
    <button v-if="HasButton" @click="$router.push(Link)">{{ Button }}</button>
  </div>
</template>


<style scoped>
.jumbotron {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  border: 2px solid #384046;
  border-radius: 10px;
  padding: 30px;
  padding-top: 20px;
  background-color: #2A3035;
  width: calc(100vw - 100px);
  max-width: calc(100vw - 450px);
  min-width: 700px;
  margin: 30px;
  margin-top: 10px;
}

.jumbotron h2 {
  font-size: 50px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 300;
  line-height: normal;
  text-align: center;
}

.jumbotron p {
  margin-top: -10px;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
}

.jumbotron img {
  border-radius: 20px;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.jumbotron button {
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #384046;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.jumbotron button:hover {
  background-color: #4d565d;
}
</style>
