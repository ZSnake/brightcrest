<template>
    <div id="editUser" class="modal">
            <div class="row">
                <div class="modal-content">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="editUsername" type="text" class="validate" v-model="userToEdit.username">
                                <label class="active" for="username">Nombre de usuario</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="editPassword" type="password" class="validate" v-model="userToEdit.password">
                                <label class="active" for="password">Nueva Contraseña</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <select id="editUserScope" v-model="userToEdit.scope">
                                    <option value="admin">Administrador</option>
                                    <option value="orgUser">Usuario de organización</option>
                                </select>
                                <label>Tipo de usuario</label>
                            </div>
                        </div>
                        <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="editUser">Actualizar</a>
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
        name: 'editUser',
        props: ['userToEdit'],
        ready: function(){
        },
        data: function(){
            return {
                user: {}
            }
        },
        methods: {
            editUser: function(){

                this.user = this.userToEdit;
                
                var selectedScope = $('#editUserScope').find(":selected").val();
                if(selectedScope)
                    this.user.scope = selectedScope;
                else
                    this.user.scope = this.userToEdit.scope

                this.$http.put(config.baseUrl() + '/v1/user/' + this.user._id, this.user).then(function(response){
                    this.clear();
                    this.$dispatch('user-added');
                }, function(error){
                    swal('Error', 'Error modificando usuario', 'error');
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