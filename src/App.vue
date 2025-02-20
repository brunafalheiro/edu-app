<template>
  <div class="flex">
    <div class="full-width">
      <EduButton title="Voltar" :onclick="goBack" />
      
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="sidebar full-height pr-48 pl-48">
      <MenuCard title="title 1"/>
      <MenuCard title="title 2"/>
      <MenuCard title="title 3"/>
    </div>
  </div>
</template>

<script setup>
  import router from './router/router';
  import MenuCard from './components/MenuCard/MenuCard.vue';
  import EduButton from './components/EduButton/EduButton.vue';

  const goBack = () => { router.back(); }

</script>

<style lang="scss">@import 'App.scss';</style>
