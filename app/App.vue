<template>  
    <div id="application">
        <div id="navbar">
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
                            <a  v-link="{path: '/organization/new'}" v-if="currentUser.scope === 'admin' || currentUser.scope === 'orgUser'">Agregar organización</a>
                        </li>
                        <li  v-if="!currentUser.userId || currentUser.userId === ''">
                            <a v-link="{path: '/login'}">Login</a>
                        </li>
                        <li v-else>
                            <span>Welcome {{currentUser.username}} </span><a v-on:click="logout()" class="waves-effect waves-light btn blue darken-1">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            <router-view :current-user.sync="currentUser"></router-view>
    </div>
</template>

<script>
    var config = require('./config.js');
    module.exports = {
        ready: function(){
            this.currentUser = {
                userId: window.sessionStorage.getItem('userId'),
                username: window.sessionStorage.getItem('user'),
                scope: window.sessionStorage.getItem('scope')
            }
        },
        methods: {
             logout: function(){
                this.$http.get(config.baseUrl() + '/v1/logout').then(function(response){
                    window.sessionStorage.removeItem('username');
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
                currentUser: {
                    userId: '',
                    username: '',
                    scope: ''
                }
            }
        }
    }
</script>
<style>
    .logo{
        margin-left: 20px;
    }
</style>