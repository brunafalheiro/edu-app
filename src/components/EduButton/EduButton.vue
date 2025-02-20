<template>
  <button class="button full-width pointer" @click="onclick">{{title}}</button>
</template>

<script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    title: String,
    onclick: Function,
  });
</script>

<style lang="scss">@import 'EduButton.scss';</style>
