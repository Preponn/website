<template>
    <main>
        <div class="container-fluid">
            <div class="container h-100 py-4">
                <div class="row align-items-center h-100">
                    <div class="col text-white bg-gradient rounded-start align-self-center"
                        style="background-color:#ea8825">
                        <div class="display-1 fw-bold ps-4">Trainer's Dashboard</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-12 ">
                    <h2 class="pon-blue">Welcome Trainer!</h2>
                    <h4 class="text-muted
                    ">You can view your courses here.</h4>
                </div>
                <div class="col-12">
                    <ul class="list-group" v-if="this.students">
                        <li class="list-group-item" v-for="(s, i) in this.students" :key="i">
                            <h4>{{ s.name }}</h4>
                            <button type="button" class="btn btn-primary"
                                @click="markAttendance(true, s)">Present</button>
                            &nbsp;
                            <button type="button" class="btn btn-danger"
                                @click="markAttendance(false, s)">Absent</button>
                        </li>
                    </ul>
                </div>
                <br>
            </div>
            <br>
            <button type="submit" class="btn btn-danger" @click="logout">Logout</button>

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

        markAttendance(present, students) {
            databases.createDocument(databaseID, attendanceCollectionID, ID.unique(), {
                present: present,
                students: students.$id,
                subject: this.subject.$id,
                date: new Date(),
            }).then((d) => {
                console.log(d);
                alert('Attendance marked');
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