<script setup>
const props = defineProps(['foo']);
</script>

<template>
	<div class="blocks-editor">Hello World {{ foo }} !</div>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
