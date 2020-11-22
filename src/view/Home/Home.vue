<template>
  <v-app id="inspire">
    <!-- Navigation Drawer  -->
    <navigation-drawer :items="items" :drawer="drawer"> </navigation-drawer>

    <!-- App Bar -->
    <app-bar @toggleDrawer="drawer = !drawer"> </app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
  <v-breadcrumbs :items="breadCrumbItem" divider="/" >
    <v-breadcrumbs-item  slot="item"
        slot-scope="{ item }"
        exact
        :to="item.path">{{
      item.meta.breadCrumb
    }}</v-breadcrumbs-item>
  </v-breadcrumbs>

        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { data } from "./sections/data";
import { props } from "./sections/props";
import { components } from "./sections/components";
import { RoutePaths, Storages } from "../../utility/const";

export default {
  data() {
    return data;
  },
  watch:{
    $route(){
      this.getRoute();
    }
  },
  methods: {
    getRoute() {
      this.breadCrumbItem = this.$route.matched;
      console.log(this.breadCrumbItem);
    },
  },
  props: props,
  components: components,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  },
  created(){
    this.getRoute();
  }
};
</script>

<style scoped>
.v-main {
  flex: 0 0 auto !important;
}
</style>
