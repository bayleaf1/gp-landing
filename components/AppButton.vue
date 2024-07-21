<script setup>
import { Button } from 'ant-design-vue';
const { classes } = defineProps(['classes'])
</script>
<template>
    <Button :size="'large'" :class="cn('bg-yellow-300 text-black border-none', classes)" color="red"><slot/></Button>
</template>
