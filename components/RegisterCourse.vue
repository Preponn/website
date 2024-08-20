<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-6 p-3">
                <h1 class="pon-blue-bg text-white py-3 px-2">Register for {{ course }}</h1>
                <h4 class="mb-3 pon-blue">Fill up this form. We will get in touch with you.</h4>
                <form action="https://script.google.com/macros/s/AKfycbypg5ULp0gqoOf9hlgpNRGUIzJsfZVW20UHfak9GLwvizN4DEJCEdOPS3w_T634STYcZQ/exec" method="POST">
                    <div class="mb-3">
                        <label for="name" class="form-label" required>Name</label>
                        <input type="text" name="Name" class="form-control" id="name" v-model="sname" required>
                    </div>
                    <div class="mb-3">
                        <label for="country" class="form-label" required>Country</label>
                        <input type="text" name="Country" class="form-control" v-model="country" id="country">
                    </div>
                    <div class="mb-3">
                        <label for="school" class="form-label" required>School</label>
                        <input type="text" name="School" class="form-control" v-model="school" id="school">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label" required>Phone Number</label>
                        <input type="tel" name="Number" class="form-control" v-model="phone" id="phone">
                        <div id="phoneHelp" class="form-text">Please include your country code.</div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label" required>Email Address</label>
                        <input type="email" name="Email" class="form-control" v-model="email" id="email">
                    </div>
                    <input type="hidden" name="Course" :value="course">
                    <button type="submit" class="btn pon-btn" @click="registerCourse" :class="{'disabled' : loading}">{{ loading ? "Please Wait..." : "Register" }}</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import swal from 'sweetalert';
    export default{
        props: ['course'],
        data : function(){
            return {
                sname : '',
                school : '',
                phone : '',
                email : '',
                country : '',
                loading : false
            }
        },
        methods : {
            registerCourse(e){
                e.preventDefault()
                if(this.sname == '' || this.school == '' || this.phone == '' || this.email == ''){
                    swal('Please fill all the fields !', {
                        icon: 'error',
                        buttons : {
                            confirm : {
                                text : 'Okay',
                                className : "pon-btn"
                            }
                        }
                    })
                    return
                }
                // this.$mail.send({
                //     from: 'register@preponn.com',
                //     subject: 'New registration : ' + this.course,
                //     text: 
                //         `Hello there, there is a new registration for ${this.course}. Here are the details : \n
                //         Name : ${this.sname} \n
                //         School : ${this.school} \n
                //         Phone : ${this.phone} \n
                //         Email : ${this.email} \n
                //         Country : ${this.country}
                //         `,
                // }).then(() => {
                //     console.log('Mail sent successfully')
                this.loading = true
                    fetch('https://script.google.com/macros/s/AKfycbypg5ULp0gqoOf9hlgpNRGUIzJsfZVW20UHfak9GLwvizN4DEJCEdOPS3w_T634STYcZQ/exec', {
                        method: 'POST',
                        body: new FormData(document.querySelector('form'))
                    }).then(() => {
                        swal({
                            title : "Thank you for registering !",
                            text : "We will get back to you soon.",
                            icon: "success",
                            buttons : {
                                confirm : {
                                    text : 'Okay',
                                    className : "pon-btn"
                                }
                            }
                        }).then(() => {
                            this.$router.push(this.$route.path.split('/').slice(0, -1).join('/'))
                        })
                    }).catch((err) => {
                        console.log(err)
                        swal('Something went wrong !', {
                            icon: 'error',
                            buttons : {
                                confirm : {
                                    text : 'Okay',
                                    className : "pon-btn"
                                }
                            }
                        })
                    },
                    )}
            }
        }

</script>
