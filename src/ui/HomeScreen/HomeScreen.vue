<template>
  <div class="home-screen">
    <div class="flex justify-center mt-64">
      <div class="first-column flex flex-column align-center full-width full-height mr-64">
        <LessonCard
          v-for="lesson in evenLessons"
          :key="lesson.id"
          :title="lesson.title"
          :description="lesson.description"
          :icon="lesson.icon"
          :id="lesson.id"
        />
      </div>
      <div class="second-column flex flex-column align-center full-width full-height">
        <div class="statistics flex align-center mb-64">
          <div class="statistic mr-12"></div>
          <div class="statistic mr-12"></div>
          <div class="statistic"></div>
        </div>

        <LessonCard
          v-for="lesson in oddLessons"
          :key="lesson.id"
          :title="lesson.title"
          :description="lesson.description"
          :icon="lesson.icon"
          :id="lesson.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import LessonCard from '@/components/LessonCard/LessonCard.vue';
  import lessons from '@/lessons.json';

  const evenLessons = lessons.filter((_, index) => index % 2 === 0);
  const oddLessons = lessons.filter((_, index) => index % 2 !== 0);
</script>

<style lang="scss">@import 'HomeScreen.scss';</style>
