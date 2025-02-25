<template>
  <button @click="toggleTheme">
    <Icon class="icon" :icon="isDark ? 'si:moon-duotone' : 'si:sun-duotone'" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const isDark = ref(false);

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
isDark.value = prefersDark;

const setTheme = (theme: "dark" | "light" | "auto") => {
  document.documentElement.classList.remove("dark", "light");

  if (theme === "auto") {
    localStorage.removeItem("theme-preference");
    isDark.value = prefersDark;
  } else {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme-preference", theme);
    isDark.value = theme === "dark";
  }
};

const toggleTheme = () => {
  setTheme(isDark.value ? "light" : "dark");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme-preference") as
    | "dark"
    | "light"
    | null;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("auto");
  }
});
</script>

<style scoped>
button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  right: 1rem;
  padding: 0.6rem;
}
.icon {
  position: relative;
  width: 1.3rem;
  height: 1.3rem;
}
</style>
