export default {
  state: {
    id: "",
    username: "",
    photo: "",
    token: "",
    is_login: false,
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.photo = user.photo;
      state.is_login = user.is_login;
    },
    updateToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    login(context, data) {
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
    },
  },
  modules: {},
};
