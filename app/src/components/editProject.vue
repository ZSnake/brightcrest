<template>
	<div id="editProject" >
		<div class="editPro">
			<div class="row">
				<div class="card blue lighten-5 col m10 s12 offset-m1">
					<div class="card-content">
						<div class="row">
							<form class="col s12">
								<h5 class="condensed light">Datos generales del programa</h5>
								<div class="row">
									<div class="input-field col s2">
										<input id="projectNumber" v-model="project.projectNumber" type="text" class="validate" >
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
										<textarea id="typologyObservations" type="text" class="materialize-textarea" v-model="project.tipologyObservations"></textarea>
										<label for="typologyObservations">Observaciones</label>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div>
						<a v-on:click="updateProject()">Guardar</a>

					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');

	module.exports = {
		name: 'editProject',

		ready: function() {

			$('select').material_select();
			this.getProject();

		},
		methods: {
			updateProject: function() {
				this.project.department = $('#projectDepartment').find(":selected").text();
				this.$http.put(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/project/'+this.$route.params.projectId,this.project).then(function(response){
					this.$route.router.go('/organization/edit/'+this.$route.params.organizationId);
				}, function(error){
					swal('Error', 'Error modificando projecto', 'error');
				});
			},

			getProject: function(){
				'/v1/organization/{organizationId}/project/{projectId}'
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/project/'+this.$route.params.projectId).then(function(response){
					this.project=response.json()[0];
					console.log(this.project);
					$('#department').val(this.project.department);
				},function(error){
					console.log(error);
				});
			}			

		},
		data: function(){
			return {
				project: {},
			}
		}
	}

</script>
<style>
	.modal { width: 80% !important  }  /* increase the width as per you desire */
</style>
