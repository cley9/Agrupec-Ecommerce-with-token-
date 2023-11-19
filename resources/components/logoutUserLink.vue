<template>
    <!-- <router-link :to="{ name: 'logout.user.index' }">Cerrar Sesión</router-link> -->
    <li class="mb-3">
        <a class="mb-4" href="/logout" @click="logout()">Cerrar Sesion </a>
    </li>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            const localStorage = window.localStorage;
            localStorage.removeItem('userObj');
        },
    }
}
</script>

<style></style>