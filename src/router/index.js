import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "../view/Login/Login.vue";
import Home from "../view/Home/Home.vue";
import CodeList from "../view/Code/CodeList.vue";
import AddCode from "../view/Code/CodeAdd.vue";
import ListCategory from "../view/Category/ListCategory.vue";
import AddCategory from "../view/Category/AddCategory.vue";
import Profile from "../view/User/Profile.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        { path: "codelist", alias: "kod-listesi", component: CodeList },
        { path: "codeadd", alias: "kod-ekle", component: AddCode },
        {
          path: "categorylist",
          alias: "kategori-listesi",
          component: ListCategory,
        },
        { path: "categoryadd", alias: "kategori-ekle", component: AddCategory },
        { path: "myprofile", alias: "profilim", component: Profile },
      ],
    },
    { path: "/login", component: Login },
  ],
  mode: "history",
});

export default router;
