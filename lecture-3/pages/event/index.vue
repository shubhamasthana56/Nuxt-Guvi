<script setup>
    definePageMeta({
        layout: "custom"
    })
    const {sayHello} = usePrint();
    sayHello();
</script>
<template>
    <div>I am event root!</div>
</template>