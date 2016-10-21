<template>  
  <div id="application">
     <div id="navbar">
         <ul id="organizationsDropdown" class="dropdown-content">

            <li>
                <a v-link="'/'">Listar organizaciones</a>
            </li>
            <li v-if="lolf(currentUser.scope)">
                <a  v-link="{path: '/organization/new'}" >Agregar organización</a>
            </li>
        </ul>
        <nav>
            <div class="nav-wrapper blue darken-4">

              <a href="#" class="brand-logo logo" title="home"><img src="../../styles/images/logo2.jpg" width="264" height="110"></a>


              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li>
                    <a v-link="'/organization/map'" title="regresar a casa">Dirección de Niñez, Adolecencia y Familia</a>

                </li>
                <li>
                    <a v-link="'/organization/map'" title="ir a Mapa">Mapa de organizaciones</a>
                </li>
                <li>
                    <a class="dropdown-button" title="Click para mostrar el menu" href="#!" data-activates="organizationsDropdown">
                        Organizaciones<i class="material-icons right">arrow_drop_down</i>
                    </a>
                </li>
                <li>
                    <a v-link="'/users'" v-if="currentUser.scope === 'admin'" title="Listar Usuarios">Listar usuarios</a>
                </li>
                <li>
                    <a v-if="currentUser.scope === 'admin'" v-on:click="openAddUser" title="Agregar usuarios">Agregar Usuario</a>
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
            <li v-if="lolf(currentUser.scope)">
                <a  v-link="{path: '/organization/new'}" >Agregar organización</a>
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
            $(".button-collapse").sideNav();
        },
        methods: {
            lolf: function(resp) {

                if (resp === 'admin' || resp === 'orgUser') {
                    return true;
                } else{
                    return false;
                }
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