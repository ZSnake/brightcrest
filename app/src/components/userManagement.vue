<template>
    <div id="container">
        <div class="row">
            <div class="card blue lighten-5 col m10 s12 offset-m1">
                <div class="card-content" >
                    <table> 
                        <thead>
                            <tr>
                                <th data-field="id">Identificador</th>
                                <th data-field="username">Nombre de usuario</th>
                                <th data-field="scope">Tipo de usuario</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users">
                                <td>{{user._id}}</td>
                                <td>{{user.username}}</td>
                                <td>{{user.scope}}</td>
                                <td>
                                    <div class="row">
                                        <a class="waves-effect waves-light col m6 btn blue darken-4 modal-trigger"  title="Editar usuario" v-on:click="editUser(user)"><i class="material-icons">mode_edit</i></a>
                                        <a class="waves-effect waves-light col m6 btn red darken-4" title="borrar usaurio" v-on:click="deleteUser(user._id,user.username)"><i class="material-icons">delete</i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
        name: 'userManagement',
        props: ['currentUser'],
        ready: function() {
            $('select').material_select();
            this.getUsers();
        },
        methods: {
            refreshUser: function(){
                this.currentUser = {
                    userId: window.sessionStorage.getItem('userId'),
                    username: window.sessionStorage.getItem('username'),
                    scope: window.sessionStorage.getItem('scope')
                }
            },
            createLog: function (action) {
                this.refreshUser();
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
            getUsers: function(){
                this.$http.get(config.baseUrl() + '/v1/users').then(function(response){
                    this.users=response.json();
                },function(error){
                    //console.log.log(error);
                });
            },
            deleteUser: function(id,username){
                if(id != window.sessionStorage.getItem('userId')){
                    var component = this;
                    swal({   
                        title: "¿Está seguro?",   
                        text: "¡Si eliminas este usuario, no se podrá recuperar!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Si, eliminar",
                        cancelButtonText: "No, cancelar",   
                        closeOnConfirm: true 
                    }, function(){
                        component.$http.delete(config.baseUrl() + '/v1/user/' + id).then(function(response){
                            component.getUsers();
                            this.createLog("Eliminó usuario "+username);
                            swal.close();
                        },function(error){
                            //console.log.log(error);
                        });

                    });
                }else{
                    swal('Error', 'No puede eliminar su propio usuario', 'error');
                }
            },
            editUser: function(user){
                //console.log.log(user);
                var user2 = {
                    username: user.username,
                    userId: user._id,
                    scope:  user.scope,
                    flog: true
                }
                this.userToEdit = user2;
                $('#editUser').openModal();
            }		

        },
        data: function(){
            return {
                users: [],
                userToEdit: {}
            }
        },
        events: {
            'reload-users': function(){
                this.getUsers();
            }
        },
        components: {
            'edit-user': editUserComp
        }
    }
</script>
