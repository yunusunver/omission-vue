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
import { RoutePaths } from "../utility/const";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        { path: RoutePaths.ListCodes.path, name: RoutePaths.ListCodes.name, alias: RoutePaths.ListCodes.alias, component: CodeList },
        { path: RoutePaths.AddCode.path, name: RoutePaths.AddCode.name, alias: RoutePaths.AddCode.alias, component: AddCode },
        {
          path: RoutePaths.ListCategory.path,
          alias: RoutePaths.ListCategory.alias,
          component: ListCategory,
          name: RoutePaths.ListCategory.name
        },
        { path: RoutePaths.AddCategory.path, name: RoutePaths.AddCode.name, alias: RoutePaths.AddCategory.alias, component: AddCategory },
        { path: RoutePaths.MyProfile.path, name: RoutePaths.MyProfile.name, alias: RoutePaths.MyProfile.alias, component: Profile },
      ],
    },
    { path: RoutePaths.Login.path, alias: RoutePaths.Login.alias, name: RoutePaths.Login.name, component: Login },
  ],
  mode: "history",
});

export default router;
