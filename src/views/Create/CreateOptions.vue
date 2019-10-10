<template>
    <div>
        <br/>
        <br/>
        <p><router-link to="/createpizza" tag="button">Create Pizza</router-link></p>
        <p><router-link to="/createfastfood" tag="button">Create Fastfood</router-link></p>
        <p><router-link to="/createdrink" tag="button">Create Drink</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "CreateOptions"
    }
</script>

<style scoped>

</style>