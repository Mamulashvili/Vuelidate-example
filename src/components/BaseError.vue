<template>
  <div>
    <p v-for="error in errors" :key="error.$uid">
      {{ error.$message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseError",
  props: {
    errors: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: left;
  font-size: 12px;
  color: red;
  margin: 0.5em 0 0 0;
}
</style>
