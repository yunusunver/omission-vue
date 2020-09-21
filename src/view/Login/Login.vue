<template>
  <v-app>
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
      <div>
        <v-tabs v-model="tab" show-arrows background-color="blue darken-3" icons-and-text dark grow>
          <v-tabs-slider color="blue darken-1"></v-tabs-slider>
          <v-tab v-for="i in tabs" :key="i">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <!--LOGIN -->
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="loginForm.email"    label="E-mail" required></v-text-field>
                      <small class="red--text" v-if="buttonIsClicked && $v.loginForm.email.$invalid" > Email alanı zorunludur.</small>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginForm.password"
                        name="input-10-1"
                        label="Password"
                        type="password"
                        hint="At least 6 characters"
                        counter
                      ></v-text-field>
                      <small class="red--text" v-if="buttonIsClicked && $v.loginForm.password.$invalid" > Password alanı zorunludur.</small>

                    </v-col>

                    <v-col cols="12">
                      <a @click="showRememberTab()">
                        <span>
                          <b>Şifremi unuttum</b>
                        </span>
                      </a>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn
                        x-large
                        block
                        @click="onLogin()"
                        color="success"
                        :loading="loading"
                      >Login</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!--LOGIN END -->

          <!-- REGISTER -->
          <!-- <v-tab-item v-if="tabs.length>1">
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm"  lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="email" label="E-mail" required></v-text-field>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                      <v-btn
                        x-large
                        block
                        color="success"
                      >Register</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item> -->
          <!-- REGISTER END-->
        </v-tabs>
      </div>
    </v-dialog>
  </v-app>
</template>

<script>

import { data } from "./sections/data";
import { methods } from "./sections/methods";
import { validations} from "./sections/validations";
export default {
  
  data(){
    return data
  },
  methods:methods,
  validations:validations
  
};
</script>

<style  scoped>
  
</style>
