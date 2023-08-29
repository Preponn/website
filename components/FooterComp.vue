<template>
    <footer class=" mt-5 py-3 border-top border-warning">
        <div class="container">
            <div class="row justify-content-between align-items-start">
                <div class="col-12 col-sm-7 col-md-6 col-lg-8 d-flex flex-wrap">
                    <div class="col-12 col-md-6">
                        <h4 class="fs-6 fw-bold">High School Exams</h4>
                        <ul>
                            <li><NuxtLink to="/course/ap" class="nav-course-link text-black">AP</NuxtLink></li>
                            <li><NuxtLink to="/course/pre-calculus" class="nav-course-link text-black">Pre Calculus</NuxtLink></li>
                            <li><NuxtLink to="/course/ssat" class="nav-course-link text-black">SSAT</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <h4 class="fs-6 fw-bold">College Entrance</h4>
                        <ul>
                            <li><NuxtLink to="/course/psat" class="nav-course-link text-black">PSAT</NuxtLink></li>
                            <li><NuxtLink to="/course/act" class="nav-course-link text-black">ACT</NuxtLink></li>
                            <li><NuxtLink to="/course/sat" class="nav-course-link text-black">SAT</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <h4 class="fs-6 fw-bold">Math Olympiads</h4>
                        <ul>
                            <li><NuxtLink to="/course/amc-8" class="nav-course-link text-black">AMC 8</NuxtLink></li>
                            <li><NuxtLink to="/course/amc-10" class="nav-course-link text-black">AMC 10</NuxtLink></li>
                            <li><NuxtLink to="/course/amc-12" class="nav-course-link text-black">AMC 12</NuxtLink></li>
                            <li><NuxtLink to="/course/aime" class="nav-course-link text-black">AIME</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <h4 class="fs-6 fw-bold">Graduate School Test</h4>
                        <ul>
                            <li><NuxtLink to="/course/gre" class="nav-course-link text-black">GRE</NuxtLink></li>
                            <li><NuxtLink to="/course/gmat" class="nav-course-link text-black">GMAT</NuxtLink></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-5 col-md-6 col-lg-4">
                    <h5 class="h5 fs-6 fw-bold"><NuxtLink to="/about#faculty" class="text-decoration-none footer-link-head">Our Faculty</NuxtLink></h5>
                    <h5 class="h5 fs-6 fw-bold"><NuxtLink to="/contact" class="text-decoration-none footer-link-head">Contact Us</NuxtLink></h5>
                    <h5 class="h5 fs-6 fw-bold"><NuxtLink to="/about" class="text-decoration-none footer-link-head">About Us</NuxtLink></h5>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="text-center">
                    <a class="text-decoration-none m-2" href="https://www.facebook.com/preponnedu?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-facebook" size="lg" :style="{color : '#ea8825'}"/></a>
                    <a class="text-decoration-none m-2" href="https://instagram.com/preponn_international?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-instagram" size="lg" :style="{color : '#ea8825'}"/></a>
                    <a class="text-decoration-none m-2" href="https://www.linkedin.com/in/preponn-education-20aa09229" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" :style="{color : '#ea8825'}"/></a>
                    <a class="text-decoration-none m-2" href="https://youtube.com/@preponneducation5196" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-youtube" size="lg" :style="{color : '#ea8825'}"/></a>
                </div>
                <div class="text-center text-muted">
                    &copy; 2023 Preponn | All rights reserved
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
    footer{
        background-color: rgba(255, 255, 255, 0.342);
    }
</style>
