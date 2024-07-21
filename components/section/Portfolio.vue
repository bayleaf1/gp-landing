<script setup>
import { Divider } from 'ant-design-vue';
import useSectionTracker from '~/utils/useSectionTracker'

const target = useSectionTracker('portfolio');
const items = [
    {
        "title": "EcoHub Solutions",
        "description": "Discover sustainable living with EcoHub Solutions. Our platform showcases eco-friendly products, sustainable practices, and informative articles to inspire a greener lifestyle.",
        src: '/img/masonry-portfolio/masonry-portfolio-1.jpg'
    },
    {
        "title": "HealthTech Connect",
        "description": "Revolutionize healthcare with HealthTech Connect. Our website connects medical professionals with cutting-edge technologies, fostering innovation and improving patient care worldwide.",
        src: '/img/masonry-portfolio/masonry-portfolio-2.jpg'
    },
    {
        "title": "Adventure Seeker Travel",
        "description": "Embark on unforgettable journeys with Adventure Seeker Travel. Explore exotic destinations, book unique experiences, and find travel tips to satisfy your wanderlust.",
        src: '/img/masonry-portfolio/masonry-portfolio-3.jpg'
    },
    {
        "title": "Pet Pals Haven",
        "description": "Welcome to Pet Pals Haven, where pet lovers unite. Discover pet care tips, adopt furry companions, and connect with a community dedicated to all things pets.",
        src: '/img/masonry-portfolio/masonry-portfolio-4.jpg'
    },
    {

        "title": "Artisanal Eats",
        "description": "Savor the flavors of Artisanal Eats. Our site celebrates culinary craftsmanship, featuring gourmet recipes, chef interviews, and a marketplace for artisanal food products.",
        src: '/img/masonry-portfolio/masonry-portfolio-5.jpg'
    },
    {
        "title": "TechTrend Insights",
        "description": "Stay ahead in tech with TechTrend Insights. Explore the latest industry trends, expert analyses, and in-depth reviews of gadgets and software shaping the digital landscape.",
        src: '/img/masonry-portfolio/masonry-portfolio-6.jpg'
    },
    {
        title: 'Foodie Haven',
        description: 'Indulge your culinary curiosity at Foodie Haven. From gourmet recipes to restaurant reviews, satisfy your cravings and explore the world of gastronomy.',
        src: '/img/masonry-portfolio/masonry-portfolio-7.jpg'
    },
    {
        title: 'Tech Talk',
        description: 'Stay informed with Tech Talk. Get the latest tech news, product reviews, and expert insights into gadgets and innovations shaping the future.',
        src: '/img/masonry-portfolio/masonry-portfolio-8.jpg'
    },
];

</script>
<template>
    <SectionContainer id="portfolio" ref="target">
        <SectionHeader title="Portfolio" subtitle="Check our Portofolio" />
        <div class="flex flex-col md:flex-row flex-wrap gap-10 mt-10">
            <div v-for="(item, key) of items" :key="key" class="relative grow lg:w-1/4 h-fit" data-aos="fade-up"
                data-aos-duration="700" :data-aos-delay="key * 100">
                <img :src="item.src" alt="" />
                <div
                    class="absolute top-0 left-0 bottom-0 right-0 bg-[rgb(1,1,0,0.5)] p-10 transition-all cursor-pointer opacity-0 hover:opacity-100 flex flex-col justify-center items-center ">
                    <h4 class="text-white text-2xl">{{ item.title }}</h4>
                    <p class="text-white text-center"> {{ item.description }}</p>
                </div>
            </div>
        </div>

    </SectionContainer>
</template>