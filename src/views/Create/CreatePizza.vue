<template>
    <div>
        <h1>Create Pizza</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="normalPrice" placeholder="Normal size price"></p>
            <p><input type="number" v-model="familyPrice" placeholder="Family size price"></p>
            <p><textarea v-model="toppings" placeholder="Description of toppings"/></p>
        </div>
        <p><button v-on:click="submit()">Submit</button></p>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CreatePizza",
        data(){
            return{
                name: '',
                normalPrice: null,
                familyPrice: null,
                toppings: '',
                message: ''
            }
        },
        methods:{
            click(){
                this.toppings = 'test'
            },
            submit(){
                axios.post("https://pizzashop00.azurewebsites.net/api/pizzas",{
                    name: this.name,
                    normalPrice: this.normalPrice,
                    familyPrice: this.familyPrice,
                    toppings: this.toppings
                })
                    .then(this.message = this.name + ' created')
                    .catch(error => this.message = 'Something went wrong')

            }
        }
    }
</script>

<style scoped>

</style>