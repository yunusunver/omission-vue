<template>
  <v-row>
    <v-col cols="12">
      <base-loader v-if="isLoading"> </base-loader>
      <v-simple-table v-if="!isLoading">
        <template v-slot:default>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in programmingLanguages" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.orderId }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>

import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { components } from "./sections/components";
export default {
  data() {
    return data;
  },
  methods: methods,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  },
  mounted() {
    this.getCategories();
  },
  components: components,
};
</script>