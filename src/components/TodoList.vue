<template>
  <div>
    <ul class="unordered">
      <TodoItem v-for="todo in sortedTodos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodosStore } from "../stores/todo.ts";
import TodoItem from "./TodoItem.vue";

const todosStore = useTodosStore();
const sortedTodos = computed(() => {
  return [...todosStore.todos].sort((a, b) => {
    if (a.isCheck && !b.isCheck) return 1;
    if (!a.isCheck && b.isCheck) return -1;
    return 0;
  });
});
</script>

<style scoped>
.unordered {
  padding-left: 0.3rem;
  text-align: left;
}

.text {
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
</style>
