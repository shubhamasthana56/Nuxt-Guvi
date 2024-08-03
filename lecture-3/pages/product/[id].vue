<script setup>
    const {id} = useRoute().params
    const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`);
    console.log(product);
</script>
<template>
    <div>{{ product.id }}</div>
    <div>{{ product.description }}</div>
    <div>{{ product.price }}</div>
</template>