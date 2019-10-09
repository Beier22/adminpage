<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/createpizza">Create Pizza</router-link> |
      <router-link to="/createfastfood">Create Fastfood</router-link> |
      <router-link to="/createdrink">Create Drink</router-link> |
      <router-link to="/delete">Delete Item</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data: () => ({
    //
  }),


}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
