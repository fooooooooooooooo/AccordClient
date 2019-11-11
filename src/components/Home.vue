<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>Accord</v-toolbar-title>
      <v-spacer />
      <v-btn right>
        <router-link to="/login">
          Login
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="3"
          >
            <v-card raised="true">
              <v-card-title>Can you believe this shit</v-card-title>
              <v-card-text>This is so bad how does it even run</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>