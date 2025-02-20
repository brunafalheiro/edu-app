<template>
  <div class="menu-card flex space-between pointer pt-24 pr-24 pb-24 pl-24">
    <p class="title">{{title}}</p>
    <div class="icon"></div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  defineProps({ title: String });
</script>

<style lang="scss">@import 'MenuCard.scss';</style>