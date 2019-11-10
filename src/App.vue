<template>
  <v-app id="sandbox">
    <v-navigation-drawer v-model="primaryDrawer.model" :clipped="true" :width="75" app overflow>
      <v-container fluid>
        <v-row align="center" justify="center">
          <guild></guild>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="true" app>
      <v-toolbar-title>Accord</v-toolbar-title>
      <v-col>
        <router-link to="/login">Login</router-link>
      </v-col>
      <v-col>
        <v-switch v-model="$vuetify.theme.dark" :dense="true" primary label="Dark" />
      </v-col>
    </v-app-bar>

    <v-content>
      <v-container fluid :align-end="true" fill-height="true">
        <v-row :align-start="true" justify="center" fill-height="true"></v-row>
        <v-row height="100%">
          <v-col>
            <message username="yeet" message="yeet"></message>

            <pre>
                ⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾     ⡀  ⢀⣿⣿    ⢸⡇
                ⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉    ⠸⢀⣿
               ⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿
               ⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿
               ⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
             ⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
            ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
            ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
            ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃
            ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆          ⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃
             ⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃
               ⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁
                  ⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁
                      ⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁       ⢀⣠⣴
            ⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃          ⣠⣴⣿⣿⣿
            </pre>
          </v-col>
        </v-row>
        <v-row :align-end="true" justify="center" fill-height="true">
          <v-col>
            <v-text-field :filled="true" :rounded="true" :hide-details="true" :solo="true"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    }
  }),
  name: "App"
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>