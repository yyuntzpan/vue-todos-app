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

    <button @click="todosStore.deleteTodo(todo.id)">
      <Icon
        icon="si:close-fill"
        width="24"
        height="24"
        style="color: var(--color-text)"
      />
    </button>
  </li>
</template>

<script setup lang="ts">
import { useTodosStore } from "../stores/todo";
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

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
.icon {
  color: var(--color-text);
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 2rem;
  cursor: pointer;
}
button:hover {
  background-color: var(--color-);
}
</style>
