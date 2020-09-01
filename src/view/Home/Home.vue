<template>
  <v-app id="inspire">
    <!-- Navigation Drawer  -->
    <navigation-drawer :items="items" :drawer="drawer"   > </navigation-drawer>
    
    <!-- App Bar -->
    <app-bar @toggleDrawer="drawer=!drawer"  > </app-bar>
   
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import {data} from "./sections/data";
import {props} from "./sections/props";
import {components} from "./sections/components";

export default {
  
  data(){
    return data
  },
  props:props,
  components:components
};
</script>
