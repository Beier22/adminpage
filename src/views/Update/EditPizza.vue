<template>
    <div>
        <h1>Edit Pizza</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="normalPrice" placeholder="Normal size price"></p>
            <p><input type="number" v-model="familyPrice" placeholder="Family size price"></p>
            <p><textarea v-model="toppings" placeholder="Description of toppings"/></p>
        </div>
        <p><button v-on:click="updatePizza()">Submit</button></p>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "EditPizza",
        data(){
            return{
                id: 0,
                name: '',
                normalPrice: 0,
                familyPrice: 0,
                toppings: '',
                message: 'nothing'
            }
        },
        mounted(){
            this.getPizza(this.$route.params.id)
        },
        methods:{
            getPizza(id){
                axios.get("https://pizzashop00.azurewebsites.net/api/pizzas/" + id).then(response => (
                        this.id = response.data.id,
                        this.name = response.data.name,
                        this.normalPrice = response.data.normalPrice,
                        this.familyPrice = response.data.familyPrice,
                        this.toppings = response.data.toppings
                    )
                )
            },
            updatePizza(){
                axios.put("https://pizzashop00.azurewebsites.net/api/pizzas/" + this.id, {
                    id: this.id,
                    name: this.name,
                    normalPrice: this.normalPrice,
                    familyPrice: this.familyPrice,
                    toppings: this.toppings
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>