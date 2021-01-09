<template>
  <div class="">
    <h1>
      {{ state.data.name }}
    </h1>
  </div>
</template>

<script>
import { userApiCall } from "../../store.js";

export default {
  name: "Title",

  setup() {
    const { state } = userApiCall();
    console.log(state);
    return {
      state,
    };
  },
};
</script>

<style scoped>
h1 {
  /* border: 1px solid white; */
  margin: 4rem;
  font-size: 2.7rem;
  font-weight: 300;
  letter-spacing: 1.3rem;
}
</style>
