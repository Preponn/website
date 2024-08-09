<template>
    <main>
        <CoursePageHeader :course="course"/>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h3 class="lead fw-bold py-2" style="color:#ea8825">STAY TUNED</h3>
                    <p class="display-4 text-center">
                        This course is <span class="fw-bold" style="color:#23395d">coming soon</span> ...
                    </p>
                </div>
            </div>
        </div>
    </main>a
</template>

<script>
export default{
    data(){
        return{
            course: this.$route.params.course
        }
    },
    head(){
        return{
            title: this.course + ' | Coming Soon'
        }
    }

}
</script>
