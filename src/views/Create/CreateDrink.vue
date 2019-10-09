<template>
    <div>
        <h1>Create Drink</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="price" placeholder="Normal size price"></p>
        </div>
        <p><button v-on:click="submit()">Submit</button></p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CreateDrink",
        data(){
            return{
                name: '',
                price: null
            }
        },
        methods:{
            submit(){
                axios.post("https://pizzashop00.azurewebsites.net/api/drinks", {
                    name: this.name,
                    price: this.price
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>