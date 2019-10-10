<template>
    <div>
        <h1>Create Drink</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="price" placeholder="Normal size price"></p>
        </div>
        <p><button v-on:click="submit()">Submit</button></p>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CreateDrink",
        data(){
            return{
                name: '',
                price: null,
                message: ''
            }
        },
        methods:{
            submit(){
                axios.post("https://pizzashop00.azurewebsites.net/api/drinks", {
                    name: this.name,
                    price: this.price
                })
                    .then(this.message = this.name + ' created')
                    .catch(error => this.message = 'Something went wrong')
            }
        }
    }
</script>

<style scoped>

</style>