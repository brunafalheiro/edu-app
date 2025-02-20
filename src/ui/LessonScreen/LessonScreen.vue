<template>
  <div>Lesson {{routeId}}</div>
</template>

<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const routeId = route.params.id;
</script>

<style lang="scss">@import 'LessonScreen.scss';</style>
