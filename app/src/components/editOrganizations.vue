<template>

	<div id="editOrganization" >
		<div class="editOrg">
			<div class="row">
				<div class="card blue lighten-5 col m10 s12 offset-m1">
					<div class="card-content">
						<div class="row">
							<form class="col s12">
								<span class="card-title">Información General</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="orgNumber" v-model="organization.orgNumber" type="number" class="validate">
										<label for="orgNumber">Número de boleta</label>
									</div>
									<div class="input-field col s6">
										<input id="orgName" v-model="organization.orgName" type="text" class="validate">
										<label class="active" for="orgName">Nombre de la organización</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="acronym" v-model="organization.acronym" type="text" class="validate">
										<label for="acronym">Siglas de la organización</label>
									</div>
									<div class="input-field col s6">
										<input id="postal" v-model="organization.postal" type="text" class="validate">
										<label for="postal">Dirección postal</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<select id="department" v-model="organization.department">
                                        <option value="Atlántida">Atlántida</option>
                                        <option value="Colón">Colón</option>
                                        <option value="Comayagua">Comayagua</option>
                                        <option value="Copán">Copán</option>
                                        <option value="Cortes">Cortes</option>
                                        <option value="Choluteca">Choluteca</option>
                                        <option value="Paraíso">El Paraíso</option>
                                        <option value="Francisco Morazán">Francisco Morazán</option>
                                        <option value="Gracias a Dios">Gracias a Dios</option>
                                        <option value="Intibucá">Intibucá</option>
                                        <option value="Islas de la Bahía">Islas de la Bahía</option>
                                        <option value="La Paz">La Paz</option>
                                        <option value="Lempira">Lempira</option>
                                        <option value="Ocotepeque">Ocotepeque</option>
                                        <option value="Olancho">Olancho</option>
                                        <option value="Santa Bárbara">Santa Bárbara</option>
                                        <option value="Valle">Valle</option>
                                        <option value="Yoro">Yoro</option>
										</select>
										<label>Departamento</label>
									</div>
									<div class="input-field col s6">
										<input id="municipality" v-model="organization.municipality" type="text" class="validate">
										<label for="municipality">Municipalidad</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s4">
										<input id="village" v-model="organization.village" type="text" class="validate">
										<label for="village">Aldea</label>
									</div>
									<div class="input-field col s4">
										<input id="community" v-model="organization.community" type="text" class="validate">
										<label for="community">Comunidad</label>
									</div>
									<div class="input-field col s4">
										<input id="sector" v-model="organization.sector" type="text" class="validate">
										<label for="sector">Sector</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<textarea id="mission" v-model="organization.mission" type="text" class="materialize-textarea"></textarea>

										<label for="mission">Misión</label>
									</div>
									<div class="input-field col s6">
										<textarea id="vision" v-model="organization.vision" type="text" class="materialize-textarea"></textarea>

										<label for="vision">Visión</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="market" v-model="organization.market" type="text" class="validate">
										<label for="market">Orientación principal de atención (rubro)</label>
									</div>
								</div>
								<span class="card-title">Contacto de la ONG</span>
								<div class="row">
									<div class="input-field col s4">
										<input id="webPage" v-model="organization.webPage" type="text" class="validate">
										<label for="webPage">Página web</label>
									</div>
									<div class="input-field col s4">
										<input id="orgPhone" v-model="organization.orgPhone" type="text" class="validate">
										<label for="orgPhone">Número de teléfono fijo</label>
									</div>
									<div class="input-field col s4">
										<input id="orgCelPhone" v-model="organization.orgCelPhone" type="text" class="validate">
										<label for="orgCelPhone">Número de celular</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="orgSocialNetwork" v-model="organization.orgSocialNetwork" type="text" class="validate">
										<label for="orgSocialNetwork">Redes Sociales</label>
									</div>
									<div class="input-field col s6">
										<input id="orgEmail" v-model="organization.orgEmail" type="email" class="validate">
										<label for="orgEmail">Email</label>
									</div>
								</div>
								<span class="card-title">Contacto del director</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="directorName" v-model="organization.directorName" type="text" class="validate">
										<label for="directorName">Nombre</label>
									</div>
									<div class="input-field col s6">
										<input id="directorEmail" v-model="organization.directorEmail" type="text" class="validate">
										<label for="directorEmail">Email</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="directorPhone" v-model="organization.directorPhone" type="text" class="validate">
										<label for="directorPhone">Teléfono fijo</label>
									</div>
									<div class="input-field col s6">
										<input id="directorCelPhone" v-model="organization.directorCelPhone" type="text" class="validate">
										<label for="directorCelPhone">Teléfono celular</label>
									</div>
								</div>
								<span class="card-title">Personería Jurídica</span>
								<div class="row">
									<div class="input-field col s4">
										<input id="orgResolutionNumber" v-model="organization.orgResolutionNumber" type="text" class="validate">
										<label for="orgResolutionNumber">Número de resolución</label>
									</div>
									<div class="input-field col s4">
										<input id="orgResolutionDate" v-model="organization.orgResolutionDate"type="date" class="datepicker">
										<label for="orgResolutionDate">Fecha de resolución</label>
									</div>
									<div class="input-field col s4">
										<input id="legalRepresentativeName" v-model="organization.legalRepresentativeName" type="text" class="validate">
										<label for="legalRepresentativeName">Nombre de representante legal</label>
									</div>
								</div>
								<span class="card-title">Registro en URSAC</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="ursacRegistrationNumber" v-model="organization.ursacRegistrationNumber" type="text" class="validate">
										<label for="ursacRegistrationNumber">Número de registro</label>
									</div>
									<div class="input-field col s6">
										<input id="ursacrRegistrationDate" v-model="organization.ursacrRegistrationDate" type="date" class="datepicker">
										<label for="ursacrRegistrationDate">Fecha de resolución</label>
									</div>
								</div>
								<span class="card-title">Ubicación Geográfica</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="latitude" v-model="organization.latitude" type="text" class="validate">
										<label for="latitude">Latitud</label>
									</div>
									<div class="input-field col s6">
										<input id="longitude" v-model="organization.longitude" type="text" class="validate">
										<label for="longitude">Longitud</label>
									</div>
								</div>
								<span class="card-title">Verificación de la entrevista</span>
								<div class="row">
									<div class="input-field col s12">
										<input id="intervieweeName" v-model="organization.intervieweeName" type="text" class="validate">
										<label for="intervieweeName">Nombre de la persona entrevistada</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="interviewDate" v-model="organization.interviewDate" type="date" class="datepicker">
										<label for="interviewDate">Fecha de la entrevista</label>
									</div>
									<div class="input-field col s6">
										<input id="interviewTime" v-model="organization.interviewTime" type="text" class="validate">
										<label for="interviewTime">Hora de la entrevista</label>
									</div>
								</div>
								<span class="card-title">Información adicional/Otras informaciones</span>
								<div class="row">
									<div class="input-field col s12">
										<input id="otherOrgsInRegion" v-model="organization.otherOrgsInRegion" type="text" class="validate">
										<label for="otherOrgsInRegion">Conoce otra(s) ONG del sector que trabaja en esta región?</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<textarea id="observations" v-model="organization.observations" type="text" class="materialize-textarea"></textarea>
										<label for="observations">Observaciones</label>
									</div>
								</div>                  
							</form>
							<edit-projects></edit-projects>

						</div>        
						<div >     

							<a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="updateOrganization">Actualizar</a>
						

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	var swal = require('sweetalert');
	var config = require('../../config.js');
	var editProjects = require('./editProjects.vue')
	module.exports = {

		name: 'editOrganization',
		ready: function(){
			console.log(this.$route.params);
			
			$('select').material_select();

			var d = new Date();
			d.setFullYear( d.getFullYear() - 100 );
			$('.datepicker').pickadate(
			{
				selectMonths: true,
				selectYears: 100,
				max: new Date()
			});
                    $(document).ready(function(){
                        $('.modal-trigger').leanModal();
                    });

            this.getOrganization();
		},
		methods: {
			updateOrganization: function(){
				this.organization.department = $('#department').find(":selected").text();
				this.$http.put(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId,this.organization).then(function(response){
					this.$route.router.go('/');

				}, function(error){
					swal('Error', 'Error modificando organización', 'error');
				});
			},

			getOrganization: function(){
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId).then(function(response){

					this.organization=response.json()[0];
					console.log(organization);
					$('#department').val(this.organization.department);
				},function(error){
					console.log(error);
				});
			}
		},
		data: function(){
			return {
				organization: {}
			}
		},
		components: {
            'edit-projects': editProjects
        }



	}

	
</script>