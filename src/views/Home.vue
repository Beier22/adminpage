<template>

    <div>
        <component-to-re-render :key="componentKey" />
        <h1>Home</h1>
        <h2>Pizzas</h2>
        <li v-for="pizza in pizzas" v-bind:key="pizza.id" style="list-style: none">
            <router-link :to="`/editpizza/${pizza.id}`">{{pizza.name}}</router-link>
        </li>
        <h2>Fastfoods</h2>
        <li v-for="fastfood in fastfoods" v-bind:key="fastfood.id" style="list-style: none">
            <router-link :to="`/editfastfood/${fastfood.id}`">{{fastfood.name}}</router-link>
        </li>
        <h2>Drinks</h2>
        <li v-for="drink in drinks" v-bind:key="drink.id" style="list-style: none">
            <router-link :to="`/editdrink/${pizza.id}`">{{drink.name}}</router-link>
        </li>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: "DeleteItem",
        data () {
            return{
                pizzas: [],
                fastfoods: [],
                drinks: [],
                message: '',
                componentKey: 0
            }
        },
        methods:{
            getAllItems(){
                axios.get("https://pizzashop00.azurewebsites.net/api/pizzas").then(result => this.pizzas = result.data)
                axios.get("https://pizzashop00.azurewebsites.net/api/fastfoods").then(result => this.fastfoods = result.data)
                axios.get("https://pizzashop00.azurewebsites.net/api/drinks").then(result => this.drinks = result.data)
            },
            editPizza(p){

            },
            editFastfood(f){

            },
            editDrink(d){

            }
        },
        mounted(){
            this.getAllItems()
        }
    }
</script>

<style scoped>

</style>