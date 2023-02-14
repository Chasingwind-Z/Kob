<template>
  <ContentField> 对局列表 </ContentField>
</template>

<script>
import ContentField from "../../components/ContentField.vue";
import { useStore } from "vuex";
import $ from "jquery";

export default {
  components: {
    ContentField,
  },
  setup() {
    const store = useStore();
    let current_page = 1;

    const pull_page = (page) => {
      current_page = page;
      $.ajax({
        url: "http://127.0.0.1:3000/record/getlist/",
        data: {
          page,
        },
        type: "get",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        },
      });
    };
    pull_page(current_page);
  },
};
</script>

<style scoped></style>
