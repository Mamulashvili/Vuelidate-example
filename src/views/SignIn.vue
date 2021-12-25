<template>
  <div class="about">
    <h1>Sign In</h1>
    <form @submit.prevent="submitForm">
      <base-input
        id="username"
        placeholder="@Mamulashvili"
        v-model:vm="user.username"
        label="Username"
        autocomplete="off"
      />
      <base-error
        v-if="v$.user.username.$error"
        :errors="v$.user.username.$errors"
      />

      <base-input
        type="password"
        id="password"
        placeholder="password"
        v-model:vm="user.password"
        label="Password"
        autocomplete="off"
      />
      <base-error
        v-if="v$.user.password.$error"
        :errors="v$.user.password.$errors"
      />

      <base-button> Log in </base-button>
    </form>
    <br />
    <br />
    <data-info :sd="$data.user" title="Data" />
    <data-info :sd="$data.v$" title="Vuelidate state" />
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "SignIn",

  data() {
    return {
      v$: useVuelidate(),
      user: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      username: {
        required,
        min: minLength(3),
        max: maxLength(25),
        $autoDirty: true, // Throws error when user typing
        $lazy: true,
      },
      password: {
        required,
        $autoDirty: true,
        $lazy: true,
      },
    },
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
      // after submiting reset the vuelidator: this.v$.$reset()
    },
  },
};
</script>
