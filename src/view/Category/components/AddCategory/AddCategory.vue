<template>
  <v-row>
    <v-col md="6" lg="6" xl="6">
      <form>
        <v-text-field
          v-model="lookupPost.name"
          :error-messages="nameErrors"
          :label="$t('category.labels.name')"
          required
          @input="$v.lookupPost.name.$touch()"
          @blur="$v.lookupPost.name.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="lookupPost.type"
          :error-messages="typeErrors"
          :label="$t('category.labels.type')"
          required
          @input="$v.lookupPost.type.$touch()"
          @blur="$v.lookupPost.type.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="lookupPost.orderId"
          :error-messages="orderIdErrors"
          :label="$t('category.labels.orderId')"
          required
          @input="$v.lookupPost.orderId.$touch()"
          @blur="$v.lookupPost.orderId.$touch()"
        ></v-text-field>

        <v-row align="center" justify="center">
          <v-btn color="success" :loading="loading" @click="addCategory()">
            <span > {{$t("category.buttons.add")}}  </span>
          </v-btn>

          <v-btn @click="clearForm()"> {{$t("category.buttons.clear")}} </v-btn>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import { RoutePaths, Storages } from "../../../../utility/const";
import { data } from "../../components/AddCategory/sections/data";
import { methods } from "../../components/AddCategory/sections/methods";
import { validations } from "../../components/AddCategory/sections/validations";
import { computed } from "../../components/AddCategory/sections/computed";
export default {
  data() {
    return data;
  },
  methods: methods,
  validations: validations,
  computed:computed,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  }
};
</script>
