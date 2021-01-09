<template>
  <div class="socials">
    <ul>
      <li>
        <a :href="`https://www.instagram.com/${IGUrl}`"
          ><i :class="`ico ${IGIcon}`"></i
        ></a>
      </li>
      <li>
        <a :href="`https://www.twitter.com/${TwitterUrl}`"
          ><i :class="`ico ${TwitterIcon}`"></i
        ></a>
      </li>
      <li>
        <a :href="`https://www.snapchat.com/${SnapChatUrl}`"
          ><i :class="`ico ${SnapChatIcon}`"></i
        ></a>
      </li>
      <li>
        <a :href="`${EmailUrl}`"><i :class="`ico ${EmailIcon}`"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Socials",
  props: {
    IGUrl: String,
    IGIcon: String,
    TwitterUrl: String,
    TwitterIcon: String,
    SnapChatUrl: String,
    SnapChatIcon: String,
    EmailUrl: String,
    EmailIcon: String,
  },
};
</script>

<style scoped>
.ico {
  font-size: 1.9rem;
  border-radius: 5px;
  padding: 0.3rem;
  color: #c43b6d;
  background: white;
}
.socials {
  position: absolute;
  right: 0;
  bottom: 33%;
}
.nav {
  display: flex;
  justify-content: center;
}

li {
  margin: 2rem 1rem;
}
</style>
