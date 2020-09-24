<template>
  <v-col cols="4">
    <v-row   >
      <v-text-field label="Name"  v-model="lookupPost.name" prepend-icon="mdi-map-marker"></v-text-field>
      <small class="red--text" v-if="buttonIsClicked && $v.lookupPost.name.$invalid" > Name alanı zorunludur.</small>

    </v-row>

     <v-row>
      <v-text-field label="Type" v-model="lookupPost.type"   prepend-icon="mdi-map-marker"></v-text-field>
      <small class="red--text" v-if="buttonIsClicked && $v.lookupPost.type.$invalid" > Type alanı zorunludur.</small>

    </v-row>

     <v-row>
      <v-text-field label="OrderId" type="number"  v-model="lookupPost.orderId" prepend-icon="mdi-map-marker"></v-text-field>
      <small class="red--text" v-if="buttonIsClicked && $v.lookupPost.orderId.$invalid" > OrderId alanı zorunludur.</small>

    </v-row>

     <v-row>
      <v-btn color="success" :loading="loading"  @click="addCategory()"  > Add </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import { RoutePaths, Storages } from "../../utility/const";
import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { validations } from "./sections/validations";
export default {
  data(){
    return data
  },
  methods:methods,
  validations:validations,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  },
};
</script>
