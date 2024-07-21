<script setup>
import { MessageOutlined } from '@ant-design/icons-vue';
import { Divider } from 'ant-design-vue';
import { defineComponent } from 'vue';
defineComponent({
    components: {
        MessageOutlined,
    },
});

const items = [
    {
        title: 'Years of Experience', icon: 'chart-bar',
        count: 10, description: 'we bring over a decade of expertise in digital strategy, design, and development to every project.'
    },
    { title: 'Successful Projects', icon: 'chart-line', count: 450, description: `we've collaborated with businesses of all sizes, delivering impactful digital solutions that drive growth and engagement.` },
    { title: 'Hours Of Support', icon: 'clock', count: 5000, description: 'we are available 24/7 to help our customers.' },
    { title: 'Hard Workers', icon: 'users', count: 340, description: 'are ready to develop the digital solutions with the newest technologies.' },
];

</script>
<template>
    <SectionContainer id="stats" classes="flex flex-col lg:flex-row lg:gap-6 items-center">

        <div class="lg:basis-[80%] grow">
            <img src="/img/stats-img.jpg" alt="missing" />
        </div>

        <div class="">
            <h3 class="text-2xl font-semibold mt-8 lg:text-3xl">
                Why Choose GP?
            </h3>

            <div class="flex flex-col gap-4 mt-6">
                <div v-for="(item, key) of items" :key="key" 
                 data-aos="fade-up" data-aos-duration="700" :data-aos-delay="key * 100"
                >
                    <div class="flex gap-6 ">
                        <i :class="`pi pi-${item.icon} lg:text-4xl md:text-3xl lg:mt-1 text-yellow-600 text-2xl`"></i>
                        <div>
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                class="text-3xl font-semibold lg:text-5xl">{{ item.count }}</span>
                            <p>
                                <strong>{{ item.title }}</strong> {{ " " }}
                                <span>{{ item.description }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </SectionContainer>
</template>