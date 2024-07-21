<script setup>
import useSectionTracker from '../../utils/useSectionTracker'

const target = useSectionTracker('hero');

const items = [
    { title: 'Web Development', icon: 'globe' }, { title: 'Digital Marketing', icon: 'sitemap' }, { title: 'UI/UX Design', icon: 'palette' }, { title: 'E-commerce Solutions', icon: 'bullseye' },
]
</script>
<template>
    <SectionContainer id="hero" classes=" text-white  min-h-[110vh]" ref="target">
        <template #outContainer>
            <img src="/img/hero-bg.jpg" class=" absolute top-0 left-0 w-full h-full object-cover brightness-75 -z-10" />
        </template>



        <div  class=" text-center lg:max-w-[490px] mx-auto lg:mt-20">
            <h2 class="text-4xl pt-28 lg:text-6xl">Powerful Digital Solutions With GPXX<span>.</span></h2>
            <p class="text-xl lg:mt-2">We are team of talented digital marketers</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-6 text-center mt-16 lg:w-fit mx-auto lg:mt-20">
            <div v-for="(item, key) of items" :key="key"
                :class="`border-2 border-gray-500 hover:border-yellow-600 hover:text-yellow-600 py-12 transition-colors cursor-pointer lg:aspect-ratio px-8 lg:w-[270px] opacity-0`"
                data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="key * 250">
                <div class="icon-box">
                    <i :class="`pi pi-${item.icon} text-3xl text-yellow-600`"></i>
                    <h3 class="text-2xl font-medium mt-4"><a href="">{{ item.title }}</a></h3>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>