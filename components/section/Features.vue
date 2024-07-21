<script setup>
import { Col, Row } from 'ant-design-vue';

const items = [
    { title: 'Customized Digital Solutions', icon: 'globe', description: 'We believe in tailor-made solutions that align perfectly with your business objectives and target audience.' },
    { title: 'Strategic Digital Marketing', icon: 'sitemap', description: 'Our strategic digital marketing services are crafted to drive growth and maximize ROI.' },
    { title: 'Innovative Web Development', icon: 'bullseye', description: 'Our expert developers specialize in creating responsive, user-friendly websites that deliver seamless experiences.' },
    { title: 'Creative UI/UX Design', icon: 'palette', description: 'User experience is at the heart of everything we do. ' },
];

</script>
<template>
    <SectionContainer id="features">
        <template #outContainer>
            <img src="/img/features-bg.jpg" class=" lg:hidden top-0 left-0 w-full h-full object-cover" />
        </template>
        <!-- <div :ref="target">asdasd</div> -->
        <Row :gutter="40">
            <Col span="12">
            <img src="/img/features-bg.jpg" class="hidden lg:block  top-0 left-0  object-cover" />
            </Col>

            <Col xl="12" class="flex flex-col gap-5 justify-center">
            <div v-for="(item, key) in items" :key="key" class="flex gap-3" data-aos="fade-up" data-aos-duration="700"
                :data-aos-delay="key * 100">
                <i :class="`pi pi-${item.icon} lg:text-4xl md:text-3xl lg:mt-1 text-yellow-600 text-2xl`"></i>
                <div>
                    <h4 class="text-xl font-medium lg:text-2xl">{{ item.title }}</h4>
                    <p class="text-gray-700 whitespace-normal lg:max-w-[600px]">
                        {{ item.description }}
                    </p>
                </div>
            </div>

            </Col>

        </Row>

    </SectionContainer>
</template>