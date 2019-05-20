<template>
  <div id="app">
    <header>
      <!-- <div class="nav-wrapper">
        <div class="container">
          <div id="nav">
            <router-link to="/" tag="a" exact>Home</router-link>
          </div>
        </div>
      </div> -->
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

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
</style>
