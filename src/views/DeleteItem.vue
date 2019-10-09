<template>
    <div>
        <h1>Delete Item</h1>
        <ul style="list-style: none">
            <h2>Pizzas</h2>
            <li v-for="pizza in pizzas" v-bind:key="pizza.id">
                <button v-on:click="deletePizza(pizza)">{{pizza.name}}</button>
            </li>
            <h2>Fastfoods</h2>
            <li v-for="fastfood in fastfoods" v-bind:key="fastfood.id">
                <button>{{fastfood.name}}</button>
            </li>
            <h2>Drinks</h2>
            <li v-for="drink in drinks" v-bind:key="drink.id">
                <button>{{drink.name}}</button>
            </li>
        </ul>
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
                message: ''
            }
        },
        methods:{
            getAllItems(){
                axios.get("https://pizzashop00.azurewebsites.net/api/pizzas").then(result => this.pizzas = result.data),
                axios.get("https://pizzashop00.azurewebsites.net/api/fastfoods").then(result => this.fastfoods = result.data),
                axios.get("https://pizzashop00.azurewebsites.net/api/drinks").then(result => this.drinks = result.data)
            },
            deletePizza(p){
                axios.delete("https://pizzashop00.azurewebsites.net/api/pizzas/" + p.id)
                    .then(this.message = 'Deleted ' + p.name)
            },
            deleteFastfood(f){
                axios.delete("https://pizzashop00.azurewebsites.net/api/fastfoods/" + f.id)
            },
            deleteDrink(d){
                axios.delete("https://pizzashop00.azurewebsites.net/api/drinks/" + d.id)
            }
        },
        mounted(){
            this.getAllItems()
        }
    }
</script>

<style scoped>

</style>