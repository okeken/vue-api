<template>
  <div class="">
    <ul class="nav">
      <li class="navList">Home</li>
      <li class="navList">About</li>
      <li><img class="snap" alt="profile image" src="../assets/snap.PNG" /></li>
      <li class="navList">Gallery</li>
      <li class="navList">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",

  setup() {
    return {};
  },
};
</script>

<style scoped>
.snap {
  margin: 0;
  padding: 0;
  margin-left: 2rem;
  border-radius: 400px;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav li {
  text-transform: uppercase;
  margin: 2rem 4rem;
  font-size: 1.5rem;
}
</style>
