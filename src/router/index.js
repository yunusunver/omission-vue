import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "../view/Login/Login.vue";
import Home from "../view/Home/Home.vue";
import ListCode from "../view/Code/components/ListCode/ListCode.vue";
import AddCode from "../view/Code/components/AddCode/AddCode.vue";
import UpdateCode from "../view/Code/components/UpdateCode/UpdateCode.vue";
import ListCategory from "../view/Category/components/ListCategory/ListCategory.vue";
import AddCategory from "../view/Category/components/AddCategory/AddCategory.vue";
import UpdateCategory from "../view/Category/components/UpdateCategory/UpdateCategory.vue";
import Profile from "../view/User/Profile.vue";
import { RoutePaths } from "../utility/const";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      meta: { breadCrumb: "Ana Sayfa" },
      children: [
        {
          path: RoutePaths.ListCodes.path,
          name: RoutePaths.ListCodes.name,
          alias: RoutePaths.ListCodes.alias,
          component: ListCode,
          meta: { breadCrumb: "Kod Listele" },
        },
        {
          path: RoutePaths.AddCode.path,
          name: RoutePaths.AddCode.name,
          alias: RoutePaths.AddCode.alias,
          component: AddCode,
          meta: { breadCrumb: "Kod Ekle" },
        },
        {
          path: RoutePaths.UpdateCode.path,
          name: RoutePaths.UpdateCode.name,
          alias: RoutePaths.UpdateCode.alias,
          component: UpdateCode,
          meta: { breadCrumb: "Kod Güncelle" },
        },
        {
          path: RoutePaths.ListCategory.path,
          alias: RoutePaths.ListCategory.alias,
          component: ListCategory,
          name: RoutePaths.ListCategory.name,
          meta: { breadCrumb: "Kategori Listele" },
        },
        {
          path: RoutePaths.AddCategory.path,
          name: RoutePaths.AddCategory.name,
          alias: RoutePaths.AddCategory.alias,
          component: AddCategory,
          meta: { breadCrumb: "Kategori Ekle" },
        },
        {
          path: RoutePaths.UpdateCategory.path,
          name: RoutePaths.UpdateCategory.name,
          alias: RoutePaths.UpdateCategory.alias,
          component: UpdateCategory,
          meta: { breadCrumb: "Kategori Güncelle" },
        },

        {
          path: RoutePaths.MyProfile.path,
          name: RoutePaths.MyProfile.name,
          alias: RoutePaths.MyProfile.alias,
          component: Profile,
          meta: { breadCrumb: "Profil" },
        },
      ],
    },
    {
      path: RoutePaths.Login.path,
      alias: RoutePaths.Login.alias,
      name: RoutePaths.Login.name,
      component: Login,
    },
  ],
  mode: "history",
});

export default router;
