import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import CreatePizza from "./views/Create/CreatePizza"
import CreateFastfood from "./views/Create/CreateFastfood"
import CreateDrink from "./views/Create/CreateDrink"
import Delete from "./views/DeleteItem"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/createpizza',
            name: 'createpizza',
            component: CreatePizza
        },
        {
            path: '/createfastfood',
            name: 'createfastfood',
            component: CreateFastfood
        },
        {
            path: '/createdrink',
            name: 'createdrink',
            component: CreateDrink
        },
        {
            path: '/delete',
            name: 'delete',
            component: Delete
        }

    ]
})