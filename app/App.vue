<template>  
    <div id="application">
        <div id="navbar">
            <ul id="usersDropdown" class="dropdown-content">
                
                
            </ul>
            <ul id="organizationsDropdown" class="dropdown-content">
                <li>
                    <a v-link="'/'">Listar organizaciones</a>
                </li>
                <li v-if="currentUser.scope === 'admin' || currentUser.scope === 'orgUser'">
                    <a  v-link="{path: '/organization/new'}" >Agregar organización</a>
                </li>
            </ul>
            <nav>
                <div class="nav-wrapper blue darken-4">
                    <a href="#" class="brand-logo logo">DINAF</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <a v-link="'/organization/map'">Mapa de organizaciones</a>
                        </li>
                        <li>
                             <a class="dropdown-button" href="#!" data-activates="organizationsDropdown">
                                 Organizaciones<i class="material-icons right">arrow_drop_down</i>
                             </a>
                        </li>
                        <li>
                            <a v-link="'/users'" v-if="currentUser.scope === 'admin'">Listar usuarios</a>
                        </li>
                        <li>
                            <a v-if="currentUser.scope === 'admin'" v-on:click="openAddUser">Agregar Usuario</a>
                        </li>
                        <li  v-if="!currentUser.userId || currentUser.userId === ''">
                            <a v-link="{path: '/login'}">Login</a>
                        </li>
                        <li v-else>
                            <a v-on:click="logout()" class="waves-effect waves-light btn blue darken-1">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <router-view :current-user.sync="currentUser"></router-view>
        <add-user></add-user>
    </div>
</template>

<script>
    var config = require('./config.js');
    var addUser = require('./src/components/addUser.vue')
    module.exports = {
        ready: function(){
            this.refreshUser();
            $('select').material_select();
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
            },
            refreshUser: function(){
                this.currentUser = {
                    userId: window.sessionStorage.getItem('userId'),
                    username: window.sessionStorage.getItem('user'),
                    scope: window.sessionStorage.getItem('scope')
                }
            },
            reloadUsers: function(){
                console.log(this.$children);
            },
            openAddUser: function(){
                $('#createUser').openModal();
            }
        },
        data: function(){
            return {
                currentUser: {
                    userId: '',
                    username: '',
                    scope: ''
                },
            }
        },
        components: {
            'add-user': addUser
        },
        events: {
            'user-added': function(){
                this.$broadcast('reload-users')
            }
        }
    }
</script>
<style>
    .logo{
        margin-left: 20px;
    }
</style>