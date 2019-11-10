<template>
  <div>
    <v-row>
      <v-col cols="auto">
        <v-avatar color="primary">yeet</v-avatar>
      </v-col>
      <v-col>
        <v-row>
          <span style="font-weight: 500">{{username}}</span>
        </v-row>
        <v-row>
          <p>{{message}}</p>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    data: () => ({
        message: undefined,
        username: undefined,
    })
});
</script>