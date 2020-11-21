<template>
  <v-row>
    <v-col md="6" lg="6" xl="6">
      <form>
        <v-text-field
          v-model="codePost.title"
          :error-messages="titleErrors"
          :label="$t('code.labels.title')"
          required
          @input="$v.codePost.title.$touch()"
          @blur="$v.codePost.title.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="codePost.description"
          :error-messages="descriptionErrors"
          :label="$t('code.labels.description')"
          required
          @input="$v.codePost.description.$touch()"
          @blur="$v.codePost.description.$touch()"
        ></v-text-field>

        <v-combobox
          v-model="codePost.lookupId"
          :items="languages"
          :error-messages="languageErrors"
          item-text="name"
          :label="$t('code.labels.programmingLanguage')"
          dense
          @input="$v.codePost.lookupId.$touch()"
          @blur="$v.codePost.lookupId.$touch()"
        ></v-combobox>

        <v-text-field
          v-model="codePost.code"
          :error-messages="codeErrors"
          :label="$t('code.labels.body')"
          required
          @input="$v.codePost.code.$touch()"
          @blur="$v.codePost.code.$touch()"
        ></v-text-field>

        <v-combobox
          v-model="codePost.hashtags"
          :items="hashtags"
          item-text="name"
          :label="$t('code.labels.hashtags')"
          multiple
          dense
        >
          <template v-slot:item="{ item }">
            <v-badge color="green" :content="item.count">
              {{ item.name }}
            </v-badge>
          </template>
        </v-combobox>

        <v-row align="center" justify="center">
          <v-btn color="success" :loading="loading" @click="addCode()">
            {{ $t("code.buttons.add") }}
          </v-btn>

          <v-btn @click="clearForm()">
            {{ $t("code.buttons.clear") }}
          </v-btn>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import { RoutePaths, Storages } from "../../../../utility/const";
import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { validations } from "./sections/validations";
import { computed } from "./sections/computed";

export default {
  data() {
    return data;
  },
  methods: methods,
  validations: validations,
  computed: computed,
  beforeMount() {
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if (storage == null || storage == undefined) {
      this.$router.push({ path: RoutePaths.Login.alias });
    }
  },
  mounted() {
    this.getProgrammingLanguages();
    this.getUsedHashtags();
  },
};
</script>
