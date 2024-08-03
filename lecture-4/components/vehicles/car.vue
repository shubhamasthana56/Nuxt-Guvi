<script setup>
    const props = defineProps({
        carCategory: {
            type: String,
            required: true
        }
    });
    const {carCategory} = props;
</script>
<template>
    <div>I am a car of type {{carCategory}}</div>
</template>