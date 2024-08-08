<template>
    <main>
        <CoursePageHeader course="AIME"/>
        <div class="container-fluid">
            <div class="row reg-btn-div justify-content-center py-2 bg-dark text-center">
                <div id="reg-btn" class="col text-white fw-bold">
                    <NuxtLink to="/course/aime/register" class="text-white heading text-decoration-none p-1 rounded-0 me-2">Register Now</NuxtLink>
                    and get your scores improved ! 
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h3 class="text-white pon-blue-bg p-2">About AIME</h3>
                    <p class="text-justify lh-4 px-3">
                        The American Invitational Mathematics Examination (AIME) is an invitation-only mathematics competition held annually for high school students who excel in mathematics. It serves as a rigorous challenge for students who have demonstrated exceptional ability on the AMC 10 or AMC 12. The AIME consists of 15 problems to be solved in three hours. Unlike the AMC exams, which are multiple-choice, the AIME requires students to calculate and submit numerical answers. This format demands a deep understanding of mathematical concepts and the ability to execute complex problem-solving strategies.
                    </p>

                    <h3 class="text-white pon-bg p-2 mt-3">Overview</h3>
                    <p class="text-justify lh-4 px-3">
                        <ul>
                            <li><b>Purpose: </b>To identify the top mathematical problem solvers in the United States and Canada.</li>
                            <li><b>Qualification: </b> Invitation based on high scores on the AMC 10 or AMC 12. </li>
                            <li><b>Format:</b> 15 problems to be solved in 3 hours.</li>
                            <li><b>Content:</b> Covers a wide range of precalculus topics, including algebra, geometry, trigonometry, number theory, and combinatorics.</li>
                            <li><b>Difficulty:</b> Problems are significantly more challenging than those on the AMC exams, requiring creativity and ingenuity.</li>
                            <li><b>Scoring:</b> Each correct answer is worth 1 point, with no penalty for incorrect answers.</li>
                            <li><b>Follow-up:</b> Top scorers on the AIME are invited to participate in the United States Mathematical Olympiad (USAMO).</li>
                            <li><b>Use in Admissions:</b> High scores on the AIME can lead to invitations to prestigious math competitions and programs.</li>
                        </ul>
                    </p>

                    <hr>

                    <p class="text-justify lh-4 px-3">
                        Due to the challenging nature of the problems, the AIME is highly selective, and a strong performance is seen as a significant accomplishment in the mathematics community. High scorers on the AIME are invited to participate in the United States Mathematical Olympiad (USAMO), the pinnacle of mathematical competition in the United States.
                    </p>

                    <p class="text-center fw-bolder fs-5 mt-5">
                        <NuxtLink to="/course/aime/register" class="pon-btn heading text-decoration-none p-1 rounded-0 me-2">Register Now</NuxtLink>and prepare for AIME with us ! 
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