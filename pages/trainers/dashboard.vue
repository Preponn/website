<template>
    <main>
        <LoaderComp :visible="loading" />
        <div class="container-fluid">
            <div class="container h-100 py-4">
                <div class="row align-items-center h-100">
                    <div class="col text-white bg-gradient rounded-start align-self-center"
                        style="background-color:#ea8825">
                        <div class="display-1 fw-bold ps-4">Trainers Dashboard</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 v-if="this.trainer" style="padding: 5px 0px; float: left;">Welcome, {{ this.trainer.name }}!
                    </h1>
                    <button type="submit" class="btn btn-danger"
                        style="float: right; position: relative; top: 10px; right: 10px;" @click="logout">
                        Logout
                    </button>
                </div>


                <div class="col-12 pb-4">
                    <h2 class="pon-blue" v-if="this.subject">Subject: {{ this.subject.name }}
                    </h2>
                </div>

                <!-- <div class="col-2">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">
                            Attendance
                        </a>
                    </div>
                </div> -->


                <div class="col-10">
                    <h2 style="border-bottom: 1px solid black;" class="pb-2">Attendance: <button type="submit"
                            class="btn btn-primary" style="float: right; position: relative;" @click="addStudent">
                            + Add Student
                        </button></h2>

                    <div class="row">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Student</th>
                                    <th scope="col">Present/Absent</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(student, index) in this.students" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ student.name }}</td>
                                    <td>
                                        <button type="button" class="btn btn-success"
                                            @click="markAttendance(true, student)"
                                            v-if="student.present == undefined">Present</button>
                                        &nbsp;
                                        <button type="button" class="btn btn-danger"
                                            @click="markAttendance(false, student)"
                                            v-if="student.present == undefined">Absent</button>
                                    </td>
                                    <td>
                                        {{ student.present === true ? 'Present' : student.present === false ? 'Absent'
                                            : "Not Marked" }}
                                    </td>
                                    <td>
                                        {{ new Date().toLocaleDateString() }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <!-- <div class="col-12">
                //     <ul class="list-group" v-if="this.students">
                //         <li class="list-group-item" v-for="(s, i) in this.students" :key="i">
                //             <h4>{{ s.name }}</h4>
                //             <button type="button" class="btn btn-primary"
                //                 @click="markAttendance(true, s)">Present</button>
                //             &nbsp;
                //             <button type="button" class="btn btn-danger"
                //                 @click="markAttendance(false, s)">Absent</button>
                //         </li>
                //     </ul>
                // </div> -->
                <br>
            </div>
            <br>


        </div>


    </main>

</template>

<script>
import { account } from '@/services/appwrite';
import { ID } from 'appwrite';
import LoaderComp from '~/components/LoaderComp.vue';
import { databases } from '~/services/appwrite';
import swal from 'sweetalert';

const databaseID = "66effc34001ccdbe842a";
const trainerCollectionID = "66effcb4000252883dcf";
const attendanceCollectionID = "66efff850030bf04993b";
const studentCollectionID = "66effd4d000943b5e9c0";

export default {
    components: {
        LoaderComp
    },
    data() {
        return {
            trainer: null,
            subject: null,
            students: [],
            account: null,
            present: null,
            loading: true,
        };
    },

    methods: {
        logout() {
            account.deleteSession('current').then(() => {
                this.$router.push('/');
            }).catch((error) => {
                console.error('Logout failed', error);
            });
        },


        getTrainer() {
            return databases.getDocument(databaseID, trainerCollectionID, this.account.$id).then((d) => {
                console.log(d);
                this.trainer = d;
                this.subject = d.subject;
                this.students = d.subject.students;
            })
        },

        addStudent() {
            swal({
                title: "Add Student",
                text: "Enter student name",
                content: "input",
                button: {
                    text: "Add",
                    closeModal: false,
                },
            }).then((name) => {
                if (!name) throw null;

                databases.createDocument(databaseID, studentCollectionID, ID.unique(), {
                    name: name,
                    subject: [this.subject.$id],

                }).then((d) => {
                    console.log(d);
                    this.students.push(d);
                    swal("Student added successfully", {
                        icon: "success",
                    });
                }).catch((error) => {
                    console.error('Add student failed', error);
                });
            });
        },

        markAttendance(present, students) {
            databases.createDocument(databaseID, attendanceCollectionID, ID.unique(), {
                present: present,
                students: students.$id,
                subject: this.subject.$id,
                date: new Date(),
            }).then((d) => {
                console.log(d);
                students.present = present;
                // this.present = d.present;
                // alert('Attendance marked');
            })
        }
    },

    created() {
        account.get().then((d) => {
            console.log(d);
            this.account = d;
            this.getTrainer().catch(() => {
                const newDocument = {
                    name: d.name,
                };
                databases.createDocument(databaseID, trainerCollectionID, d.$id, newDocument).then((createdDocument) => {
                    console.log(createdDocument);
                    this.getTrainer();
                })
            });
            this.$router.push('/trainers/dashboard');
        }).catch(() => {
            this.$router.push('/trainers/login');
        }).finally(() => {
            this.loading = false;
        });
    }
}


</script>

<style scoped>
.container-fluid {
    background-image: url('/assets/dashboard-background.jpeg');
    height: 18rem;
    background-position: 50% 50%;
    background-size: cover;
}
</style>