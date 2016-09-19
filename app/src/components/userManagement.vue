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
                            <a class="waves-effect waves-light btn blue darken-4">Editar</a>
                            <a class="waves-effect waves-light btn blue darken-4" v-if="currentUser.scope === 'admin'">Borrar</a>
                        </td>
                    </tr>
                    </tbody>
                </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var swal = require('sweetalert');
	var config = require('../../config.js');

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
			}			

		},
		data: function(){
			return {
				users: [],
			}
		}
	}
</script>
