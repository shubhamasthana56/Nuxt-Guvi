
<script setup>
    const {sayHello} = usePrint();
    sayHello("Greeting from birthday component!");
</script>
<template>
    <div>I am birthday event!</div>
    <Cards/>
    <VehiclesCar :carCategory="'XUV/ Kids Playing Car'"/>
</template>

<!-- /event/birthday -->