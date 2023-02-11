<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import $ from "jquery";

export default {
  components: {
    NavBar,
  },
  // setup() {
  //   // $.ajax({
  //   //   url: "http://127.0.0.1:3000/user/account/token/",
  //   //   type: "post",
  //   //   data: {
  //   //     username: "zzf",
  //   //     password: "421",
  //   //   },
  //   //   success(resp) {
  //   //     console.log(resp);
  //   //   },
  //   //   error(resp) {
  //   //     console.log(resp);
  //   //   },
  //   // });

  //   // $.ajax({
  //   //   url: "http://127.0.0.1:3000/user/account/info/",
  //   //   type: "get",
  //   //   headers: {
  //   //     Authorization:
  //   //       "Bearer " +
  //   //       "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMzQ0YTdjNDc0NjA0MTIxOTZjNzU0OWI2MmFkZTE0ZiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3NjExNTQ4NiwiZXhwIjoxNjc3MzI1MDg2fQ.cSo3EncDXiH0VdM96fUUHuyAnPUyM25e26qiGZAk1eY",
  //   //   },
  //   //   success(resp) {
  //   //     console.log(resp);
  //   //   },
  //   //   error(resp) {
  //   //     console.log(resp);
  //   //   },
  //   // });

  //   // $.ajax({
  //   //   url: "http://127.0.0.1:3000/user/account/register/",
  //   //   type: "post",
  //   //   data: {
  //   //     username: "qqq",
  //   //     password: "aaaa",
  //   //     confirmedPassword: "aaa",
  //   //   },
  //   //   success(resp) {
  //   //     console.log(resp);
  //   //   },
  //   //   error(resp) {
  //   //     console.log(resp);
  //   //   },
  //   // });
  // },
};
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
