<template >  
    <div class="loginContainer">  
        <div class="row">
            <div class="col s4 offset-s4 ">
                <div class="card blue lighten-4 ">
                    <div class="card-content">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">perm_identity</i>
                                <input id="username" type="text" v-model="user.username" data-error="Ingrese su nombre de usuario" class="validate">
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="password" type="password" v-model="user.password" class="validate" v-on:keyup.13="logIn">
                                <label for="password"><i class="fa fa-lock" aria-hidden="true"></i> Contraseña</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <a type="submit" id="loginButton" class="waves-effect waves-light btn blue darken-4" v-on:click="logIn">Iniciar Sesión</a>
                    </div>
                </div>
            </div>
        </div>
        <edit-user :user-to-edit="userToEdit"></edit-user>
    </div>
</template>
<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');
    var editUserComp = require('./editUser.vue');

	module.exports = {

		name: 'login',
        props: ['currentUser'],
        ready: function(){
            //console.log.log(window.sessionStorage);
            if (window.sessionStorage.getItem('username')!== null  ) {
                this.gotohome();
            }
        },
        methods: {	
            gotohome:function () {
                this.$route.router.go('/');
                
            },
            editUser: function(user){
                this.userToEdit = user;
                $('#editUser').openModal();
            },
            logIn: function(){
                //console.log.log("YAY")
                this.$http.post(config.baseUrl() + '/v1/login', this.user).then(function(response){
                    //console.log.log(response.json())
                    this.currentUser = {
                        username: response.json().username,
                        userId: response.json()._id,
                        password: this.user.password,
                        scope:  response.json().scope,
                        flog: response.json().flog
                    }

                    window.sessionStorage.setItem('username', this.currentUser.username);
                    window.sessionStorage.setItem('userId', this.currentUser.userId);
                    window.sessionStorage.setItem('scope', this.currentUser.scope);
                    window.sessionStorage.setItem('flog', this.currentUser.flog);
                    //console.log.log(//console.log.log(this.currentUser));
                    if (window.sessionStorage.getItem('flog') == 'true') {
                        location.reload();
                    } else {

                        this.editUser(this.currentUser);
                        this.user = [];
                    }
                    
                },function(error){
                    swal('Error', 'Usuario o password incorrecto', 'error');
                });
                
            }
        },
        components: {
            'edit-user': editUserComp
        },
        data: function(){
           return {
            userToEdit: {},
            user: {},
        }
    }
}
</script>
<style>
    .loginContainer{
        margin-top: 200px;
    }
</style>