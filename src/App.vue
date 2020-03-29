<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#"><img src="@/assets/logo.png"/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" @click.prevent="isSandbox = false"
              >Dashboard</b-nav-item
            >
            <b-nav-item to="/sandbox" @click.prevent="isSandbox = true"
              >Sandbox</b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-if="!isSandbox">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Enter your key"
                v-model="privateKey"
                v-if="!isDecrypt"
                type="password"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                @click.prevent="decryptData()"
                >{{ crypto }}</b-button
              >
            </b-nav-form>
            <b-nav-item to="#" right
              ><b-icon icon="download"></b-icon
            ></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      privateKey: "",
      crypto: "Decrypt",
      isSandbox: false
    };
  },
  computed: {
    isDecrypt() {
      return this.$store.getters.getDecrypt;
    }
  },
  methods: {
    decryptData: function() {
      if (this.privateKey.length > 5 && !this.isDecrypt) {
        this.$store.dispatch("toggleDecrypt");
        this.$store.dispatch("setKey", this.privateKey);
        this.crypto = "Encrypt";
      } else if (this.isDecrypt) {
        this.$store.dispatch("toggleDecrypt");
        this.crypto = "Decrypt";
      } else {
        alert("Secret Key has to be greater than 5 characters");
      }
      this.privateKey = "";
    }
  }
};
</script>
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
  width: 150px;
}
</style>
