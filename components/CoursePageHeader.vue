<template>
    <div class="container-fluid h-100">
        <div class="container my-auto">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="display-1 fw-normal text-white">{{course.toUpperCase()}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CoursePageHeader',
        props: {
            course: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.container-fluid{
    background-image: url('~/assets/act.jpg');
    height: 20rem;
    background-position: 50% 50%;
    background-size: cover
}
</style>