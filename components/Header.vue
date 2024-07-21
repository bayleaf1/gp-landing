<script setup>
import { Drawer } from 'ant-design-vue';
import { useSection } from '~/utils/useSectionTracker';

const section = useSection()
const classes = computed(() => (sectionName) => {
    const defClasses = 'hover:underline hover:text-yellow-600 transition-all';
    let active = sectionName === section.value ? 'underline text-yellow-600' : '';
    return cn(defClasses, active);
})

const open = useState('open', () => false);

const showDrawer = () => open.value = true;
const closeDrawer = () => open.value = false;
</script>
<template>
    <SectionContainer id="header" classes="py-5 "
        wrapper-classes="relative bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 right-0 z-[100]">
        <div class="flex justify-between text-white ">
            <a href="#hero" class="text-2xl text-yellow-600">
                <h1 class="sitename">GP.</h1>
            </a>

            <div class="hidden md:visible text-white md:flex gap-8">
                <a href="#hero" :class="classes('hero')">Home<br></a>
                <a href="#about" :class="classes('about')">About</a>
                <a href="#services" :class="classes('services')">Services</a>
                <a href="#portfolio" :class="classes('portfolio')">Portfolio</a>
                <a href="#team" :class="classes('team')">Team</a>
            </div>

            <div class="hidden md:block"> </div>

            <div class="block md:hidden">
                <i @click="showDrawer"
                    :class="`pi pi-bars lg:text-4xl md:text-3xl mt-1 text-yellow-600 text-2xl cursor-pointer`"></i>

                <Drawer v-model:open="open" :root-style="{ color: 'white' }" style="background: rgba(0,0,0,0.8);"
                    title="Menu" placement="right">
                    <div  class="flex flex-col gap-8">
                        <a @click="closeDrawer" href="#hero" :class="classes('hero')">Home<br></a>
                        <a @click="closeDrawer" href="#about" :class="classes('about')">About</a>
                        <a @click="closeDrawer" href="#services" :class="classes('services')">Services</a>
                        <a @click="closeDrawer" href="#portfolio" :class="classes('portfolio')">Portfolio</a>
                        <a @click="closeDrawer" href="#team" :class="classes('team')">Team</a>
                    </div>
                </Drawer>
            </div>
        </div>
    </SectionContainer>

</template>