<template>
  <div class="home-screen position-relative">
    <div class="flex justify-center mt-64">
      <div class="first-column flex flex-column full-width full-height">
        <LessonCard
          v-for="lesson in evenLessons"
          :key="lesson.id"
          :title="lesson.title"
          :description="lesson.description"
          :icon="lesson.icon"
          :id="lesson.id"
        />
      </div>
      <div class="stroke-container">
        <svg
          v-for="index in dashesCount"
          :key="index"
          class="stroke"
          preserveAspectRatio="none"
          viewBox="0 0 244 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H113.784C127.592 1 138.784 12.1929 138.784 26V136C138.784 149.807 149.977 161 163.784 161H244" stroke="black" stroke-width="2" stroke-miterlimit="1.03061" stroke-dasharray="12 12" />
        </svg>
      </div>

      <div class="second-column flex flex-column full-width full-height">
        <div class="statistics flex mb-64">
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
    <!-- <div class="stroke-container position-absolute flex justify-center full-width full-height">
      <div class="column full-width"></div>
    </div> -->
  </div>
</template>

<script setup>
  import LessonCard from '@/components/LessonCard/LessonCard.vue';
  import lessons from '@/lessons.json';

  const evenLessons = lessons.filter((_, index) => index % 2 === 0);
  const oddLessons = lessons.filter((_, index) => index % 2 !== 0);
  const dashesCount = lessons.length - 1;
</script>

<style lang="scss">@import 'HomeScreen.scss';</style>
