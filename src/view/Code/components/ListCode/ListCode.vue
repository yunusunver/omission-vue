<template>
  <v-row>
    <v-col cols="12">
      <v-row v-if="!isLoading">
        <v-col cols="3">
          <v-text-field :label="$t('search')"></v-text-field>
        </v-col>

        <v-col cols="2">
          <v-menu
            v-model="startDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                :label="$t('code.filters.startDate')"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              @input="startDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="2">
          <v-menu
            v-model="endDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                :label="$t('code.filters.endDate')"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              @input="endDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col>
          <v-btn color="primary"> {{$t('search')}}  </v-btn>
          <v-btn color="warning" class="ml-5" @click="openAddCode()"
            > {{$t('code.buttons.add')}}  </v-btn
          >
        </v-col>
      </v-row>

      <v-simple-table v-if="!isLoading">
        <template v-slot:default>
          <thead>
            <tr>
              <th>{{ $t("code.table.columns.title") }}</th>
              <th>{{ $t("code.table.columns.description") }}</th>
              <th>{{ $t("code.table.columns.programmingLanguage") }}</th>
              <th>{{ $t("code.table.columns.body") }}</th>
              <th>{{ $t("code.table.columns.hashtags") }}</th>
              <th>{{ $t("code.table.columns.createdDate") }}</th>
              <th>{{ $t("code.table.columns.actions") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in codeList" :key="index">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.programmingLanguage }}</td>
              <td>{{ item.code }}</td>
              <td>{{ item.hashTags | handleHashtags }}</td>
              <td>{{ item.createdDate | handleDate }}</td>
              <td>
                <v-btn  @click="routeUpdate(item)" class="mx-1" fab x-small dark color="success">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>

                <!-- <v-btn class="mx-1" fab x-small dark color="red">
                  <v-icon dark>mdi-home</v-icon>
                </v-btn> -->
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <base-loader v-if="isLoading"> </base-loader>
    </v-col>

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
            @next="getCodes()"
            @previous="getCodes()"
            @input="getCodes()"
            circle
            class="my-4"
            :length="pageLength"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-row>

  
</template>

<script>
import { RoutePaths, Storages } from "../../../../utility/const";
import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { components } from "./sections/components";
import { filters } from "./sections/filters";
import { watch } from "./sections/watch";
export default {
  data() {
    return data;
  },
  methods: methods,
  components: components,
  filters: filters,
  watch:watch,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  },
  mounted() {
    this.getCodes();
  },
};
</script>

