<script setup>
import { Divider } from 'ant-design-vue';
import useSectionTracker from '~/utils/useSectionTracker'

const target = useSectionTracker('services');

const items = [
    { title: 'Web Development', description: 'Transform your online presence with our expert web development services.' },
    { title: 'Digital Marketing', description: 'Maximize your online visibility and reach your target audience with our strategic digital marketing services.' },
    { title: 'UI/UX Design', description: 'Create exceptional user experiences with our creative UI/UX design services.' },
    { title: 'Mobile App Development', description: `Innovate with our mobile app development expertise.` },
    { title: 'E-commerce Solutions', description: 'Drive sales and accelerate growth with our comprehensive e-commerce solutions.' },
    { title: 'Content Strategy and Creation', description: 'Engage your audience with compelling content tailored to your brand voice and audience preferences.' },
];

</script>
<template>
    <SectionContainer id="services" ref="target">

        <SectionHeader title="Services" subtitle="Check our Services" />

        <div class="flex flex-col md:flex-row gap-6 mt-10 flex-wrap">
            <div v-for="(item, key) in items" :key="key"
                class="border flex items-center justify-center h-[300px] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-2 p-4 sm:w-[30%]"
                data-aos="fade-up" data-aos-duration="700" :data-aos-delay="key * 100">
                <div class=" flex flex-col items-center justify-center">
                    <div class="icon">
                        <i class="bi bi-activity"></i>
                    </div>
                    <a href="service-details.html" class="stretched-link">
                        <h3 class="text-xl font-medium">{{ item.title }}</h3>
                    </a>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
            </div>

        </div>

    </SectionContainer>
</template>