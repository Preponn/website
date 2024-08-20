<template>
    <main>
        <CoursePageHeader course="SSAT"/>
        <div class="container-fluid">
            <div class="row reg-btn-div justify-content-center py-2 bg-dark text-center">
                <div id="reg-btn" class="col text-white fw-bold">
                    <NuxtLink to="/course/ssat/register" class="text-white heading text-decoration-none p-1 rounded-0 me-2">Register Now</NuxtLink>
                    and get your scores improved ! 
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h3 class="text-white pon-blue-bg p-2">About SSAT</h3>
                    <p class="text-justify lh-4 px-3">
                        The Secondary School Admission Test (SSAT) is a standardized assessment designed to evaluate a student's readiness for admission to independent schools in grades four through eleven. It serves as a crucial component of the admissions process, providing schools with insights into a student's academic abilities and potential.
                    </p>

                    <h3 class="text-white pon-bg p-2 mt-3">Overview</h3>
                    <p class="text-justify lh-4 px-3">
                        <ul>
                            <li><b>Purpose:</b> The SSAT is a standardized test used for admissions to independent schools in grades 4-11.</li>
                                    <li><b>Test Sections:</b>
                                        <ul>
                                            <li><b>Quantitative:</b> Mathematical problem-solving, including arithmetic, algebra, geometry, and data analysis.</li>
                                            <li><b>Verbal Reasoning:</b> Vocabulary, reading comprehension, and analogical reasoning.</li>
                                            <li><b>Reading Comprehension: </b>Critical reading and analysis of passages.</li>
                                            <li><b>Writing Sample: </b>An unscored essay to assess writing ability.</li>
                                        </ul>
                                    </li>
                                    <li><b>Test Format:</b> Multiple-choice questions and an essay.</li>
                                    <li><b>Scoring:</b> A scaled score is reported for each section, with percentile rankings provided for comparison.</li>
                                    <li><b>Test Administration:</b>  Offered multiple times throughout the year at designated testing centers.</li>
                                    <li><b>Use in Admissions:</b>  Schools use SSAT scores as one factor in the admissions process, along with academic records, interviews, and other criteria.</li>
                                </ul>
                    </p>
                    <hr>

                    <p class="text-justify lh-4 px-3">
                        The SSAT is administered multiple times throughout the year and results in a scaled score for each section. These scores, combined with other factors such as academic performance and extracurricular activities, are considered by admissions committees when making their decisions.
                    </p>

                    <p class="text-center fw-bolder fs-5 mt-5">
                        Still not sure? &nbsp;
                        <NuxtLink to="/course/ssat/session" class="pon-btn heading text-decoration-none p-1 rounded-0 me-2">Click here </NuxtLink>to book a free session ! 
                    </p>
                    
                </div>
            </div>
            
        </div>
    </main>
</template>

<style scoped>
main {
    line-height: 32px;
    font-size: 19px;
}
</style>