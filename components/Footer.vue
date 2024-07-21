<script setup lang="ts">
import { Col, Row } from 'ant-design-vue';
</script>

<template>
    <SectionContainer id="footer" classes="text-white pb-5" wrapper-classes="bg-slate-900">
        <Row :gutter="[20,20]">
            <Col :xs="24" :md="12" :lg="8">
            <a href="#" class="logo d-flex align-items-center">
                <span class="text-yellow-600 text-xl lg:text-2xl">GP</span>
            </a>
            <div>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            </Col>

            <Col :xs="24" :md="12" :lg="4">
            <h4 class="text-lg text-yellow-600">Useful Links</h4>
            <ul>
                <li> <a href="#hero"> Home</a></li>
                <li> <a href="#about"> About us</a></li>
                <li> <a href="#services"> Services</a></li>
                <li> <a href="#"> Terms of service</a></li>
                <li> <a href="#"> Privacy policy</a></li>
            </ul>
            </Col>

            <Col :xs="24" :md="12" :lg="4">
            <h4 class="text-lg text-yellow-600">Our Services</h4>
            <ul>
                <li> <a href="#"> Web Design</a></li>
                <li> <a href="#"> Web Development</a></li>
                <li> <a href="#"> Product Management</a></li>
                <li> <a href="#"> Marketing</a></li>
                <li> <a href="#"> Graphic Design</a></li>
            </ul>
            </Col>

            <Col :xs="24" :md="12" :lg="8">
            <h4 class="text-lg text-yellow-600">Our Newsletter</h4>
            <p class="mt-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" class="php-email-form">
                <div class="flex gap-4 mt-2">
                    <input type="email" name="email" placeholder="Email">
                    <AppButton>Subscribe</AppButton>
                </div>

            </form>
            </Col>

        </Row>


        <div class="mt-8">
            <div class=" text-center text-xs">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">GP</strong> <span>All Rights Reserved</span>
                </p>
                <div class="">
                    Designed by <a href="#">Me</a>
                </div>
            </div>
        </div>

    </SectionContainer>

</template>