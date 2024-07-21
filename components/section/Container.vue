<script setup>
import { defineProps } from 'vue';
import cn from '~/utils/cn';
let { classes, id, wrapperClasses, ref } = defineProps(['classes', 'id', 'wrapperClasses', 'ref']);
</script>
<template>
    <div :class="cn('w-full relative', wrapperClasses)" ref="ref">
        <slot name="outContainer"/>
        <div :class="cn('max-w-[1440px] mx-auto px-5 py-14', classes)" :id="id">
            <slot />
        </div>
    </div>

</template>