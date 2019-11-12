<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card :raised="true">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="login" hint="Email" :persistent-hint="true" type="email" />
                  <v-text-field
                    id="password"
                    hint="Password"
                    :persistent-hint="true"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-subheader>Need an account?</v-subheader>
                <v-subheader>
                  <router-link to="/register">Register.</router-link>
                  <v-subheader>Don't actually, just click login.</v-subheader>
                </v-subheader>
                <v-spacer />
                <v-btn color="Accent">
                  <router-link to="/client">Login</router-link>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  }
};
</script>