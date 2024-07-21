<script setup>
import { Divider } from 'ant-design-vue';
let { title, subtitle } = defineProps(['title', 'subtitle']);

</script>
<template>
    <div class="flex gap-2 items-center">
        <h2 class="font-semibold uppercase">{{ title }}</h2>
        <div class="my-0 h-[1px] md:max-w-[150px] lg:max-w-[200px] w-full  bg-yellow-300" />
    </div>
    <p class="text-2xl font-semibold uppercase lg:text-4xl">{{ subtitle }}</p>
</template>