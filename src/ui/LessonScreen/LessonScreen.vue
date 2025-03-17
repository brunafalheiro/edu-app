<template>
  <div class="pt-48 pr-48 pl-48 pb-48">
    <EduButton title="Voltar" :onclick="goBack" class="back-btn mb-48"/>
    
    <div class="flex flex-column align-center full-width">
      <div class="lesson-content">
      
        <div v-if="lesson">
          <h1>{{ lesson.title }}</h1>
          <p class="mb-20">{{ lesson.description }}</p>
          <div v-for="(item, index) in lesson.content" :key="index" class="flex full-width">
            <p v-if="item.type === 'text'" class="mt-20">{{ item.value }}</p>
            <img v-else-if="item.type === 'image'" :src="item.value" alt="Imagem da lição" class="mx-auto mt-20"/>
            <video v-else-if="item.type === 'video'" :src="item.value" controls class="mt-20"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import router from '../../router/router.js';
  import EduButton from '../../components/EduButton/EduButton.vue';
  import lessons from '@/lessons.json';
  import { ref } from 'vue';

  const route = useRoute();
  const lessonId = route.params.id;
  const lesson = ref(lessons.find(lesson => lesson.id === lessonId));
  const goBack = () => { router.back(); }
</script>

<style lang="scss">@import 'LessonScreen.scss';</style>
