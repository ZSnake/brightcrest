<template>  
    <div id="application">
        <div id="navbar">

            <nav>
                <div class="nav-wrapper blue darken-4">

                    <a href="#" class="brand-logo logo" title="home"><img src="../../styles/images/logo2.jpg" width="264" height="110"></a>


                    <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a v-link="'/'" title="regresar a casa">Dirección de Niñez, Adolescencia y Familia</a>

                        </li>
                        <li>
                        <a v-link="'/listFiltered'" title="Lista Filtrada">Lista Filtrada</a>
                        </li>
                        <li>
                            <a v-link="'/organization/map'" title="ir a Mapa">Mapa de organizaciones</a>
                        </li>
                        <li >
                            <a  class="dropdown-button" title="Click para mostrar el menu" href="#" data-activates="organizationsDropdown" v-if="checkMain()">
                                Administración<i class="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>

                        <li  v-if="!currentUser.userId || currentUser.userId === ''" title="Iniciar Sesion">
                            <a v-link="{path: '/login'}">Login</a>
                        </li>
                        <li v-else>
                            <a v-on:click="logout()" title="Salir de sesion" class="waves-effect waves-light btn blue darken-1">Logout</a>
                        </li>
                    </ul>
                    <ul class="side-nav" id="mobile-demo">
                        <li>
                            <a v-link="'/organization/map'">Mapa de organizaciones</a>
                        </li>
                        <li>
                            <a v-link="'/'">Listar organizaciones</a>
                        </li>
                        <li v-if="checkAddOrg()">
                            <a  v-link="{path: '/organization/new'}" >Agregar organización</a>
                        </li>
                        <li v-if="checkLog()">
                            <a  v-link="{path: '/viewLogs'}" >Ver Bitácora</a>
                        </li>
                        <li v-if="checkScope()">
                            <a  v-link="{path: '/listScope'}" >Administrar Roles</a>
                        </li>
                        <li v-if="checkUser()">
                            <a v-link="'/users'" title="Listar Usuarios">Listar usuarios</a>
                        </li>
                        <li v-if="checkUser()">
                            <a v-on:click="openAddUser">Agregar Usuario</a>
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
            <ul id="organizationsDropdown" class="dropdown-content">
                <li v-if="checkAddOrg()">
                    <a  v-link="{path: '/organization/new'}" >Agregar organización</a>
                </li>
                <li v-if="checkLog()">
                    <a  v-link="{path: '/viewLogs'}" >Ver Bitácora</a>
                </li>
                <li v-if="checkScope()">
                    <a  v-link="{path: '/listScope'}" >Administrar Roles</a>
                </li>
                <li v-if="checkUser()">
                    <a v-link="'/users'" title="Listar Usuarios">Listar usuarios</a>
                </li>
                <li v-if="checkUser()">
                    <a v-on:click="openAddUser" title="Agregar usuarios">Agregar Usuario</a>
                </li>
            </ul>
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
            this.getScopes();
            $('select').material_select();
            $(".button-collapse").sideNav();

        },
        methods: {
            getScopes: function(){
                this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
                    this.scopes=response.json();
                    this.initControl();

                },function(error){
                    console.log(error);
                });
            },
            initControl: function() {
                var userScope = window.sessionStorage.getItem('scope');
                this.controlPermissions=null;


                for (var i = 0; i<this.scopes.length; i++) {
                    if (userScope === this.scopes[i].scope) {
                        this.controlPermissions = JSON.parse(this.scopes[i].views);
                        console.log(this.controlPermissions);
                        break;
                    }
                }
            },
            checkMain: function() {
                console.log(this.controlPermissions)
                if (window.sessionStorage) {
                    if (window.sessionStorage.getItem('username')!=='') {
                        $(".dropdown-button").dropdown();
                        if (this.controlPermissions) {
                            if (this.controlPermissions.addOrganization==true) {
                                this.pr1 = true;
                            } }else return false
                            return true;
                        } else return false;
                    } else return false;

                },
                checkAddOrg: function() {
                    if (this.controlPermissions) {
                        if (this.controlPermissions.addOrganization==true) {
                            return true;
                        } else return false;
                    } else return false;
                },
                checkScope: function() {
                    if (this.controlPermissions) {
                        if (this.controlPermissions.crudScope==true) {
                            return true;
                        } else return false;
                    } else return false; 
                },
                checkUser: function() {
                    if (this.controlPermissions) {
                        if (this.controlPermissions.crudUser==true) {
                            return true;
                        } else return false;
                    } else return false;    
                },
                checkLog: function() {
                    if (this.controlPermissions) {
                        console.log(this.controlPermissions.viewLogs==true)
                        console.log("log")
                        if (this.controlPermissions.viewLogs==true) {
                            return true;
                        } else return false;
                    } else return false;                    
                },

            check: function(resp) {/*
                var userScope = window.sessionStorage.getItem('scope');
                var controlPermissions=null;
                for (var i = 0; i<this.scopes.length; i++) {
                    if (userScope === this.scopes[i].scope) {
                        controlPermissions = JSON.parse(this.scopes[i].views);
                        break;
                    }
                }

                if (resp==1) {
                    if (controlPermissions.addOrganization==true) {
                        console.log("1");
                        return true;
                    }else {
                        console.log("2");
                        return false;
                    }
                } else if (resp==2) {
                    if (controlPermissions.viewLogs==true) {
                        console.log("3");
                        return true;
                    }else {
                        console.log("4");
                        return false;
                    }

                } else if (resp==3) {
                    if (controlPermissions.crudScope==true) {
                        console.log("5");
                        return true;
                    }else {
                        console.log("6");
                        return false;
                    }

                } else if (resp==4) {
                    if (controlPermissions.crudUser==true) {
                        console.log("7");
                        return true;
                    }else {
                        console.log("8");
                        return false;
                    }

                } else if (resp==5) {
                    if (controlPermissions.crudUser==true) {
                        console.log("9");
                        return true;
                    }else {
                        console.log("10");
                        return false;
                    }
                } else if (resp == 6) {
                    if (controlPermissions.addOrganization==false && controlPermissions.viewLogs==false && controlPermissions.crudScope==false && controlPermissions.crudUser==false && controlPermissions.crudUser==false) {
                        console.log("11");
                        return false;
                    } else {
                        console.log("12");
                        return true;
                    }
                } 

                */

            },
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
                    location.reload(); 
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
                pr1: {},
                controlPermissions: {},
                scopes: [],
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
    .nav {
        height: 110px;
        line-height: 110px;
    }

    .nav i, nav [class^="mdi-"], nav [class*="mdi-"], nav i.material-icons {
        height: 110px;
        line-height: 110px;
    }

    .nav .button-collapse i {
        height: 110px;
        line-height: 110px;
    }

    .nav .brand-logo { 
        font-size: 1.6rem; 
    }

    @media only screen and (min-width: 601px){
        nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
            height: 110px;
            line-height: 110px;
        }
    }

    .logo{
        margin-left: 60px;
    }
    br.small {
        line-height: 5px;
    }
</style>