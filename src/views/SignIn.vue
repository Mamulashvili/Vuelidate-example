<template>
  <div class="about">
    <h1>Sign In</h1>
    <base-input
      id="username"
      placeholder="@Mamulashvili"
      v-model:vm="user.username"
      label="Username"
    />

    <base-input
      type="password"
      id="password"
      placeholder="password"
      v-model:vm="user.password"
      label="Password"
    />

    <data-info :sd="$data" />
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>
