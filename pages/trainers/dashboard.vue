<template>
    <main>
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
                        style="float: right; position: relative; top: 10px; right: 10px;" @click="logout"
                        :class="{ 'disabled': loading }">{{ loading ? "Logging Out..." : "Logout" }}</button>
                </div>


                <div class="col-12">
                    <h2 class="pon-blue" v-if="this.subject" style="padding: 5px 0px;">Subject: {{ this.subject.name }}
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
                                        @click="markAttendance(true, student)">Present</button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger"
                                        @click="markAttendance(false, student)">Absent</button>
                                </td>
                                <td>
                                    {{ present }}
                                </td>
                                <td>
                                    {{ new Date().toLocaleDateString() }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
import { databases } from '~/services/appwrite';

const databaseID = "66effc34001ccdbe842a";
const trainerCollectionID = "66effcb4000252883dcf";
const attendanceCollectionID = "66efff850030bf04993b";

export default {
    data() {
        return {
            trainer: null,
            subject: null,
            students: [],
            account: null,
            present: null,
            loading: false,
        };
    },

    methods: {
        logout() {
            this.loading = true;
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

        markAttendance(present, students) {
            databases.createDocument(databaseID, attendanceCollectionID, ID.unique(), {
                present: present,
                students: students.$id,
                subject: this.subject.$id,
                date: new Date(),
            }).then((d) => {
                console.log(d);
                this.present = d.present;
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