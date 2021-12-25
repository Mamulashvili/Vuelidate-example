<template>
  <div class="profile">
    <h3>Welcome back, {{ state.username }}</h3>

    <form @submit.prevent="submitForm">
      <base-input
        id="username"
        v-model:vm="state.username"
        label="Username"
        :customStyle="[v$.username.$error ? 'invalid' : '']"
      />
      <base-error v-if="v$.username.$error" :errors="v$.username.$errors" />

      <base-input
        id="email"
        v-model:vm="state.email"
        label="Email"
        :customStyle="[v$.email.$error ? 'invalid' : '']"
      />
      <base-error v-if="v$.email.$error" :errors="v$.email.$errors" />

      <base-button> Update form </base-button>
    </form>
    <data-info :sd="state" title="Data" />
    <data-info :sd="v$.username" title="Vuelidate state" />
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required, email, helpers } from "@vuelidate/validators";
import { customEmailValidation } from "../../rules/emailValidation";

export default {
  setup() {
    const state = reactive({
      username: "@Mamulashvili",
      email: "",
    });

    // Custom validation rule
    const mustIncludeAtSign = (value) => value.includes("@");

    const requiredNameLength = ref(20);

    const formatUsername = computed(() =>
      state.username.replace("@", "").toLowerCase()
    );

    const rules = computed(() => ({
      username: {
        required,
        minLength: minLength(requiredNameLength.value),
        mustIncludeAtSign: helpers.withMessage(
          "Must include @ sign",
          mustIncludeAtSign
        ),
      },
      email: {
        required: helpers.withMessage("This field can't be empty", required), // Custom error message for vuelidate rule,
        email: helpers.withMessage("Email format is incorrect", email),
        customEmailValidation: helpers.withMessage(
          `Email must include you\'r username : ${formatUsername.value}`,
          customEmailValidation(formatUsername.value)
        ),
      },
    }));

    const v$ = useVuelidate(rules, state, { $lazy: true });

    const submitForm = async function () {
      const isFormValid = await this.v$.$validate();
      console.log(isFormValid);
    };

    return {
      v$,
      state,
      submitForm,
    };
  },

  // return method from compositions api
  // methods: {
  //   async submitForm() {
  //     const isFormValid = await this.v$.$validate();
  //     console.log(isFormValid);
  //   },
  // },
};
</script>

<style lang="scss">
.valid {
  border: 1px solid green;
}
.invalid {
  border: 1px solid red;
}
</style>
