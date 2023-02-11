<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";

export default {
  components: {
    NavBar,
  },
  setup() {
    $.ajax({
      url: "http://127.0.0.1:3000/user/account/token/",
      type: "post",
      data: {
        username: "zzf",
        password: "421",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      },
    });

    $.ajax({
      url: "http://127.0.0.1:3000/user/account/info/",
      type: "get",
      headerers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYTUwZDMyZmMyODI0M2UzODU1MWEzMmE5MjQ1MmY4MyIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3NjExMTg4MiwiZXhwIjoxNjc3MzIxNDgyfQ.4wBnUGCaf_heEHvVRV13ydsCBMvrOnrYzokHqXYctLY",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      },
    });
  },
};
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
