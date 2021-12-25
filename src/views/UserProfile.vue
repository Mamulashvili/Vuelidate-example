<template>
  <div class="profile">
    <h3>Welcome back, {{ state.username }}</h3>

    <form @submit.prevent="submitForm">
      <base-input id="username" v-model:vm="state.username" label="Username" />
      <base-error v-if="v$.username.$error" :errors="v$.username.$errors" />

      <base-input id="email" v-model:vm="state.email" label="Email" />
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

export default {
  setup() {
    const state = reactive({
      username: "@Mamulashvili",
      email: "",
    });

    // Custom validation rule
    const mustIncludeAtSign = (value) => value.includes("@");

    const requiredNameLength = ref(52);
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
        required,
        email,
        customEmailValidation: helpers.withMessage(
          "Email must include customValidation",
          customEmailValidation
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
