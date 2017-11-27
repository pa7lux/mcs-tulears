<template>
  <div id="app">
    <img v-bind:src="imageUrl" alt="Vue logo" v-show="this.$store.getters.userIsLoggedIn">
    <v-app>
      <v-btn color="primary" @click="authorizeUser()" v-show="!this.$store.getters.userIsLoggedIn">Авторизоваться</v-btn>
      <ul>
        <li v-for="fruit in fruits">{{ fruit }}</li>
      </ul>
    </v-app>
  </div>

</template>

<script>
export default {
  data () {
    return {
      fruits: ['Яблоко', 'Клюква', 'Патлух'],
      imageUrl: 'https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_wide-f5b7cb17067fc89225d72d768a00dc0a9cf2545c.jpg?s=1400'
    }
  },
  methods: {
    authorizeUser() {
      this.$store.commit('authorizeUser')
    }
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
