<template>
  <v-app id="sandbox">
    <v-navigation-drawer v-model="primaryDrawer.model" :clipped="true" :width="75" app overflow>
      <v-container fluid>
        <v-row align="center" justify="center">
          <guild />
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="true" app>
      <v-toolbar-title>Accord</v-toolbar-title>
      <v-spacer />
      <v-col>
        <v-switch v-model="$vuetify.theme.dark" :dense="true" primary label="Dark" />
      </v-col>
    </v-app-bar>

    <v-content>
      <v-container
        id="messages_container"
        fluid
        style="height: calc(100vh - 150px); overflow:hidden"
      >
        <perfect-scrollbar id="scroller" style="overflow-y: scroll; overflow-x: hidden;">
          <v-container>
            <!-- <message
              message="Yeet"
              username="username"
              timestamp="10000000"
              timestamp_string="Today"
              color="color: rgb(0, 255, 0);"
              avatar_url="https://cdn.discordapp.com/emojis/629734839045849127.png"
            ></message>
            <div class="message">
              <div class="messageHeader">
                <div class="messageHeaderAvatar">
                  <div role="img" style="width: 40px; height: 40px">
                    <img
                      src="https://cdn.discordapp.com/avatars/134330546397511680/dc5d047bb46f3a3cfd8e3da76ad3b58c.webp?size=128"
                      class="userAvatar"
                    />
                  </div>
                </div>
                <div class="messageHeaderInner">
                  <div class="messageHeaderUsername">
                    <span class="username" style="color: rgb(52, 152, 219);">🎄 DarkZek 🎄</span>
                  </div>
                  <div class="messageHeaderTimestamp">
                    <time class="timestamp" datetime="1573526134293">
                      <span class="messageTimestamp">Today at 6:35 PM</span>
                    </time>
                  </div>
                </div>
              </div>
              <div class="messageContent">
                <div class="messageContainer">
                  <div class="userMessage">Why did your friend buy rice and pizza</div>
                </div>
              </div>
            </div>
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
            </pre> -->

            <message message="eyeet"></message>
          </v-container>
        </perfect-scrollbar>
      </v-container>
      <div class="textAreaContainer">
        <v-text-field
          class="textArea"
          :filled="true"
          :rounded="true"
          :hide-details="true"
          :solo="true"
          placeholder="Message #general"
        />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
  })
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>