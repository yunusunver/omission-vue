<template>
  <v-row>
    <v-col cols="12">
      <v-row v-if="!isLoading">
        <v-col cols="3">
          <v-text-field label="Ara"></v-text-field>
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
                label="Başlangıç Tarihi"
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
                label="Bitiş Tarihi"
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
          <v-btn color="primary"> Ara </v-btn>
          <v-btn color="warning" class="ml-5" @click="openAddCode()"
            >+Ekle</v-btn
          >
        </v-col>
      </v-row>

      <v-simple-table v-if="!isLoading">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Programming Language</th>
              <th>Code</th>
              <th>Hashtags</th>
              <th>Created Date</th>
              <th>Actions</th>
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
                <v-btn class="mx-1" fab x-small dark color="success">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>

                <v-btn class="mx-1" fab x-small dark color="red">
                  <v-icon dark>mdi-home</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <base-loader v-if="isLoading"> </base-loader>
    </v-col>
  </v-row>
</template>

<script>
import { RoutePaths, Storages } from "../../../../utility/const";
import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { components } from "./sections/components";
import { filters } from "./sections/filters";
export default {
  data() {
    return data;
  },
  methods: methods,
  components: components,
  filters: filters,
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

