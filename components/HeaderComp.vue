<template>
    <header>
        <nav class="navbar navbar-light navbar-expand-xl shadow-sm">
            <div class="container d-flex justify-content-between">
                <NuxtLink to="/" class="navbar-brand fs-2" draggable="false">
                    <img src='~/assets/preponn.png' style="filter:drop-shadow(0 0 3px #ffcb60)" draggable="false"
                        height="44" />
                    <!--P--> reponn
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-3" data-hover="dropdown" id="navbarWithDropdown">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="courseDropDown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                            <div class="dropdown-menu container" aria-labelledby="courseDropDown" style="width:20rem">
                                <div class="row p-2">
                                    <div class="col-12 col-md-6">
                                        <h4 class="fs-6 fw-bold">High School Exams</h4>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/course/ap" class="nav-course-link text-muted">AP
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/pre-calculus" class="nav-course-link text-muted">
                                                    Pre Calculus</NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/ssat" class="nav-course-link text-muted">SSAT
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <h4 class="fs-6 fw-bold">College Entrance</h4>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/course/psat" class="nav-course-link text-muted">PSAT
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/act" class="nav-course-link text-muted">ACT
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/sat" class="nav-course-link text-muted">SAT
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <h4 class="fs-6 fw-bold">Math Olympiads</h4>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/course/amc-8" class="nav-course-link text-muted">AMC 8
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/amc-10" class="nav-course-link text-muted">AMC 10
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/amc-12" class="nav-course-link text-muted">AMC 12
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/aime" class="nav-course-link text-muted">AIME
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <h4 class="fs-6 fw-bold">Graduate School Test</h4>
                                        <ul>
                                            <li>
                                                <NuxtLink to="/course/gre" class="nav-course-link text-muted">GRE
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/course/gmat" class="nav-course-link text-muted">GMAT
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <NuxtLink to="/course-video" class="nav-link">Course Video</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/testimonials" class="nav-link">Testimonials</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
                        </li>
                    </ul>
                    <!-- Admin Link Aligned to the Right -->
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" id="admin">
                            <NuxtLink to="/trainers/dashboard" class="nav-link" style="font-weight: 800;">Admin
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>



<style>
.nav-course-link:hover {
    background-color: #2c3e50;
    color: white !important;
}

.nav-course-link {
    transition: 0.1s linear;
    text-decoration: none;
}



@media (min-width: 1400px) {
    nav {
        background-image: url('~/assets/preponn.png');
        background-position: right -50% top 55%;
        background-repeat: no-repeat;
    }
}
</style>
