<template>
  <div class="dropdown" :class="{ show: showDropdown }">
    <slot class="dropdown-toggle" />
    <div @click="showDropdown = !showDropdown">{{ showDropdown }}</div>
    
    <div
      class="dropdown-menu"
      :class="{ show: showDropdown }"
      aria-labelledby="dropdownMenuButton"
      style="transition: 0.5s"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</template>

<script setup>
const showDropdown = ref(false);
// ref
</script>

<style scoped>
</style>
