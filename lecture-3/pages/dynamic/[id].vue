<script setup>
    const route = useRoute();
    console.log(route);
</script>
<template>
    <div>I am dynamic route and I have id of {{route.params.id}}</div>
</template>