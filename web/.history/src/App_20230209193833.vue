<template>
  <div>Bot昵称: {{ bot_name }}</div>
  <div>Bot战力: {{ bot_rating }}</div>
  <router-view />
</template>

<script>
import $ from "jquery";
import { ref } from "vue";

export default {
  name: "App",
  setup: () => {
    let bot_name = ref("");
    let bot_rating = ref("");

    return {
      bot_name,
      bot_rating,
    };
  },
};
</script>

<style></style>
