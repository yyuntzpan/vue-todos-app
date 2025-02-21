<template>
  <form @submit.prevent="handleAddTodo">
    <input
      id="todo"
      name="todo"
      v-model="newTodo"
      class="text"
      type="text"
      placeholder="new todo"
      @focus="showError = false"
    />
    <button type="submit" :disabled="!canAdd" :class="{ disabled: !canAdd }">
      Add Todo
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useTodosStore } from "../stores/todo";

const newTodo = ref("");
const showError = ref(false);
const todosStore = useTodosStore();

const canAdd = computed(() => {
  return newTodo.value.trim().length > 0;
});

const handleAddTodo = () => {
  if (!canAdd.value) {
    showError.value = true;
    return;
  }
  addTodo();
};

const addTodo = () => {
  todosStore.addTodo(newTodo.value);
  newTodo.value = "";
  showError.value = false;
};
</script>

<style scoped>
button {
  margin-left: 10px;
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}

.text {
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
}
.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
