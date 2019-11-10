import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login.vue'
import home from '../components/Home.vue'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: home
        },
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/app',
            name: 'App',
            component: App
        }
    ]
})