<script setup>
import { MessageOutlined } from '@ant-design/icons-vue';
import { Button, Col, Divider, Row } from 'ant-design-vue';
import { defineComponent } from 'vue';
defineComponent({
    components: {
        MessageOutlined,
    },
});

const items = [
    { title: 'Address', icon: 'map-marker', description: 'A108 Adam Street, New York, NY 535022' },
    { title: 'Call Us', icon: 'phone', description: '+1 5589 55488 55' },
    { title: 'Email Us', icon: 'envelope', description: 'info@example.com' },
];

</script>
<template>
    <SectionContainer id="team">
        <SectionHeader title="Contact" subtitle="Contact us" classes="flex flex-col lg:flex-row flex-wrap" />

        <div class="mt-10">
            <iframe style="border: 0; width: 100%; height: 270px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="flex flex-col lg:flex-row lg:gap-10 lg:max-w-[1000px] mx-auto">

            <div class="mt-10 flex flex-col gap-8">
                <div v-for="(item, key) of items" :key="key" class=" flex gap-4 cursor-pointer">
                    <i :class="`pi pi-${item.icon} lg:text-4xl md:text-3xl lg:mt-1 text-yellow-600 text-2xl`"></i>

                    <div>
                        <h3 class="text-lg font-medium">{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>


            <form class="mt-10 flex flex-col gap-4">
                <Row :gutter="[20, 20]">
                    <Col :xs="24" :md="12">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                    </Col>

                    <Col :xs="24" :md="12">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                    </Col>

                    <Col :xs="24" :md="24">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                    </Col>

                    <Col :xs="24" :md="24">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                    </Col>

                    <div class="flex justify-center w-full">
                        <!-- <div class="loading">Loading</div>
                    <div class="error-message"></div> -->
                        <!-- <div class="sent-message">
                        Your message has been sent. Thank you!
                    </div> -->

                        <AppButton :size="'large'" class="bg-yellow-300 text-black border-none" color="red">Send Message
                        </AppButton>
                    </div>
                </Row>

            </form>
        </div>


    </SectionContainer>
</template>