<script setup>
import { Divider } from 'ant-design-vue';
import useSectionTracker from '~/utils/useSectionTracker'
const target = useSectionTracker('team');

const items = [
    { name: 'Walter White', role: 'Chief Executive Officer', src: '/img/team/team-1.jpg' },
    { name: 'Sarah Jhonson', role: 'Product Manager', src: '/img/team/team-2.jpg' },
    { name: 'William Anderson', role: 'CTO', src: '/img/team/team-3.jpg' },
    { name: 'Amanda Jepson', role: 'Accountant', src: '/img/team/team-4.jpg' },
];

</script>
<template>
    <SectionContainer id="team" ref="target">
        <SectionHeader title="Services" subtitle="our team"/>

        <div class="flex flex-col lg:flex-row lg:justify-center gap-8 mt-10 flex-wrap mx-auto w-fit ">

            <div  v-for="(item, key) of items" :key="key"  class="shadow-md basis-1/3">
                <div class="w-full">
                    <img :src="item.src" class="object-cover w-full"  alt="" />
                </div>
                <div class="py-6 px-3">
                    <h4 class="text-lg font-medium">{{ item.name }}</h4>
                    <span>{{ item.role }}</span>
                </div>
            </div>



        </div>


    </SectionContainer>
</template>