<template>
  <div>
    <button class="btn btn-primary" @click="$emit('click')">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  emits: ["click"],
};
</script>

<style lang="scss" scoped>
button {
  padding: 0.7em 1.5rem;
  border-radius: 5px;
  background-color: #42b983;
  color: #fff;
  border: none;
  margin-top: 1.5em;
  float: left;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #33a170;
  }
}
</style>
