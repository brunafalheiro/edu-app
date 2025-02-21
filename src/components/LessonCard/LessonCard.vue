<template>
  <div class="lesson-card position-relative flex flex-column space-between pt-36 pr-24 pb-36 pl-24">
    <div class="icon position-absolute"></div>
    <div>
      <p class="title mb-16">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <EduButton :title="'Começar'" :onclick="redirectToLesson"/>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import EduButton from '../EduButton/EduButton.vue';
  import router from '../../router/router.js';

  const props = defineProps({
    title: String,
    description: String,
    icon: String,
    id: String,
  });

  const redirectToLesson = () => {
    router.push({ name: 'lesson', params: { id: props.id } });
  }
</script>

<style lang="scss">@import 'LessonCard.scss';</style>