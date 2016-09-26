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
                                    <a class="waves-effect waves-light col m6 btn blue darken-4 modal-trigger" v-on:click="editUser(user)"><i class="material-icons">mode_edit</i></a>
                                    <a class="waves-effect waves-light col m6 btn red darken-4" v-on:click="deleteUser(user._id)"><i class="material-icons">delete</i></a>
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
		ready: function() {
			$('select').material_select();
			this.getUsers();
		},
		methods: {
			getUsers: function(){
				this.$http.get(config.baseUrl() + '/v1/users').then(function(response){
					this.users=response.json();
				},function(error){
					console.log(error);
				});
			},
            deleteUser: function(id){
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
                                swal.close();
                            },function(error){
                                console.log(error);
                            });
                            
                    });
                }else{
                    swal('Error', 'No puede eliminar su propio usuario', 'error');
                }
            },
            editUser: function(user){
                this.userToEdit = user;
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
