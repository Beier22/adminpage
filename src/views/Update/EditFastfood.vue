<template>
    <div>
        <h1>Edit Fastfood</h1>
        <div>
            <p><input type="text" v-model="name" placeholder="Input name"></p>
            <p><input type="number" v-model="smallPrice" placeholder="Small size price"></p>
            <p><input type="number" v-model="largePrice" placeholder="Large size price"></p>
        </div>
        <p><button v-on:click="updateFastfood()">Submit</button></p>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "EditFastfood",
        data(){
            return{
                id: 0,
                name: '',
                smallPrice: 0,
                largePrice: 0,
                message: ''
            }
        },
        mounted(){
            this.getFastfood(this.$route.params.id)
        },
        methods:{
            getFastfood(id){
                axios.get("https://pizzashop00.azurewebsites.net/api/fastfoods/" + id).then(response => (
                        this.id = response.data.id,
                            this.name = response.data.name,
                            this.smallPrice = response.data.smallPrice,
                            this.largePrice = response.data.largePrice
                    )
                )
            },
            updateFastfood(){
                axios.put("https://pizzashop00.azurewebsites.net/api/fastfoods/" + this.id, {
                        id: this.id,
                        name: this.name,
                        smallPrice: this.smallPrice,
                        largePrice: this.largePrice
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