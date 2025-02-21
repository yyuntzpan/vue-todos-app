<template>
  <li class="list">
    <div class="item-box">
      <input
        :id="todo.id"
        name="checkbox"
        type="checkbox"
        v-model="todo.isCheck"
        class="checkbox"
      />
      <label :for="todo.id" :class="['todo-text', { isCheck: todo.isCheck }]">
        {{ todo.text }}
      </label>
    </div>

    <button @click="todosStore.deleteTodo(todo.id)">x</button>
  </li>
</template>

<script setup lang="ts">
import { useTodosStore } from "../stores/todo";

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

.item-box {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}
.todo-text {
  width: 100%;
  cursor: pointer;
}
.isCheck {
  opacity: 0.5;
  text-decoration: line-through;
}
button {
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 2rem;
  cursor: pointer;
}
button:hover {
  background-color: #414141;
}
</style>
