<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">omission</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      :label="$t('search')"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon @click="logout()">
      <v-icon>mdi-logout</v-icon>
    </v-btn>

    <v-col cols="2" style="margin-top:20px">
      <v-select :items="languages" v-model="selectedLanguage"   >
        <template v-slot:selection="{ item }">
          <img width="24" height="24" :src="getImage(item)" />
          <span class="ml-2">{{ item.name }}</span>
        </template>
        <template v-slot:item="{ item }">
          <img width="24" height="24" :src="getImage(item)" />
          <span class="ml-2">{{ item.name }}</span>
        </template>
      </v-select>
    </v-col>
  </v-app-bar>
</template>

<script>
import { Languages } from "../../../utility/const";
import { methods } from "./sections/methods";
export default {
  methods: methods,
  data() {
    return {
      languages: Languages,
      selectedLanguage:process.env.VUE_APP_I18N_LOCALE
    };
  },
  watch:{
    selectedLanguage:function (value) {
       this.$i18n.locale = value;
    }
  }
};
</script>

<style></style>
