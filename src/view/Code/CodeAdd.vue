<template>
  <ValidationObserver
    ref="observer"
    :style="{ width: '100%', padding: '10rem', margintop: '0px' }"
    class="mt-0"
  >
    <h1>Add Code</h1>
    <form>
      <ValidationProvider
        v-slot="{ errors }"
        name="name"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        name="Language"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Language"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        name="description"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Description"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        name="code"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Code"
          required
        ></v-text-field>
      </ValidationProvider>

      <v-btn class="mr-4" @click="submit">Add</v-btn>
    </form>
  </ValidationObserver>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
