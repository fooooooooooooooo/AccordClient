<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card :raised="true">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="email" hint="Email" :persistent-hint="true" type="text" />
                  <v-text-field
                    name="username"
                    hint="Username"
                    :persistent-hint="true"
                    type="text"
                  />
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
                <v-subheader>
                  <router-link to="/login">Already have an account?</router-link>
                </v-subheader>
                <v-spacer />
                <v-btn color="primary">Register</v-btn>
              </v-card-actions>
              <v-card-actions>
                <span
                  style="font-size: 12px; color: #ddd; font-weight:200"
                >By registering you agree to our terms of service and privacy policy.</span>
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
  name: "Register",
  props: {
    source: String
  }
};
</script>