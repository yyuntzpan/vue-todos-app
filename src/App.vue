<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <ThemeToggle />
  <TodoInput />
  <TodoList />
</template>

<style scoped></style>
