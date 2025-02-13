<template>
  <div>
    <form @submit.prevent="submitTodo">
      <input v-model="newTodo" class="text" required placeholder="new todo" />
      <button @click="submitTodo">Add Todo</button>
    </form>
    <ul class="left">
      <li v-for="todo in todosStore.todos" :key="todo.id" class="list">
        <input type="checkbox" v-model="todo.isCheck" />
        <span :class="{ isCheck: todo.isCheck }">
          {{ todo.text }}
        </span>
        <button @click="todosStore.deleteTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "../stores/todo.ts";

const newTodo = ref("");
const todosStore = useTodosStore();

const submitTodo = () => {
  if (!newTodo.value.trim()) return;
  todosStore.addTodo(newTodo.value);
  newTodo.value = "";
};
</script>

<style scoped>
button {
  margin-left: 10px;
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
.left {
  text-align: left;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.text {
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
.isCheck {
  opacity: 0.5;
}
</style>
