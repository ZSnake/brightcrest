<template>
    <div id="createUser" class="modal">
            <div class="row">
                <div class="modal-content">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="username" type="text" class="validate" v-model="user.username">
                                <label for="username">Nombre de usuario</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" v-model="user.password">
                                <label for="password">Contraseña</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <select id="userScope" v-model="user.scope">
                                    <option value="admin">Administrador</option>
                                    <option value="orgUser">Usuario de organización</option>
                                </select>
                                <label>Tipo de usuario</label>
                            </div>
                        </div>
                        <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="createUser">Guardar</a>
                        <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="clear">Cerrar</a>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
    var swal = require('sweetalert');
    var config = require('../../config.js');
    module.exports = {
        name: 'addUser',
        ready: function(){
        },
        data: function(){
            return {
                user: {}
            }
        },
        methods: {
            createUser: function(){
                this.user.scope = $('#userScope').find(":selected").val();
                if(!this.user.scope)
                    this.user.scope = 'admin';
                this.$http.post(config.baseUrl() + '/v1/createUser', this.user).then(function(response){
                    this.$route.router.go('/users');
                    this.clear();
                    this.$dispatch('user-added');
                }, function(error){
                    swal('Error', 'Error creando usuraio', 'error');
                })
            },
            clear: function(){
                this.user = {};
            }
        }
    } 
</script>
<style>
    .modal{
        width: 30% !important;
    }
</style>