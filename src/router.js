import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import Create from "./views/Create/CreateOptions"
import CreatePizza from "./views/Create/CreatePizza"
import CreateFastfood from "./views/Create/CreateFastfood"
import CreateDrink from "./views/Create/CreateDrink"
import EditPizza from "./views/Update/EditPizza"
import EditFastfood from "./views/Update/EditFastfood"
import EditDrink from "./views/Update/EditDrink"
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
            path: '/create',
            name: 'create',
            component: Create
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
            path: '/editpizza/:id',
            name: 'editpizza',
            component: EditPizza
        },
        {
            path: '/editfastfood/:id',
            name: 'editfastfood',
            component: EditFastfood
        },
        {
            path: '/editdrink/:id',
            name: 'editdrink',
            component: EditDrink
        },
        {
            path: '/delete',
            name: 'delete',
            component: Delete
        }

    ]
})