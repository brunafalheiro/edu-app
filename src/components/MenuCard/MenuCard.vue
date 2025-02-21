<template>
  <div :class="['menu-card', 'flex', 'space-between', 'pointer', 'pt-24', 'pr-24', 'pb-24', 'pl-24', { 'selected': isSelectedCard }]" @click="redirectTo">
    <p class="title">{{title}}</p>
    <div class="icon"></div>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import router from '../../router/router.js';

  const props = defineProps({
    title: String,
    routeToRedirect: String,
  });

  const isSelectedCard = computed(() => router.currentRoute.value.name === props.routeToRedirect);
  const redirectTo = () => { router.push({ name: props.routeToRedirect }); };
</script>

<style lang="scss">@import 'MenuCard.scss';</style>
