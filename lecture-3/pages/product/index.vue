<script setup>
    const {data: products}= await useFetch('https://fakestoreapi.com/products');
    const productsData = products._rawValue;
</script>
<template>
    <div v-for="product in productsData">
        <section style="border: 1px solid gray; padding: 10px; margin-bottom: 10px;">
            <div>Product id : <nuxt-link :to="`/product/${product.id}`">{{ product.id }}</nuxt-link></div>
            <div>Product decription : {{ product.description }}</div>
            <img :src="product.image" :alt="product.title" style="width: 200px; height: 200px;"/>
        </section>
    </div>
</template>