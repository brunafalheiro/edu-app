<template>
  <EduButton title="Voltar" :onclick="goBack" />
  <div>Lesson {{routeId}}</div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import router from '../../router/router.js';
  import EduButton from '../../components/EduButton/EduButton.vue';

  const route = useRoute();
  const routeId = route.params.id;
  const goBack = () => { router.back(); }
</script>

<style lang="scss">@import 'LessonScreen.scss';</style>
