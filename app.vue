
import { NuxtPage } from '#build/components';

import { NuxtLayout } from '#build/components';
<script setup>
  const {sayHello} = usePrint();
    sayHello("Greeting from Root Compoent !");
    const {$getAppEnvironment} = useNuxtApp()
    console.log($getAppEnvironment());
    useSeoMeta({
      title: "Our first Nuxt application",
      ogTitle: "Our first Nuxt application"
    })
</script>
<template>
  <div>
    <!-- <img src="~/assets/GUVI1.jpg" alt="guvi-background"/> -->
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
