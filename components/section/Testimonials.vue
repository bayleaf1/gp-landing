<script setup>
import { Carousel } from 'ant-design-vue';

const items = [
    { name: 'Saul Goodman', role: 'Ceo Founder', src: "/img/testimonials/testimonials-1.jpg", description: `"Working with GP was a game-changer for our online presence. Their strategic approach and attention to detail helped us double our conversion rates within months."` },
    { name: 'Sara Wilsson', role: 'Designer', src: "/img/testimonials/testimonials-2.jpg", description: `"I can't recommend GP enough! Their team not only delivered a stunning website but also provided ongoing support that has been invaluable to our business growth."` },
    { name: 'Jena Karlis', role: 'Store Owner', src: "/img/testimonials/testimonials-3.jpg", description: `"From concept to execution, GP exceeded our expectations. They understood our vision and translated it into a user-friendly platform that has received rave reviews from our customers."` },
    { name: 'Matt Brandon', role: 'Freelancer', src: "/img/testimonials/testimonials-4.jpg", description: `"Choosing GP was one of the best decisions we made. Their expertise in SEO and digital marketing strategies has significantly boosted our online visibility and revenue."` },
    { name: 'John Larson', role: 'Entrepreneur', src: "/img/testimonials/testimonials-5.jpg", description: `"Professionalism, creativity, and a genuine passion for what they do—GP embodies all these qualities and more. They're not just a service provider; they're a true partner in our success."` },
];

</script>
<template>
    <SectionContainer id="testimonials">
        <template #outContainer>
            <img src="/img/testimonials-bg.jpg"
                class=" absolute top-0 left-0 w-full h-full object-cover brightness-75 -z-10" />
        </template>


        <Carousel autoplay :dots="false">
            <div v-for="(item, key) of items" :key="key" class="flex flex-col justify-center items-center text-center text-white">
                <img :src="item.src" alt="" class="w-28 h-28  border-4 rounded-full mx-auto" />
                <h3 class="text-xl font-semibold">{{ item.name }}</h3>
                <h4 class="text-gray-200">{{ item.role }}</h4>
                <p class="mt-4 text-lg md:max-w-[450px] mx-auto">
                  <span>{{ item.description }}</span>
                </p>
            </div>
        </Carousel>

    </SectionContainer>
</template>