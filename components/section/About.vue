<script setup>
import { CheckOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
defineComponent({
    components: {
        CheckOutlined,
    },
});
const target = useSectionTracker('about');

const items = [
    { title: 'Our team comprises seasoned professionals with diverse skill sets and industry insights, ensuring comprehensive solutions tailored to your specific needs' },
    { title: 'We stay ahead of the curve, embracing emerging technologies and trends to deliver forward-thinking solutions that keep you ahead of the competition.' },
    { title: 'We believe in the power of collaboration. By working closely with our clients, we forge strong partnerships built on trust, transparency, and mutual success.' },
]
</script>
<template>
    <SectionContainer id="about" classes="flex flex-col lg:flex-row lg:gap-6" ref="target">
        <div class="basis-[45%] grow lg:order-2">
            <img src="assets/img/about.jpg" class="" alt="" />
        </div>
        <div class="lg:grow lg:basis-[45%] lg:mt-14 ">
            <h3 class="text-2xl font-semibold mt-5 lg:text-4xl">About us</h3>
            <p class="mt-2 lg:text-xl">
                Welcome to GP. where creativity meets innovation in the digital realm. Founded with a passion for
                transforming businesses through cutting-edge technology and strategic thinking, we are dedicated to
                delivering exceptional digital solutions that drive growth and exceed expectations. Why you should
                choose us:
            </p>
            <ul class="flex flex-col gap-3 mt-3">
                <li v-for="(item, key) of items" :key="key">
                    <check-outlined class="text-yellow-600 mr-2" />
                    <span class="lg:text-xl">{{ item.title }}</span>
                </li>
            </ul>
        </div>
    </SectionContainer>
</template>