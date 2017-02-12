<template>
	<div id="container">
		<div class="listScope">
			<div class="row">
				<div class="card blue lighten-5 col m10 s12 offset-m1">
					<div class="card-content">
						<table> 
							<thead>
								<tr>
									<b>
										<div class="row">
											<div class="col s6">Nombre</div>
											<div class="col s6">Acción</div>
										</div>
									</b>

								</tr>
							</thead>
							<tbody>
								<tr v-for="scope in scopes">

									<td>
										<div class="col s6">{{scope.scope}}</div>
										


										<a class="waves-effect waves-light btn blue darken-4 col s2" title="Editar Organizacion"  v-link="{name: 'editScope', params: {scopeId: scope._id}}"><i class="material-icons">mode_edit</i></a>


										<a class="waves-effect waves-light btn red darken-4 col s2" title="Ver Organizacion" v-on:click="deleteScope(scope)"><i class="material-icons">delete</i></a>
										
									</td>

								</tr>
							</tbody>
						</table>
						<div class="row">
							<a class="waves-effect waves-light btn blue darken-4 col m6 offset-m3 modal-trigger" v-on:click="openAddScope">Agregar Rol</a>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<add-scope></add-scope>
		
	</div>	

</template>

<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');
	var addScope = require('./addScope.vue');
	var editScope = require('./editScope.vue');
	module.exports = {
		name: 'listScope',
		ready: function() {
			$('select').material_select();
			this.getScopes();
		},
		methods: {
			deleteScope: function(scope) {

				//if(id != window.sessionStorage.getItem('userId')){
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
						component.$http.delete(config.baseUrl() + '/v1/scope/' + scope._id).then(function(response){
							this.createLog("Eliminó Rol "+scope.scope);
							this.getScopes();
							swal.close();
						},function(error){
							console.log(error);
						});

					});
				/*}else{
					swal('Error', 'No puede eliminar su propio usuario', 'error');
				}*/

			},
			editScope: function(scope) {

				this.scopeToEdit=scope;
				
				this.scopeToEdit.views = JSON.parse(this.scopeToEdit.views)
				console.log(this.scopeToEdit);

				
				this.scopeToEdit.view= {
					"addOrganization" : scope.views.addOrganization,
					"editOrganization" : scope.views.editOrganization,
					"deleteOrganization" : scope.views.deleteOrganization,
					"crudScope" : scope.views.crudScope,
					"crudUser" : scope.views.crudUser,
					"viewLogs" : scope.views.viewLogs
				},

				$('#editScope').openModal();

			},
			openAddScope: function(){
				$('#createScope').openModal();
			},
			getScopes: function(){
				this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
					this.scopes=response.json();
				},function(error){
					console.log(error);
				});
			}	
		},
		data: function(){
			return {
				scopes: [],
				scopeToEdit: {
					scope: null,
					views:  {
						"addOrganization" : false,
						"editOrganization" : false,
						"deleteOrganization" : false,
						"crudScope" : false,
						"crudUser" : false,
						"viewLogs" : false
					}
				}
				
			}
		},
		components: {
			'add-scope': addScope,
			'edit-scope': editScope
		},
	}

</script>
<style>
	.modal { width: 80% !important  }  /* increase the width as per you desire */
</style>
