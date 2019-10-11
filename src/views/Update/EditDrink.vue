<template>
    <div>
        <h1>Edit Drink</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="price" placeholder="Price"></p>
        </div>
        <p><button v-on:click="updateDrink()">Submit</button></p>
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
                price: 0,
                message: ''
            }
        },
        mounted(){
            this.getDrink(this.$route.params.id)
        },
        methods:{
            getDrink(id){
                axios.get("https://pizzashop00.azurewebsites.net/api/drinks/" + id).then(response => (
                        this.id = response.data.id,
                            this.name = response.data.name,
                            this.price = response.data.price
                    )
                )
            },
            updateDrink(){
                axios.put("https://pizzashop00.azurewebsites.net/api/drinks/" + this.id, {
                        id: this.id,
                        name: this.name,
                        price: this.price
                    }
                )
                    .then(this.message = this.name + ' has been updated')
                    .catch(error => this.message = 'Something went wrong')
            }
        }
    }
</script>

<style scoped>

</style>