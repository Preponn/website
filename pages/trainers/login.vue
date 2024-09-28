<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2>Login</h2>
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="login" :class="{ 'disabled': loading }">{{
                        loading ? "Please Wait..." : "Login" }}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { account } from '@/services/appwrite';

export default {
    data() {
        return {
            email: '',
            password: '',
            loading: false
        };
    },
    methods: {
        login(e) {
            this.loading = true;
            e.preventDefault();
            account.createEmailPasswordSession(this.email, this.password).then(() => {
                this.$router.push('/trainers/dashboard');
            }).catch((error) => {
                console.error('Login failed', error);
            });
        }
    },

    created() {
        account.get().then(() => {
            this.$router.push('/trainers/dashboard');
        }).catch(() => {
            //
        });
    }
};
</script>
