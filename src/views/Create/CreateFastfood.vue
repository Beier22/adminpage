<template>
    <div>
        <h1>Create Fastfood</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="smallPrice" placeholder="Small size price"></p>
            <p><input type="number" v-model="largePrice" placeholder="Large size price"></p>
        </div>
        <p><button v-on:click="submit()">Submit</button></p>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CreateFastfood",
        data(){
            return{
                name: '',
                smallPrice: null,
                largePrice: null,
                message: ''
            }
        },
        methods:{
            submit(){
                axios.post("https://pizzashop00.azurewebsites.net/api/fastfoods",{
                    name: this.name,
                    smallPrice: this.smallPrice,
                    largePrice: this.largePrice
                }).then(this.message = this.name + ' created')
            }
        }
    }
</script>

<style scoped>

</style>