import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import Guild from '../components/Guild.vue'
// import Message from '../components/Message.vue'

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

Vue.component('guild', {
    template: '<v-btn :fab="true"></v-btn>'
});

// Vue.component('message', {
//     props: [
//         'username',
//         'message',
//         'timestamp',
//         'timestamp_string',
//         'color',
//         'avatar_url'],
//     template: Message
// });
Vue.component('message', require('../components/Message.vue').default);