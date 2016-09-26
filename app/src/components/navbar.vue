<template>
    <nav>
        <div class="nav-wrapper blue darken-4">
            <a href="#" class="brand-logo logo">DINAF</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a v-link="'/organization/map'">Mapa de organizaciones</a>
                </li>
                <li>
                    <a v-link="'/'">Listar organizaciones</a>
                </li>
                <li >
                    <a  v-link="{path: '/organization/new'}">Agregar organización</a>
                </li>
                <li  v-if="!isLoggedIn">
                    <a v-link="{path: '/login'}">Login</a>
                </li>
                <li v-else>
                    <span>Welcome {{currentUser.scope}} </span><a v-on:click="logout()" class="waves-effect waves-light btn blue darken-1">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    var Vue = require('vue'); 
    var config = require('../../config.js');
    module.exports = {
        name: 'navbar',
        props: ['currentUser'],
        ready: function(){
            this.isLoggedIn = this.currentUser.scope != ''
            console.log(this.isLoggedIn)
        },
        methods: {
            logout: function(){
                this.$http.get(config.baseUrl() + '/v1/logout').then(function(response){
                    window.sessionStorage.removeItem('user');
                    window.sessionStorage.removeItem('userId');
                    window.sessionStorage.removeItem('scope');
                    this.currentUser = {
                                            userId: '',
                                            username: '',
                                            scope: ''
                                        }
                    this.$route.router.go('/');   
                },function(error){
                    console.log(error);
                })
            }
        },
        data: function(){
            return {
                isLoggedIn: false,
            }
        }
    };
</script>
