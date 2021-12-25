<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      :value="vm"
      v-bind="$attrs"
      @input="$emit('update:vm', $event.target.value)"
    >
      <option value="" disabled selected>Select</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="vm == option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  emits: ["update:vm"],
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    options: { type: Array, required: true, defaulr: [] },
    vm: { required: true },
  },
};
</script>

<style lang="scss" scoped></style>
