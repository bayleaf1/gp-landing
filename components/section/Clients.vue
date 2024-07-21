<script setup>
import { Carousel, Image } from 'ant-design-vue';
import { defineComponent } from 'vue';
defineComponent({
    components: {
        Carousel
    },
});
const items = [
    { src: '/img/clients/client-1.png' },
    { src: '/img/clients/client-2.png' },
    { src: '/img/clients/client-3.png' },
    { src: '/img/clients/client-4.png' },
    { src: '/img/clients/client-5.png' },
    { src: '/img/clients/client-6.png' },
    { src: '/img/clients/client-7.png' },
    { src: '/img/clients/client-8.png' },
]
const responsive = [
    {
        breakpoint: 10000,
        settings: {
            slidesToShow: 4.5,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1.5,
        }
    }
];
</script>
<template>
    <SectionContainer classes="px-0" id="clients">
        <Carousel autoplay :responsive="responsive" :autoplay-speed="1300" :infinite="true" :dots="false">
            <div v-for="(item, key) in items" :key="key" class="h-[80px] px-5">
                <img :src="item.src" alt="" class="h-[80px]" />
            </div>
        </Carousel>
    </SectionContainer>
</template>