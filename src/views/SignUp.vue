<template>
  <div class="about">
    <h1>Sign Up</h1>
    <form @submit.prevent="submitForm">
      <base-input
        id="firstname"
        placeholder="Shota"
        v-model:vm="user.firstname"
        label="First name"
        autocomplete="off"
        @blur="v$.user.firstname.$touch"
      />
      <base-error
        v-if="v$.user.firstname.$error"
        :errors="v$.user.firstname.$errors"
      />

      <base-input
        id="lastname"
        placeholder="Mamulashvili"
        v-model:vm="user.lastname"
        label="Last name"
        autocomplete="off"
      />
      <base-error
        v-if="v$.user.lastname.$error"
        :errors="v$.user.lastname.$errors"
      />

      <base-input
        id="email"
        placeholder="example@gmail.com"
        v-model:vm="user.email"
        label="Email"
        autocomplete="off"
      />
      <base-error v-if="v$.user.email.$error" :errors="v$.user.email.$errors" />

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
        v-model:vm="user.gender"
      />

      <base-select
        id="genderSelect"
        label="Gender"
        :options="genderOptions"
        v-model:vm="user.gender"
      />
      <base-error
        v-if="v$.user.gender.$error"
        :errors="v$.user.gender.$errors"
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

      <base-input
        type="password"
        id="repassword"
        placeholder="password"
        v-model:vm="user.rePassword"
        label="Re-Password"
        autocomplete="off"
      />
      <base-error
        v-if="v$.user.rePassword.$error"
        :errors="v$.user.rePassword.$errors"
      />

      <base-button> Sign up </base-button>
    </form>
    <br />
    <br />
    <data-info :sd="$data.user" title="Data" />
    <data-info :sd="$data.v$" title="Vuelidate state" />
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";

export default {
  name: "SignUp",

  data() {
    return {
      v$: useVuelidate(),
      genderOptions: ["Female", "Male", "Other"],
      user: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        gender: "",
        password: "",
        rePassword: "",
      },
    };
  },
  validationConfig: {
    $lazy: true,
  },
  validations: {
    user: {
      firstname: { required },
      lastname: { required, min: minLength(2) },
      email: { required, email },
      username: { required },
      gender: { required },
      password: { required },
      rePassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
    },
  },
};
</script>
