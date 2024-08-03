<script setup>
    const counter = useCounter();
</script>
<template>
    <div>{{ counter }}</div>
    <div @click="counter++">+</div>
    <div @click="counter--">-</div>
    <Counter/>
</template>