<template>
  <li class="list">
    <input type="checkbox" v-model="todo.isCheck" />
    <span :class="{ isCheck: todo.isCheck }">
      {{ todo.text }}
    </span>
    <button @click="todosStore.deleteTodo(todo.id)">x</button>
  </li>
</template>

<script setup>
import { useTodosStore } from "../stores/todo.ts";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const todosStore = useTodosStore();
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.isCheck {
  opacity: 0.5;
}
button {
  margin-left: 10px;
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
</style>
