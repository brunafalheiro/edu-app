<template>
  <div class="flex">
    <div class="full-width">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="sidebar full-height pr-48 pl-48">
      <MenuCard title="Aulas" routeToRedirect="home"/>
      <MenuCard title="Árvores Binárias" routeToRedirect="treeVisualizer"/>
      <MenuCard title="title 3"/>
    </div>
  </div>
</template>

<script setup>
  import MenuCard from './components/MenuCard/MenuCard.vue';
</script>

<style lang="scss">@import 'App.scss';</style>
