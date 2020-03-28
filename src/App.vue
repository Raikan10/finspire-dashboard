<template>
  <div id="app">
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"><img src="@/assets/logo.png"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Dashboard</b-nav-item>
          <b-nav-item to="/about" disabled>Sandbox</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class = "ml-auto">
          <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Enter your key"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" >Decrypt</b-button>
        </b-nav-form>
          <b-nav-item to="#" right>Download</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
    <router-view />
  </div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-light {
  background-color: lightblue !important;
}
img {
  width:150px;
}
</style>
