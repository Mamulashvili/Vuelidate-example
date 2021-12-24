<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <the-welcome msg="Welcome to vue validation example app" />
  </div>
</template>

<script>
import TheWelcome from "@/components/TheWelcome";

export default {
  name: "Home",
  components: {
    TheWelcome,
  },
};
</script>
