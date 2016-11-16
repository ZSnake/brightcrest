<template>
    <div id="editUser" class="modal">
        <div class="row">
            <div class="modal-content">
                <div class="row" v-if="check()">
                    <h5>Esta es la primera vez que inicia sesion en el sistema, tiene que cambiar la contraseña a una nueva.</h5>
                </div>
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
                    <div class="row" v-if="!check()">
                        <div class="input-field col s12" >
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
            //console.log.log(this.userToEdit);
            //console.log.log(this.user);
            //console.log.log(this.currentUser);

        },
        data: function(){
            return {
                user: {
                    "password" : null,
                    "username" : null,
                    "flog" : null,
                    "scope" : null

                },
                currentUser: {}
            }
        },
        methods: {
            check: function function_name(argument) {
                if (this.userToEdit.flog == false) {
                    return true;
                }
            },
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
                    //console.log.log(this.scopes)
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
                    //console.log.log(error);
                });
            },
            createLog: function (action) {
                var log={
                    action: action,
                    timestamp: new Date().toString(),
                    userId: this.currentUser.username
                };
                //console.log.log(this.currentUser);
                //console.log.log(log);

                this.$http.post(config.baseUrl() + '/v1/createLog', log).then(function(response){
                    //console.log.log("huh?");
                    //console.log.log(response.body.message);
                }, function(error){
                    //console.log.log(":(")
                    //console.log.log(error.body.message);
                })

            },
            editUser: function(){
                this.user = this.userToEdit;
                var backup=this.user.scope;
                var selectedScope = $('#editUserScope').find(":selected").val();
                if(selectedScope)
                    this.user.scope = selectedScope;
                else
                    this.user.scope = this.userToEdit.scope
                toEdit = {
                    "userId": this.user.userId,
                    "password" : this.user.password,
                    "username" : this.user.username,
                    "flog" : true,
                    "scope" : this.user.scope
                };
                if (!this.check()) {
                    toEdit = {
                        "userId": this.user.userId,
                        "password" : this.user.password,
                        "username" : this.user.username,
                        "flog" : true,
                        "scope" : backup
                    };
                }
                //console.log.log(toEdit)

                this.$http.put(config.baseUrl() + '/v1/user/' + this.user._id, toEdit).then(function(response){
                    this.createLog("Edito usuario "+this.userToEdit.username);
                    this.clear();
                    this.$dispatch('user-added');
                    location.reload();
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