<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo.ts'

const todoStore = useTodoStore();
const newTodo = ref('');


</script>
<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button @="addTodo">Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
