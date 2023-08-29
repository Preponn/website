<template>
    <main>
        <CoursePageHeader course="ACT"/>
        <div class="container-fluid">
            <div class="row reg-btn-div justify-content-center py-2 bg-dark text-center">
                <div id="reg-btn" class="col text-white fw-bold">
                    <NuxtLink to="/course/act/register" class="text-white heading text-decoration-none p-1 rounded-0 me-2">Register Now</NuxtLink>
                    and get your scores improved ! 
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="row justify-content-center mt-2">
                <h3 class="h3">Structure</h3>
                <hr>
                <div class="col-12 col-lg-4 border">
                    <h2 class="mt-3 heading p-1 text-white">About ACT</h2>
                    <p class="px-2 fw-bold text-center">
                        We believe in <br>
                        <span class=" mt-2 fs-3" style="color: #ea8825;font-style: italic;">
                            "When preparation meets opportunity,
                            success follows"
                        </span>
                    </p>
                    <p class="px-2 fw-bold fs-italic" style="text-align:justify;">
                        Both the SAT and the ACT tests are nationally recognized tests in the US and are prerequisites for 
                        most University applications. These tests are used for offering merit based scholarships and contain 
                        passage-based reading and writing sections. You may choose to take either the SAT or ACT, as both are 
                        equally recognized. However, it is a good idea to take a practice test for each, before identifying 
                        which one to take. Also, if you are opting for STEM education, you would rather show your Science score on the ACT. Additionally, the ACT questions are slightly easier. Having said that, while the SAT provides more time per question than the ACT, the SAT Reading questions follow a chronological order, unlike that of the ACT. You may also use a calculator throughout the ACT Math section. Neither has negative marking, naturally welcoming educated guesses. 
                        As some highly ranked schools ask for both the SAT and ACT these days, it is often a good idea to send 
                        both, provided you have high scores. Similar scores in both would not count for much. A 1600 on the 
                        SAT is comparable to a 36 on the ACT and Colleges do not discriminate between the two tests. In fact, 
                        since 2000, the ACT has been overtaking the SAT in terms of popularity.
                    </p>
                </div>
                <div class="col-12 col-lg-8 mt-2 mt-lg-0">
                    <div class="p-2 border">
                        <h4 class="subhead text-white px-2">ACT Exam Structure</h4>
                        <p class="text-center">ACT comprises of 4 sections. <br>
                            Their questions and mark distribution are as follows:
                        </p>
                        <div class="row px-4 justify-content-center">
                            <table class="table">
                                <thead class="heading text-white fs-6" style="border-bottom:2px dotted #EA8825;">
                                    <tr>
                                        <th scope="col">Section</th>
                                        <th scope="col">Questions</th>
                                        <th scope="col">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">English</th>
                                        <td>75 questions</td>
                                        <td>45 marks</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Math</th>
                                        <td>60 questions</td>
                                        <td>60 marks</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Reading</th>
                                        <td>40 questions</td>
                                        <td>35 marks</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Science</th>
                                        <td>40 questions</td>
                                        <td>35 marks</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Writing (optional)</th>
                                        <td>1 essay</td>
                                        <td>40 marks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="p-2 mt-2 border text-center">
                        More details <span class="fw-bold" style="color:#23395d">coming soon...</span>
                    </div>
                    <div class="p-2 pt-3 mt-2 text-center border">
                        <p class="m-0"><a href="/course/act/register" class="btn btn-primary subhead rounded-0">Register Now</a> to get started.</p>
                        <hr>
                        <p class="fst-italic lh-md fw-bold">
                
                            Being a work-in-progress, excellence is what we are after. Not only 
                            do we help focus on aptitude tests, but we also help shape aptitude. Our passion enables us to continue our research to constantly 
                            evolve by integrating industry-insights, and be committed to excellence, ensuring that not a single stone is left unturned in you 
                            quest for the perfect higher education. Having said that, we believe that every dream counts. Therefore, we are developing scholarships 
                            for marginalized students.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    #reg-btn{
        animation: breathe infinite 1s;
    }
    @keyframes breathe{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
    #reg-btn:hover{
        animation: none;
    }
    .heading{
        background-color: #ea8825;
    }

    .subhead{
        background-color: #23395d;
        border: none;
    }
</style>
