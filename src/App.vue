<template>
  <div class="app">
    <fontAwesomeIcon :icon="['fas', 'robot']" />
    <Title />
    <div class="imageBg">
      <img alt="Vue logo" src="./assets/sweetrawhd.png" />
    </div>
    <Nav />
    <Socials
      :IGUrl="state.data?.social_media?.instagram"
      IGIcon="fab fa-instagram"
      :TwitterUrl="state.data?.social_media?.twitter"
      TwitterIcon="fab fa-twitter"
      :SnapChatUrl="state.data?.social_media?.snapchat"
      SnapChatIcon="fab fa-snapchat"
      :EmailUrl="state.data?.social_media?.email"
      EmailIcon="fas fa-envelope-square"
    />
  </div>
</template>

<script>
import { userApiCall } from "../store.js";
import Title from "./components/Title.vue";
import Nav from "./components/Nav.vue";
import Socials from "./components/SocialPane.vue";

export default {
  name: "App",
  components: {
    Title,
    Nav,
    Socials,
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
.app {
  color: white;
  overflow: hidden;
}

img {
  height: auto;
  width: 100%;
}
.imageBg {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 0;
  margin: auto;
  background: #c43b6d;
  max-width: 40rem;
  padding: 5rem 3rem 0rem 3rem;
}
</style>
