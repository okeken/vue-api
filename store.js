import { reactive } from "vue";
import axios from "axios";

const apiUrl = process.env.VUE_APP_API_URL;

const state = reactive({
  data: {},
  loading: null,
  error: false,
});

export const userApiCall = () => {
  const url = "https://hirng-x2021.glitch.me/api";
  state.loading = true;
  axios
    .get(url)
    .then(rt => (state.data = rt.data))
    .then(d => (state.loading = false))
    .then(tr => console.log(url))
    .catch(e => {
      state.error = true;
      state.loading = false;
    });
  return {
    state,
  };
};
