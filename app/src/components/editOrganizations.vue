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
									<div class="file-field input-field col s4">
										<div class="btn">
											<span>Logo</span>
											<input id="editLogo" type="file">
										</div>
										<div class="file-path-wrapper">
											<input class="file-path validate" type="text">
										</div>
									</div>
									<div class="input-field col s4">
										<input id="orgNumber" v-model="organization.orgNumber" type="number" class="validate">
										<label class="active" for="orgNumber" v-bind:class="{'active': organization.orgNumber}">Número de boleta</label>
									</div>
									<div class="input-field col s4">
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
											<option value="Cortés">Cortés</option>
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
										<label class="active" for="municipality">Municipio</label>
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
										<input id="orgEmail" v-model="organization.orgEmail" type="text" class="validate">
										<label class="active" for="orgEmail">Email</label>
									</div>
								</div>
								<span class="card-title">Contacto del Director/a</span>
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
												<td> 

													<a class="waves-effect waves-light btn green darken-4" v-on:click="editHandler(project,$index)">Editar</a>
													<a class="waves-effect waves-light btn red darken-4" v-on:click="deleteProject(project)">Eliminar</a>
												</td>

											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div class="row">
								<a class="waves-effect waves-light btn blue darken-4 col m12 modal-trigger" href="#addProjectModal">Agregar proyecto</a>
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
													<input id="coordinatorEmail" type="text" class="validate" v-model="project.coordinatorEmail">
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
														<option selected>Atlántida</option>
														<option>Colón</option>
														<option>Comayagua</option>
														<option>Copán</option>
														<option>Cortés</option>
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
		props: ['currentUser'],
		ready: function(){
			console.log(this.currentUser)
			$("html, body").animate({ scrollTop: 0 }, "slow");
			this.try = "LOL";
			this.eoa = null;
			this.formData = new FormData();
			console.log(this.$route.params);

			$('select').material_select();
			var d = new Date();
			d.setFullYear( d.getFullYear() - 100 );
			$('.datepicker').pickadate(
			{

                            selectMonths: true,
                            selectYears: 100,
                            max: new Date(),
                            
                            labelMonthNext: 'Mes siguiente',
                            labelMonthPrev: 'Mes anterior',

                            labelMonthSelect: 'Selecciona un mes',
                            labelYearSelect: 'Selecciona un año',

                            monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
                            monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
                            weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
                            weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],

                            weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],

                            today: 'Hoy',
                            clear: 'Limpiar',
                            close: 'Cerrar',
                            
                        });
			$(document).ready(function(){
				$('.modal-trigger').modal();
			});
			this.getOrganization();
			this.getProjects();
			this.refreshUser();

		},
		methods: {
			refreshUser: function(){
				this.currentUser = {
					userId: window.sessionStorage.getItem('userId'),
					username: window.sessionStorage.getItem('username'),
					scope: window.sessionStorage.getItem('scope')
				}
			},
			editHandler: function(pro,index){
				
				console.log(this.projects.length-this.newprojects.length);
				if (index>(this.projects.length-this.newprojects.length-1)) {
					console.log(index); //es new project
					this.eoa = index;
					this.project=pro;
					
					$('#addProjectModal').modal('open');
					$('#addProjectModal').animate({ scrollTop: 0 }, 'slow');
					
				} else	{
					console.log("es menor"); // es old project


					this.createLog("Editó project "+pro.name);
					this.$route.router.go('/organization/edit/'+this.$route.params.organizationId+'/project/edit/'+pro._id);

					

				}




			},
			updateOrganization: function(){	
				this.organization.department = $('#department').find(":selected").text();

				this.organization.orgResolutionDate = $('#orgResolutionDate').val();
				this.organization.ursacrRegistrationDate = $('#ursacrRegistrationDate').val();
				this.organization.projects = this.newprojects;

				if(this.organization.orgNumber){this.formData.append("orgNumber", this.organization.orgNumber);}
				if(this.organization.orgName){this.formData.append("orgName", this.organization.orgName);}
				if(this.organization.acronym){this.formData.append("acronym", this.organization.acronym);}
				if(this.organization.postal){this.formData.append("postal", this.organization.postal);}
				if(this.organization.municipality){this.formData.append("municipality", this.organization.municipality);}
				if(this.organization.village){this.formData.append("village", this.organization.village);}
				if(this.organization.department){this.formData.append("department", $('#department').find(":selected").text());}
				if(this.organization.community){this.formData.append("community", this.organization.community);}
				if(this.organization.sector){this.formData.append("sector", this.organization.sector);}
				if(this.organization.mission){this.formData.append("mission", this.organization.mission);}
				if(this.organization.vision){this.formData.append("vision", this.organization.vision);}
				if(this.organization.market){this.formData.append("market", this.organization.market);}
				if(this.organization.webPage){this.formData.append("webPage", this.organization.webPage);}
				if(this.organization.orgPhone){this.formData.append("orgPhone", this.organization.orgPhone);}
				if(this.organization.orgCelPhone){this.formData.append("orgCelPhone", this.organization.orgCelPhone);}
				if(this.organization.orgSocialNetwork){this.formData.append("orgSocialNetwork", this.organization.orgSocialNetwork);}
				if(this.organization.orgEmail){this.formData.append("orgEmail", this.organization.orgEmail);}
				if(this.organization.directorName){this.formData.append("directorName", this.organization.directorName);}
				if(this.organization.directorPhone){this.formData.append("directorPhone", this.organization.directorPhone);}
				if(this.organization.directorCelPhone){this.formData.append("directorCelPhone", this.organization.directorCelPhone);}
				if(this.organization.directorEmail){this.formData.append("directorEmail", this.organization.directorEmail);}
				if(this.organization.orgResolutionNumber){this.formData.append("orgResolutionNumber", this.organization.orgResolutionNumber);}
				if(this.organization.orgResolutionDate){this.formData.append("orgResolutionDate", this.monthtoEnglish($('#orgResolutionDate').val()));}
				if(this.organization.legalRepresentativeName){this.formData.append("legalRepresentativeName", this.organization.legalRepresentativeName);}
				if(this.organization.ursacRegistrationNumber){this.formData.append("ursacRegistrationNumber", this.organization.ursacRegistrationNumber);}
				if(this.organization.ursacRegistrationDate){this.formData.append("ursacRegistrationDate", this.monthtoEnglish($('#ursacRegistrationDate').val()));}
				if(this.organization.latitude){this.formData.append("latitude", this.organization.latitude);}
				if(this.organization.longitude){this.formData.append("longitude", this.organization.longitude);}
				if(this.organization.intervieweeName){this.formData.append("intervieweeName", this.organization.intervieweeName);}
				if(this.organization.interviewDate){this.formData.append("interviewDate", this.monthtoEnglish($('#interviewDate').val()));}
				if(this.organization.interviewTime){this.formData.append("interviewTime", this.organization.interviewTime);}
				if(this.organization.otherOrgsInRegion){this.formData.append("otherOrgsInRegion", this.organization.otherOrgsInRegion);}
				if(this.organization.observations){this.formData.append("observations", this.organization.observations);}

				console.log("printing projects");
				console.log(this.organization.projects);
				this.createLog("Edito organizacion "+this.organization.orgName);
				if(this.organization.projects){this.formData.append("projects", JSON.stringify(this.organization.projects));}
				if($("#editLogo")[0].files[0]){this.formData.append("logo", $("#editLogo")[0].files[0])}

					this.$http.put(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId,this.formData).then(function(response){
						
						swal('Éxito', 'Organización se editó exitosamente', 'success');
						this.$route.router.go('/');

					}, function(error){
						swal('Error', 'Error modificando organización', 'error');
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

			deleteProject: function (pro) {
				console.log(pro);
				//if its new done if its new.
				if (this.newprojects.length!=0) {
					for (var i = 0; i < this.newprojects.length; i++) {
						if (this.newprojects[i].projectNumber==pro.projectNumber) {

							console.log(this.projects[this.projects.length-1+i].name);
							console.log(this.projects[this.projects.length-1+i].name);
							this.newprojects.splice(i,1);
							this.projects.splice(this.projects.length-1+i,1);
							console.log(this.projects[this.projects.length-1+i].name);
							return "se realizo exitosamente";
						}
					}
				}
				//if its not new

				for (var i = 0; i < this.projects.length; i++) {

					if (pro._id==this.projects[i]._id) {
						console.log("mmm");
						this.$http.delete(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/project/'+pro._id ).then(function(response){
							this.projects.splice(i,1);
							this.createLog("Eliminó proyecto "+pro.name);
							console.log(response);
						}, function(error){
							console.log("somehow it didnt delete :(");
						});
						break;

					}
				}
			},
			monthtoEnglish: function (date) {
				console.log("date");
				var inEnglish="";
				if (date.search("Enero")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" January,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else 
				if (date.search("Febrero")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" February,"+date.substring(date.length-5,date.length)); 
					return inEnglish;  
				} else
				if (date.search("Marzo")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" March"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Abril")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" April,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Mayo")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" May,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Junio")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" June,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Julio")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" July,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Agosto")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" August,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Septiembre")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" September,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Octubre")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" October,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Noviembre")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" November,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else
				if (date.search("Diciembre")>-1) {
					inEnglish= "".concat(date.substring(0,1)+" December,"+date.substring(date.length-5,date.length));
					return inEnglish;
				} else {
					return -1;
				}


			},
			getOrganization: function(){
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId).then(function(response){
					this.organization=response.json()[0];
					var month = new Array(12);
					month[0] = "January";
					month[1] = "February";
					month[2] = "March";
					month[3] = "April";
					month[4] = "May";
					month[5] = "June";
					month[6] = "July";
					month[7] = "August";
					month[8] = "September";
					month[9] = "October";
					month[10] = "November";
					month[11] = "December";


					var picker = $('#orgResolutionDate').pickadate('picker');

					if (this.organization.orgResolutionDate) {
						var d1 = new Date(this.organization.orgResolutionDate);  // Valid Date
						picker.set('select', [d1.getUTCFullYear(), month[d1.getUTCMonth()], d1.getUTCDate()]);
						this.organization.orgResolutionDate = d1.getUTCDate()+" "+month[d1.getUTCMonth()]+", "+d1.getUTCFullYear();
					}
					if (this.organization.ursacRegistrationDate) {
						var d2 = new Date(this.organization.ursacRegistrationDate); 
						picker = $('#ursacRegistrationDate').pickadate('picker');
						picker.set('select', [d2.getUTCFullYear(), month[d2.getUTCMonth()], d2.getUTCDate()]);
						this.organization.ursacRegistrationDate = d2.getUTCDate()+" "+month[d2.getUTCMonth()]+", "+d2.getUTCFullYear();		
					}
					if (this.organization.interviewDate) {
						var d3 = new Date(this.organization.interviewDate); 
						this.organization.interviewDate = d3.getUTCDate()+" "+month[d3.getUTCMonth()]+", "+d3.getUTCFullYear();
					}


					$('#department').val(this.organization.department);
					$('#department').selectedIndex = this.organization.department;  
					$('#department').change();
					$('#department').material_select();
				},function(error){
					console.log(error);
				});
			},

			getProjects: function(){
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/projects/').then(function(response){

					this.projects = response.json();
					console.log(this.projects.length+" length");

				}, function(error){
					swal('Error', 'Error obteniendo los proyectos del servidor', 'error');
				});
			},
			addProject: function() {
				console.log($('#projectDepartment').find(":selected").text());
				console.log(this.project.projectNumber);
				
				this.try = $('#projectDepartment').find(":selected").text();
				this.project.department = $('#projectDepartment').find(":selected").text();
				

				if (this.eoa == null) { 			//new
					if (this.newprojects.length==0) {
						this.newprojects.push(this.project);
						this.projects.push(this.project);
						console.log(this.newprojects[this.newprojects.length-1][0]);
						this.project = {};
					} else {
						this.newprojects.push(this.project);
						console.log(this.newprojects.length-1);
						this.projects.push(this.project);
						this.project = {};
					}
				} else{ //added before edit project
					console.log(this.eoa + " EOA");

					this.projects[this.eoa]=this.project;
					console.log(this.projects[this.eoa].name);
					console.log(this.projects[this.eoa].department);
					
					this.eoa=null;
					this.project = {};

				}
				$('#projectDepartment').val("Atlántida");


				$('#projectDepartment').material_select();


/*
if ($('#projectNumber').val()!=="" && $('#name').val()!=="" ) {
for (var i = 0; i < this.newprojects.length ; i++) {
if (this.newprojects.length!=0) {
if (this.project.projectNumber == this.newprojects[i].projectNumber) {


this.newprojects[i]=this.project;

this.projects.push(this.project);
this.project = {};
console.log("wtfitsworking")
return "edit";
}
}
}

console.log($('#projectDepartment').find(":selected").text());
this.project.department = $('#projectDepartment').find(":selected").text();
this.newprojects.push(this.project);
this.projects.push(this.project);
this.project = {};
console.log(this.newprojects[this.newprojects.length-1].projectNumber);
console.log(this.newprojects[0].projectNumber + " add pro");
}else{
var errstr= "Error agregando organización, falta:\n";
if ($('#projectNumber').val()==="") {
errstr = errstr.concat("Numero de projecto\n");

}
if ($('#name').val()==="") {
errstr =  errstr.concat("Nombre del projecto\n");
}
console.log(errstr);
swal('Error', errstr, 'error');
}
*/
}
},
data: function(){
	return {
		newprojects: [],
		organization: {},
		projects: [],
		project: {},
		dataPr: {},
		formData: {},
		try: {},
		eoa: {}//edit or add
	}
}

}

</script>