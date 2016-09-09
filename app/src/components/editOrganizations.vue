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
										<label class="active" for="orgNumber" v-bind:class="{'active': organization.orgNumber}">Número de boleta</label>
									</div>
									<div class="input-field col s6">
										<input id="orgName" v-model="organization.orgName" type="text" class="validate">
										<label class="active" for="orgName">Nombre de la organización</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="acronym" v-model="organization.acronym" type="text" class="validate">
										<label class="active" for="acronym">Siglas de la organización</label>
									</div>
									<div class="input-field col s6">
										<input id="postal" v-model="organization.postal" type="text" class="validate">
										<label class="active" for="postal">Dirección postal</label>
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
										<label class="active">Departamento</label>
									</div>
									<div class="input-field col s6">
										<input id="municipality" v-model="organization.municipality" type="text" class="validate">
										<label class="active" for="municipality">Municipalidad</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s4">
										<input id="village" v-model="organization.village" type="text" class="validate">
										<label class="active" for="village">Aldea</label>
									</div>
									<div class="input-field col s4">
										<input id="community" v-model="organization.community" type="text" class="validate">
										<label class="active" for="community">Comunidad</label>
									</div>
									<div class="input-field col s4">
										<input id="sector" v-model="organization.sector" type="text" class="validate">
										<label class="active" for="sector">Sector</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<textarea id="mission" v-model="organization.mission" type="text" class="materialize-textarea"></textarea>

										<label class="active" for="mission">Misión</label>
									</div>
									<div class="input-field col s6">
										<textarea id="vision" v-model="organization.vision" type="text" class="materialize-textarea"></textarea>

										<label class="active" for="vision">Visión</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="market" v-model="organization.market" type="text" class="validate">
										<label class="active" for="market">Orientación principal de atención (rubro)</label>
									</div>
								</div>
								<span class="card-title">Contacto de la ONG</span>
								<div class="row">
									<div class="input-field col s4">
										<input id="webPage" v-model="organization.webPage" type="text" class="validate">
										<label class="active" for="webPage">Página web</label>
									</div>
									<div class="input-field col s4">
										<input id="orgPhone" v-model="organization.orgPhone" type="text" class="validate">
										<label class="active" for="orgPhone">Número de teléfono fijo</label>
									</div>
									<div class="input-field col s4">
										<input id="orgCelPhone" v-model="organization.orgCelPhone" type="text" class="validate">
										<label class="active" for="orgCelPhone">Número de celular</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="orgSocialNetwork" v-model="organization.orgSocialNetwork" type="text" class="validate">
										<label class="active" for="orgSocialNetwork">Redes Sociales</label>
									</div>
									<div class="input-field col s6">
										<input id="orgEmail" v-model="organization.orgEmail" type="email" class="validate">
										<label class="active" for="orgEmail">Email</label>
									</div>
								</div>
								<span class="card-title">Contacto del director</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="directorName" v-model="organization.directorName" type="text" class="validate">
										<label class="active" for="directorName">Nombre</label>
									</div>
									<div class="input-field col s6">
										<input id="directorEmail" v-model="organization.directorEmail" type="text" class="validate">
										<label class="active" for="directorEmail">Email</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="directorPhone" v-model="organization.directorPhone" type="text" class="validate">
										<label class="active" for="directorPhone">Teléfono fijo</label>
									</div>
									<div class="input-field col s6">
										<input id="directorCelPhone" v-model="organization.directorCelPhone" type="text" class="validate">
										<label class="active" for="directorCelPhone">Teléfono celular</label>
									</div>
								</div>
								<span class="card-title">Personería Jurídica</span>
								<div class="row">
									<div class="input-field col s4">
										<input id="orgResolutionNumber" v-model="organization.orgResolutionNumber" type="text" class="validate">
										<label class="active" for="orgResolutionNumber">Número de resolución</label>
									</div>

									<div class="input-field col s4">
										<input id="orgResolutionDate" v-model="organization.orgResolutionDate" type="date" class="datepicker">
										<label class="active" for="orgResolutionDate">Fecha de resolución</label>
									</div>
									<div class="input-field col s4">
										<input id="legalRepresentativeName" v-model="organization.legalRepresentativeName" type="text" class="validate">
										<label class="active" for="legalRepresentativeName">Nombre de representante legal</label>
									</div>
								</div>
								<span class="card-title">Registro en URSAC</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="ursacRegistrationNumber" v-model="organization.ursacRegistrationNumber" type="text" class="validate">
										<label class="active" for="ursacRegistrationNumber">Número de registro</label>
									</div>
									<div class="input-field col s4">
										<input id="ursacRegistrationDate" v-model="organization.ursacRegistrationDate" type="date" class="datepicker">
										<label class="active" for="ursacRegistrationDate">Fecha de resolución</label>
									</div>
								</div>
								<span class="card-title">Ubicación Geográfica</span>
								<div class="row">
									<div class="input-field col s6">
										<input id="latitude" v-model="organization.latitude" type="text" class="validate">
										<label class="active" for="latitude">Latitud</label>
									</div>
									<div class="input-field col s6">
										<input id="longitude" v-model="organization.longitude" type="text" class="validate">
										<label class="active" for="longitude">Longitud</label>
									</div>
								</div>
								<span class="card-title">Verificación de la entrevista</span>
								<div class="row">
									<div class="input-field col s12">
										<input id="intervieweeName" v-model="organization.intervieweeName" type="text" class="validate">
										<label class="active" for="intervieweeName">Nombre de la persona entrevistada</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input id="interviewDate" v-model="organization.interviewDate" type="date" class="datepicker">
										<label class="active" for="interviewDate">Fecha de la entrevista</label>
									</div>
									<div class="input-field col s6">
										<input id="interviewTime" v-model="organization.interviewTime" type="text" class="validate">
										<label class="active" for="interviewTime">Hora de la entrevista</label>
									</div>
								</div>
								<span class="card-title">Información adicional/Otras informaciones</span>
								<div class="row">
									<div class="input-field col s12">
										<input id="otherOrgsInRegion" v-model="organization.otherOrgsInRegion" type="text" class="validate">
										<label class="active" for="otherOrgsInRegion">Conoce otra(s) ONG del sector que trabaja en esta región?</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<textarea id="observations" v-model="organization.observations" type="text" class="materialize-textarea"></textarea>
										<label class="active" for="observations">Observaciones</label>
									</div>
								</div>                  
							</form>


							<div class="row">
								<div class="card-content">
									<table> 
										<thead>
											<tr>
												<th data-field="projectNumber">Número de proyecto</th>
												<th data-field="name">Nombre del proyecto</th>
												<th data-field="duration">Duración (años)</th>
												<th data-field="department">Departamento</th>
												<th data-field="action">Acción</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="project in projects">
												<td>{{project.projectNumber}}</td>
												<td>{{project.name}}</td>
												<td>{{project.duration}}</td>
												<td>{{project.department}}</td>
												<td><a class="waves-effect waves-light btn green darken-4" v-link="{name: 'editProject', params: {projectId: project._id}}">Editar</a></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="row">
								<a class="waves-effect waves-light btn blue darken-4 col m12 modal-trigger" href="#addProjectModal">Agregar projecto</a>
							</div>

							<div id="addProjectModal" class="modal modal-fixed-footer">
								<div class="row">
									<div class="modal-content">
										<form class="col s12">
											<h5 class="condensed light">Datos generales del programa</h5>
											<div class="row">
												<div class="input-field col s2">
													<input id="projectNumber" type="text" class="validate" v-model="project.projectNumber">
													<label for="projectNumber">Número de proyecto</label>
												</div>
												<div class="input-field col s10">
													<input id="name" type="text" class="validate" v-model="project.name">
													<label for="name">Nombre del programa</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s8">
													<input id="description" type="text" class="validate" v-model="project.description">
													<label for="description">Descripción del programa</label>
												</div>
												<div class="input-field col s4">
													<input id="duration" type="text" class="validate" v-model="project.duration">
													<label for="duration">Duración (en años)</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s12">
													<input id="scope" type="text" class="validate" v-model="project.scope">
													<label for="scope">Ámbito de actuación</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s8">
													<input id="childrenProfile" type="text" class="validate" v-model="project.childrenProfile">
													<label for="childrenProfile">Perfil de los niños y niñas</label>
												</div>
												<div class="input-field col s4">
													<input id="ages" type="text" class="validate" v-model="project.ages">
													<label for="ages">Edades</label>
												</div>
											</div>
											<h5 class="condensed light">Capacidad de atención</h5>
											<div class="row">
												<div class="input-field col s6">
													<input id="totalSpace" type="text" class="validate" v-model="project.totalSpace">
													<label for="totalSpace">Cupos totales</label>
												</div>
												<div class="input-field col s6">
													<input id="availableSpace" type="text" class="validate" v-model="project.availableSpace">
													<label for="availableSpace">Cupos disponibles</label>
												</div>
											</div>
											<h5 class="condensed light">Contacto del coordinador(a)</h5>
											<div class="row">
												<div class="input-field col s6">
													<input id="coordinatorName" type="text" class="validate" v-model="project.coordinatorName">
													<label for="coordinatorName">Nombre completo</label>
												</div>
												<div class="input-field col s6">
													<input id="coordinatorPhone" type="text" class="validate" v-model="project.coordinatorPhone">
													<label for="coordinatorPhone">Teléfono fijo</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input id="coordinatorEmail" type="email" class="validate" v-model="project.coordinatorEmail">
													<label for="coordinatorEmail">Email</label>
												</div>
												<div class="input-field col s6">
													<input id="coordinatorCelPhone" type="text" class="validate" v-model="project.coordinatorCelPhone">
													<label for="coordinatorCelPhone">Teléfono celular</label>
												</div>
											</div>
											<h5 class="condensed light">Ubicación</h5>
											<div class="row">
												<div class="input-field col s8">
													<input id="postalCode" type="text" class="validate" v-model="project.postalCode">
													<label for="postalCode">Dirección Postal</label>
												</div>
												<div class="input-field col s4">
													<select id="projectDepartment" v-model="project.department">
														<option>Atlántida</option>
														<option>Colón</option>
														<option>Comayagua</option>
														<option>Copán</option>
														<option>Cortes</option>
														<option>Choluteca</option>
														<option>El Paraíso</option>
														<option>Francisco Morazán</option>
														<option>Gracias a Dios</option>
														<option>Intibucá</option>
														<option>Islas de la Bahía</option>
														<option>La Paz</option>
														<option>Lempira</option>
														<option>Ocotepeque</option>
														<option>Olancho</option>
														<option>Santa Bárbara</option>
														<option>Valle</option>
														<option>Yoro</option>
													</select>
													<label>Departamento</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s12">
													<textarea id="observations" type="text" class="materialize-textarea" v-model="project.observations"></textarea>
													<label for="observations">Observaciones</label>
												</div>
											</div>
											<h5 class="condensed light">Tipo de la vulneración de Derechos a niños y niñas (sólo centros residenciales)</h5>
											<h6 class="condensed light">Centro de la niñez y la adolescencia</h6>
											<div class="row valign-wrapper">
												<div class="input-field col s6">
													<input type="checkbox" id="abandonment" v-model="project.abandonment"/>
													<label for="abandonment">1.- Abandono</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="sexualFreedomVictims" v-model="project.sexualFreedomVictims"/>
													<label for="sexualFreedomVictims">7.1.- Víctima de delitos contra la libertad sexual</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="legalRepresentativeAbsence"  v-model="project.legalRepresentativeAbsence"/>
													<label for="legalRepresentativeAbsence">2.- Ausencia de representante legal</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="sexualHarassmentVictims" v-model="project.sexualHarassmentVictims" />
													<label for="sexualHarassmentVictims">7.2.- Víctima de hostigamiento sexual</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="abuseByOmission" v-model="project.abuseByOmission"/>
													<label for="abuseByOmission">3.1.- Abuso por Omisión</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="procuring" v-model="project.procuring"/>
													<label for="procuring">7.3.- Proxenetismo</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="abuseBySupression" v-model="project.abuseBySupression"/>
													<label for="abuseBySupression">3.2.- Maltrato por supresión</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="traficking" v-model="project.trafficking"/>
													<label for="traficking">7.4.- Trata de personas</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="abuseByTransgression" v-model="project.abuseByTransgression"/>
													<label for="abuseByTransgression">3.3.- Maltrato por transgresión</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="publicSexualExposure" v-model="project.publicSexualExposure"/>
													<label for="publicSexualExposure">7.5.- Espectáculos públicos de naturaleza sexual</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="lackOfBasicNeeds" v-model="project.lackOfBasicNeeds"/>
													<label for="lackOfBasicNeeds">4.- Carencia de atención suficiente para satisfacer sus necesidades básicas</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="pornography" v-model="project.pornography"/>
													<label for="pornography">7.6.- Pornografía</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="threatToHeritage" v-model="project.threatToHeritage"/>
													<label for="threatToHeritage">5.- Amenazas a su patrimonio</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="sexualTurism" v-model="project.sexualTurism"/>
													<label for="sexualTurism">7.7.- Turismo sexual</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="addiction" v-model="project.addiction"/>
													<label for="addiction">6.- Adicción a sustancias que producen dependencia</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="criminalRecruitmentRisk" v-model="project.criminalRecruitmentRisk"/>
													<label for="criminalRecruitmentRisk">7.8.- Riesgo de reclutamiento por organizaciones criminales</label>
												</div>
											</div>
											<h6 class="condensed light">Código Penal</h6>
											<div class="row">
												<div class="input-field col s4">
													<input type="checkbox" id="begging" v-model="project.begging"/>
													<label for="begging">1.- Víctimas de mendicidad</label>
												</div>
												<div class="input-field col s4">
													<input type="checkbox" id="economicExploitation" v-model="project.economicExploitation"/>
													<label for="economicExploitation">2.- Explotación económica</label>
												</div>
												<div class="input-field col s4">
													<input type="checkbox" id="childAbduction" v-model="project.childAbduction"/>
													<label for="childAbduction">3.- Sustracción de menores</label>
												</div>
											</div>
											<h5 class="condensed light">Tipología de servicios de atención diurna (sólo centros no residenciales)</h5>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="childrenDinning" v-model="project.childrenDinning"/>
													<label for="childrenDinning">Comedores infantiles</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="initialEducationAndEarlyEstimulationCenter" v-model="project.initialEducationAndEarlyEstimulationCenter"/>
													<label for="initialEducationAndEarlyEstimulationCenter">Centro de educación inicial y/o estimulación temprana</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="preBasicEducationCenter" v-model="project.preBasicEducationCenter"/>
													<label for="preBasicEducationCenter">Centro de educación prebásica</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="artisticFormationCenter" v-model="project.artisticFormationCenter"/>
													<label for="artisticFormationCenter">Centro de formación artística</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="sportEducationCenter" v-model="project.sportEducationCenter"/>
													<label for="sportEducationCenter">Centro de formación deportiva</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="vocationalEducationCenter" v-model="project.vocationalEducationCenter"/>
													<label for="vocationalEducationCenter">Centro de educación vocacional</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s6">
													<input type="checkbox" id="alternativeEducationCenter" v-model="project.alternativeEducationCenter"/>
													<label for="alternativeEducationCenter">Centro de educación alternativa no formal</label>
												</div>
												<div class="input-field col s6">
													<input type="checkbox" id="others" v-model="project.others"/>
													<label for="others">Otros</label>
												</div>
											</div>
											<div class="row">
												<div class="input-field col s12">
													<textarea id="typologyObservations" type="text" class="materialize-textarea" v-model="project.typologyObservations"></textarea>
													<label for="typologyObservations">Observaciones</label>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="modal-footer">
									<a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="addProject">Guardar</a>

								</div>
							</div>

						</div>        
						<div class="card-content">     
							<div class="class-action">
								<a class="waves-effect waves-light btn blue darken-4 right-align" v-on:click="updateOrganization">Actualizar</a>
								<a class="waves-effect waves-light btn red darken-1 right-align" v-link="{path: '/'}">Regresar</a>
							</div>
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
	var editProject = require('./editProject.vue')
	var listProjects = require('./listProjects.vue');
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
			this.getProjects();
			
		},
		methods: {
			updateOrganization: function(){
				this.organization.department = $('#department').find(":selected").text();
				

				this.organization.ursacrRegistrationDate = $('#ursacrRegistrationDate').val();
				
				this.organization.projects = this.newprojects;
				console.log(this.organization.projects[0].projectNumber);
				this.$http.put(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId,this.organization).then(function(response){
					swal('Éxito', 'Organización se edito exitosamente', 'success');
					this.$route.router.go('/');

				}, function(error){
					swal('Error', 'Error modificando organización', 'error');
				});
			},
			getOrganization: function(){
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId).then(function(response){
					this.organization=response.json()[0];
					$('#department').val(this.organization.department);
					$('#department').selectedIndex = this.organization.department;  
					$('#department').change();
					$('#department').material_select();

					$('#ursacrRegistrationDate').text = this.organization.ursacrRegistrationDate;
					
				},function(error){
					console.log(error);
				});
			},
			getProjects: function(){
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/projects/').then(function(response){
					this.projects = response.json();
					
				}, function(error){
					swal('Error', 'Error obteniendo los proyectos del servidor', 'error');
				});
			},
			addProject: function() {

				console.log(this.project.projectNumber);
				this.newprojects.push(this.project);
				this.projects.push(this.project)
				this.project = {};
				console.log(this.newprojects[0].projectNumber);

			}
		},
		data: function(){
			return {
				newprojects: [],
				organization: {},
				projects: [],
				project: {}
			}
		}

	}
	
</script>