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
            this.refreshUser();
            this.getScopes();
        },
        data: function(){
            return {
                user: {},
                currentUser: {}
            }
        },
        methods: {

            refreshUser: function(){
                this.currentUser = {
                    userId: window.sessionStorage.getItem('userId'),
                    username: window.sessionStorage.getItem('username'),
                    scope: window.sessionStorage.getItem('scope')
                }
            },
            getScopes: function(){
                this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
                    this.scopes=response.json();
                    var $selectDropdown = 
                    $("#editUserScope")
                    .empty()
                    .html(' ');
                    console.log(this.scopes)
                    for (var i = 0; i < this.scopes.length; i++) {
                        var value = this.scopes[i].scope;
                        $selectDropdown.append(
                          $("<option></option>")
                          .attr("value",value)
                          .text(value)
                          );
                    }
                    $selectDropdown.trigger('contentChanged');
                    $('select').material_select();
                },function(error){
                    console.log(error);
                });
            },
            createLog: function (action) {
                var log={
                    action: action,
                    timestamp: new Date().toString(),
                    userId: this.currentUser.username
                };
                console.log(this.currentUser);
                console.log(log);
                
                this.$http.post(config.baseUrl() + '/v1/createLog', log).then(function(response){
                    console.log("huh?");
                    console.log(response.body.message);
                }, function(error){
                    console.log(":(")
                    console.log(error.body.message);
                })

            },
            editUser: function(){

                this.user = this.userToEdit;
                
                var selectedScope = $('#editUserScope').find(":selected").val();
                if(selectedScope)
                    this.user.scope = selectedScope;
                else
                    this.user.scope = this.userToEdit.scope

                this.$http.put(config.baseUrl() + '/v1/user/' + this.user._id, this.user).then(function(response){
                    this.createLog("Edito usuario "+this.userToEdit.username);
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