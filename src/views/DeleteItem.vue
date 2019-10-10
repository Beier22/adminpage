<template>

    <div>
        <component-to-re-render :key="componentKey" />
        <h1>Delete Item</h1>
            <h2>Pizzas</h2>
            <li v-for="pizza in pizzas" v-bind:key="pizza.id" style="list-style: none">
                <button v-on:click="deletePizza(pizza)">{{pizza.name}}</button>
            </li>
            <h2>Fastfoods</h2>
            <li v-for="fastfood in fastfoods" v-bind:key="fastfood.id" style="list-style: none">
                <button v-on:click="deleteFastfood(fastfood)">{{fastfood.name}}</button>
            </li>
            <h2>Drinks</h2>
            <li v-for="drink in drinks" v-bind:key="drink.id" style="list-style: none">
                <button v-on:click="deleteDrink(drink)">{{drink.name}}</button>
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
                axios.get("https://pizzashop00.azurewebsites.net/api/pizzas").then(result => this.pizzas = result.data),
                axios.get("https://pizzashop00.azurewebsites.net/api/fastfoods").then(result => this.fastfoods = result.data),
                axios.get("https://pizzashop00.azurewebsites.net/api/drinks").then(result => this.drinks = result.data)
            },
            deletePizza(p){
                axios.delete("https://pizzashop00.azurewebsites.net/api/pizzas/" + p.id)
                    .then(this.message = 'Deleted ' + p.name)
                    .catch(error => this.message = 'Something went wrong')
                    .finally(()=>axios.get("https://pizzashop00.azurewebsites.net/api/pizzas").then(result => this.pizzas = result.data))


            },
            deleteFastfood(f){
                axios.delete("https://pizzashop00.azurewebsites.net/api/fastfoods/" + f.id)
                    .then(this.message = 'Deleted ' + f.name)
                    .catch(error => this.message = 'Something went wrong')
                    .finally(()=>axios.get("https://pizzashop00.azurewebsites.net/api/fastfoods").then(result => this.fastfoods = result.data))
            },
            deleteDrink(d){
                axios.delete("https://pizzashop00.azurewebsites.net/api/drinks/" + d.id)
                    .then(this.message = 'Deleted ' + d.name)
                    .catch(error => this.message = 'Something went wrong')
                    .finally(()=>axios.get("https://pizzashop00.azurewebsites.net/api/drinks").then(result => this.drinks = result.data))
            }
        },
        mounted(){
            this.getAllItems()
        }
    }
</script>

<style scoped>

</style>