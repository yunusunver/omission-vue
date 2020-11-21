<template>
  <v-col cols="12">
    <base-loader v-if="isLoading"> </base-loader>
    <v-simple-table v-if="!isLoading">
      <template v-slot:default>
        <thead>
          <tr>
            <th>{{ $t("category.table.columns.name") }}</th>
            <th>{{ $t("category.table.columns.type") }}</th>
            <th>{{ $t("category.table.columns.orderId") }}</th>
            <th>{{ $t("category.table.columns.actions") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in programmingLanguages" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.orderId }}</td>
            <td>
              <v-btn
                class="mx-2"
                @click="editCategory(item.id)"
                :title="$t('actions.update')"
                fab
                x-small
                color="primary"
              >
                <v-icon> mdi-table-edit </v-icon>
              </v-btn>

              <v-btn
                class="mx-2"
                :title="$t('actions.remove')"
                @click="deleteCategory(item)"
                fab
                x-small
                color="error"
              >
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row justify="end">
      <v-col cols="1" class="mt-3">
        <v-select
          v-model="limit"
          :items="pageList"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-container class="max-width">
          <v-pagination
            v-model="selectedPage"
            @next="getCategories()"
            @previous="getCategories()"
            @input="getCategories()"
            circle
            class="my-4"
            :length="pageLength"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { components } from "./sections/components";
import { watch } from "./sections/watch";
import { Storages } from "../../../../utility/const";
export default {
  data() {
    return data;
  },
  methods: methods,
  watch: watch,
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