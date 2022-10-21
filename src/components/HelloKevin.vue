<script setup>
import { ref } from 'vue';

    const message = ref('')

</script>

<template>
    <input type="text" v-model="message">
    <h1>Hello, {{message}}</h1>
</template>

<style scoped>

</style>