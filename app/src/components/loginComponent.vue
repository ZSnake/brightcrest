<template >  
    <div class="loginContainer">  
        <div class="row">
            <div class="col s6 offset-s3 ">
                <div class="card blue-grey darken-2 white-text">
                    <div class="card-content">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="username" type="text" v-model="user.username" data-error="Ingrese su nombre de usuario" class="validate">
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="password" type="password" v-model="user.password" class="validate">
                                <label for="password"><i class="fa fa-lock" aria-hidden="true"></i> Contraseña</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <a type="submit" id="loginButton" class="waves-effect waves-light btn blue-grey darken-4" v-on:click="logIn">Iniciar Sesión</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>
<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');

	module.exports = {
		name: 'login',
        props: ['currentUser'],
		methods: {	
            logIn: function(){
                this.$http.post(config.baseUrl() + '/v1/login', this.user).then(function(response){
                    
                    this.currentUser = {
                        username: response.json().username,
                        userId: response.json()._id,
                        scope:  response.json().scope
                    }
                    window.sessionStorage.setItem('username', this.currentUser.username);
                    window.sessionStorage.setItem('userId', this.currentUser.userId);
                    window.sessionStorage.setItem('scope', this.currentUser.scope);
                    console.log(this.currentUser)
                    this.$route.router.go('/');
                },function(error){
                    swal('Error', 'Usuario o password incorrecto', 'error');
                });
                
            }
		},
		data: function(){
			return {
				user: {},
			}
		}
	}
</script>