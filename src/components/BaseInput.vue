<template>
  <div>
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :type="type"
      :class="customStyle"
      :value="vm"
      @input="$emit('update:vm', $event.target.value)"
      v-bind="$attrs"
      :id="id"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",
  emits: ["update:vm"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    customStyle: String,
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    vm: {
      // View Model
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
input
  padding: 0.7em
  border: 1px solid #ddd
  border-radius: 5px
  width: 100%

label
    float: left
    font-size: 13px
    margin-bottom: .3em
    font-weight: bold
    margin-top: 1.5em
</style>
