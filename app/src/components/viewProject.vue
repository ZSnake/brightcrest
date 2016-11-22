<template>
	<div id="viewProject" >
		<div class="viewPro">
			<div class="row">
				<div class="card blue lighten-5 col m10 s12 offset-m1">
					<div class="card-content">

						<a class="waves-effect waves-light btn red darken-1 right-align col m2 s2 offset-m10" v-link="{name: 'viewOrganization', params: {organizationId: $route.params.organizationId}}">Regresar</a>
						<div class="row">
							<form class="col s12">
								<h5 class="condensed light">Datos generales del programa</h5>
								<div class="row">
									<div class="input-field col s2">

										<p id="projectNumber">{{project.projectNumber}}</p>

										<label class="active" for="projectNumber" ">Número de proyecto</label>

										
									</div>
									<div class="input-field col s10">
										<p id="name" type="text" class="validate">{{project.name}}</p>

										<label class="active" for="name">Nombre del programa</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s8">
										<p id="description" type="text" class="validate">{{project.description}}</p>

										<label class="active" for="description">Descripción del programa</label>
									</div>
									<div class="input-field col s4">
										<p id="duration" type="text" class="validate">{{project.duration}}</p>

										<label class="active" for="duration">Duración (en años)</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<p id="scope" type="text" class="validate">{{project.scope}}</p>

										<label class="active" for="scope">Ámbito de actuación</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s8">
										<p id="childrenProfile" type="text" class="validate">{{project.childrenProfile}}</p>

										<label class="active" for="childrenProfile">Perfil de los niños y niñas</label>
									</div>
									<div class="input-field col s4">
										<p id="ages" type="text" class="validate">{{project.ages}}</p>

										<label class="active" for="ages">Edades</label>
									</div>
								</div>
								<h5 class="condensed light">Capacidad de atención</h5>
								<div class="row">
									<div class="input-field col s6">
										<p id="totalSpace" type="text" class="validate">{{project.totalSpace}}</p>

										<label class="active" for="totalSpace">Cupos totales</label>
									</div>
									<div class="input-field col s6">
										<p id="availableSpace" type="text" class="validate">{{project.availableSpace}}</p>

										<label class="active" for="availableSpace">Cupos disponibles</label>
									</div>
								</div>
								<h5 class="condensed light" v-if="checkPermission()">Contacto del coordinador(a)</h5>
								<div class="row" v-if="checkPermission()">
									<div class="input-field col s6">
										<p id="coordinatorName" type="text" class="validate">{{project.coordinatorName}}</p>

										<label class="active" for="coordinatorName">Nombre completo</label>
									</div>
									<div class="input-field col s6">
										<p id="coordinatorPhone" type="text" class="validate">{{project.coordinatorPhone}}</p>

										<label class="active" for="coordinatorPhone">Teléfono fijo</label>
									</div>
								</div>
								<div class="row" v-if="checkPermission()">
									<div class="input-field col s6">
										<p id="coordinatorEmail" type="text" class="validate">{{project.coordinatorEmail}}</p>

										<label class="active" for="coordinatorEmail">Email</label>
									</div>
									<div class="input-field col s6" >
										<p id="coordinatorCelPhone" type="text" class="validate">{{project.coordinatorCelPhone}}</p>

										<label class="active" for="coordinatorCelPhone">Teléfono celular</label>
									</div>
								</div>
								<h5 class="condensed light">Ubicación</h5>
								<div class="row">
									<div class="input-field col s8">
										<p id="postalCode" type="text" class="validate">{{project.postalCode}}</p>

										<label class="active" for="postalCode">Dirección Postal</label>
									</div>
									<div class="input-field col s4">
										<p id="department">{{project.department}}</p>

										<label class="active" for="department" ">Departamento</label>

									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<p id="observations">{{project.observations}}</p>

										<label class="active" for="observations" ">Observaciones</label>


									</div>
								</div>
								<h5 class="condensed light">Tipo de la vulneración de Derechos a niños y niñas (sólo centros residenciales)</h5>
								<h6 class="condensed light">Centro de la niñez y la adolescencia</h6>
								<div class="row valign-wrapper">
									<div class="input-field col s6">
										<input type="checkbox" id="abandonment" v-model="project.abandonment"/>
										<label class="active" for="abandonment">1.- Abandono</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="sexualFreedomVictims" v-model="project.sexualFreedomVictims"/>
										<label class="active" for="sexualFreedomVictims">7.1.- Víctima de delitos contra la libertad sexual</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="legalRepresentativeAbsence"  v-model="project.legalRepresentativeAbsence"/>
										<label class="active" for="legalRepresentativeAbsence">2.- Ausencia de representante legal</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="sexualHarassmentVictims" v-model="project.sexualHarassmentVictims" />
										<label class="active" for="sexualHarassmentVictims">7.2.- Víctima de hostigamiento sexual</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="abuseByOmission" v-model="project.abuseByOmission"/>
										<label class="active" for="abuseByOmission">3.1.- Abuso por Omisión</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="procuring" v-model="project.procuring"/>
										<label class="active" for="procuring">7.3.- Proxenetismo</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="abuseBySupression" v-model="project.abuseBySupression"/>
										<label class="active" for="abuseBySupression">3.2.- Maltrato por supresión</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="traficking" v-model="project.trafficking"/>
										<label class="active" for="traficking">7.4.- Trata de personas</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="abuseByTransgression" v-model="project.abuseByTransgression"/>
										<label class="active" for="abuseByTransgression">3.3.- Maltrato por transgresión</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="publicSexualExposure" v-model="project.publicSexualExposure"/>
										<label class="active" for="publicSexualExposure">7.5.- Espectáculos públicos de naturaleza sexual</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="lackOfBasicNeeds" v-model="project.lackOfBasicNeeds"/>
										<label class="active" for="lackOfBasicNeeds">4.- Carencia de atención suficiente para satisfacer sus necesidades básicas</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="pornography" v-model="project.pornography"/>
										<label class="active" for="pornography">7.6.- Pornografía</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="threatToHeritage" v-model="project.threatToHeritage"/>
										<label class="active" for="threatToHeritage">5.- Amenazas a su patrimonio</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="sexualTurism" v-model="project.sexualTurism"/>
										<label class="active" for="sexualTurism">7.7.- Turismo sexual</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="addiction" v-model="project.addiction"/>
										<label class="active" for="addiction">6.- Adicción a sustancias que producen dependencia</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="criminalRecruitmentRisk" v-model="project.criminalRecruitmentRisk"/>
										<label class="active" for="criminalRecruitmentRisk">7.8.- Riesgo de reclutamiento por organizaciones criminales</label>
									</div>
								</div>
								<h6 class="condensed light">Código Penal</h6>
								<div class="row">
									<div class="input-field col s4">
										<input type="checkbox" id="begging" v-model="project.begging"/>
										<label class="active" for="begging">1.- Víctimas de mendicidad</label>
									</div>
									<div class="input-field col s4">
										<input type="checkbox" id="economicExploitation" v-model="project.economicExploitation"/>
										<label class="active" for="economicExploitation">2.- Explotación económica</label>
									</div>
									<div class="input-field col s4">
										<input type="checkbox" id="childAbduction" v-model="project.childAbduction"/>
										<label class="active" for="childAbduction">3.- Sustracción de menores</label>
									</div>
								</div>
								<h5 class="condensed light">Tipología de servicios de atención diurna (sólo centros no residenciales)</h5>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="childrenDinning" v-model="project.childrenDinning"/>
										<label class="active" for="childrenDinning">Comedores infantiles</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="initialEducationAndEarlyEstimulationCenter" v-model="project.initialEducationAndEarlyEstimulationCenter"/>
										<label class="active" for="initialEducationAndEarlyEstimulationCenter">Centro de educación inicial y/o estimulación temprana</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="preBasicEducationCenter" v-model="project.preBasicEducationCenter"/>
										<label class="active" for="preBasicEducationCenter">Centro de educación prebásica</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="artisticFormationCenter" v-model="project.artisticFormationCenter"/>
										<label class="active" for="artisticFormationCenter">Centro de formación artística</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="sportEducationCenter" v-model="project.sportEducationCenter"/>
										<label class="active" for="sportEducationCenter">Centro de formación deportiva</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="vocationalEducationCenter" v-model="project.vocationalEducationCenter"/>
										<label class="active" for="vocationalEducationCenter">Centro de educación vocacional</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s6">
										<input type="checkbox" id="alternativeEducationCenter" v-model="project.alternativeEducationCenter"/>
										<label class="active" for="alternativeEducationCenter">Centro de educación alternativa no formal</label>
									</div>
									<div class="input-field col s6">
										<input type="checkbox" id="others" v-model="project.others"/>
										<label class="active" for="others">Otros</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<p id="typologyObservations" type="text" class="validate">{{project.typologyObservations}}</p>

										<label class="active" for="typologyObservations">Observaciones</label>



									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="card-content">
						<div class="card-action">

							
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

	module.exports = {
		name: 'viewProject',
		props: ['currentUser'],
		ready: function() {
			this.getScopes();
			$('select').material_select();
			this.getProject();
			$("html, body").animate({ scrollTop: 0 }, "slow");

		},
		methods: {
			getScopes: function(){
				this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
					this.scopes=response.json();

				},function(error){
					console.log(error);
				});
			},
			checkPermission: function() {

				var userScope = window.sessionStorage.getItem('scope');
				console.log(userScope)
				var controlPermissions=null;

				for (var i = 0; i<this.scopes.length; i++) {
					if (userScope === this.scopes[i].scope) {
						controlPermissions = JSON.parse(this.scopes[i].views);
						break;
					}
				}
				if (controlPermissions!=null) {
					if (controlPermissions.addOrganization==true || controlPermissions.editOrganization==true || controlPermissions.deleteOrganization==true) {
						return true;
					} else  {
						return false;
					}
				}

			},
			getProject: function(){
				'/v1/organization/{organizationId}/project/{projectId}'
				this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/project/'+this.$route.params.projectId).then(function(response){
					this.project=response.json()[0];
					$('#typologyObservations').text(this.project.typologyObservations);
					console.log(this.project.typologyObservations);
					
				},function(error){
					console.log(error);
				});
			}			

		},
		data: function(){
			return {
				project: {},
				scopes: []
			}
		}
	}

</script>
<style>
	.modal { width: 80% !important  }  /* increase the width as per you desire */
</style>
