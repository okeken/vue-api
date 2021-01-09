<template>
  <div class="socials">
    Hello world
    <a href=""> Img here </a>
  </div>
  <h1>{{ msg }}</h1>
</template>

<script>
import { userApiCall } from "../../store.js";

library.add(faUserSecret);
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { state } = userApiCall();
    return {
      state,
    };
  },
};
</script>

<style scoped>
.socioImg {
  width: 4%;
  height: auto;
}
</style>
