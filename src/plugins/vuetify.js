import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import Guild from '../components/Guild.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            dark: {
                primary: '#78909C',
            },
            light: {
                primary: '#546E7A',
            },
        },
        dark: true,
    },
});

var message = "<div> <v-row> <v-col cols=\"auto\"> <v-avatar color=\"primary\">yeet</v-avatar> </v-col> <v-col> <v-row> <span style=\"font-weight: 500\">{{username}}</span> </v-row> <v-row> <p>{{message}}</p> </v-row></v-col></v-row></div>"

Vue.component('guild', {
    data: function () {

    },
    template: '<v-btn :fab="true"></v-btn>'
});

Vue.component('message', {
    props: ['username', "message"],
    template: message
});