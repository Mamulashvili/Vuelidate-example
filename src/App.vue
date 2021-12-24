<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'signIn' }">Sign In</router-link> |
    <router-link :to="{ name: 'signUp' }">Sign Up</router-link> |
    <router-link :to="{ name: 'userProfile' }">User profile</router-link>
  </div>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
body {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {
  max-width: 30%;
  margin: auto;
}

.info {
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5rem auto;
  padding: 1rem;
}
</style>
