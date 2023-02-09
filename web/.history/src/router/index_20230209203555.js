import { createRouter, createWebHistory } from "vue-router";
import PkIndexView from "../views/pk/PkIndexView";
import RecordIndexView from "../views/record/RecordIndexView";
import RanklistIndexView from "../views/ranklist/RanklistIndexView";
import UserBotIndexView from "../views/user/bot/UserBotIndexView";
import NotFound from "../views/error/NotFound";

const routes = [
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
