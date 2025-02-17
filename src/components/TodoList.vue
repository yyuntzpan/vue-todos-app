<template>
  <div>
    <ul class="left">
      <TodoItem v-for="todo in todosStore.todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script setup>
import { useTodosStore } from "../stores/todo.ts";
import TodoItem from "./TodoItem.vue";

const todosStore = useTodosStore();
</script>

<style scoped>
.left {
  text-align: left;
}

.text {
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
</style>
