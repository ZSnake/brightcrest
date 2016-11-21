
<template>

    <div id="viewOrganization" >
        <div class="viewOrg">
            <div class="row">
                <div class="card blue lighten-5 col m10 s12 offset-m1">
                    <div class="card-content">

                        <div class="row">

                            <form class="col s12">
                                <a class="waves-effect waves-light btn red darken-1 right-align col m2 s2 offset-m10" v-link="{path: '/'}">Regresar</a>
                                <span class="card-title">Información General</span>

                                <div class="row">
                                    <div class="input-field col s12">
                                        <img class="viewLogo" v-bind:src="organization.logoUrl" alt="logo">
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="input-field col s6">
                                        <p id="orgNumber">{{organization.orgNumber}}</p>

                                        <label class="active" for="orgNumber" ">Número de boleta</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="orgName">{{organization.orgName}}</p>

                                        <label class="active" for="orgName" ">Nombre de la organización</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p id="acronym">{{organization.acronym}}</p>

                                        <label class="active" for="acronym" ">Siglas de la organización</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="postal">{{organization.postal}}</p>

                                        <label class="active" for="postal" ">Dirección postal</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">

                                        <p id="department">{{organization.department}}</p>

                                        <label class="active" for="department" ">Departamento</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="municipality">{{organization.municipality}}</p>

                                        <label class="active" for="municipality" ">Municipio</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s4">
                                        <p id="village">{{organization.village}}</p>

                                        <label class="active" for="village" ">Aldea</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <p id="community">{{organization.community}}</p>

                                        <label class="active" for="community" ">Comunidad</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <p id="sector">{{organization.sector}}</p>

                                        <label class="active" for="sector" ">Sector</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p id="mission">{{organization.mission}}</p>

                                        <label class="active" for="mission" ">Misión</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="vision">{{organization.vision}}</p>

                                        <label class="active" for="vision" ">Visión</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">

                                        <p id="market">{{organization.market}}</p>

                                        <label class="active" for="market" ">Orientación principal de atención (rubro)</label>
                                    </div>
                                </div>
                                <span class="card-title" >Contacto de la ONG</span>
                                <div class="row">
                                    <div class="input-field col s4" >
                                        <p id="webPage">{{organization.webPage}}</p>
                                        <label class="active" for="webPage" ">Página web</label>
                                    </div>
                                    <div class="input-field col s4" v-if="checkPermission()">
                                        <p id="orgPhone">{{organization.orgPhone}}</p>
                                        <label class="active" for="orgPhone" ">Número de teléfono fijo</label>
                                    </div>
                                    <div class="input-field col s4" v-if="checkPermission()">
                                        <p id="orgCelPhone">{{organization.orgCelPhone}}</p>
                                        <label class="active" for="orgCelPhone" ">Número de celular</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p id="orgSocialNetwork">{{organization.orgSocialNetwork}}</p>

                                        <label class="active" for="orgSocialNetwork" ">Redes Sociales</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="orgEmail">{{organization.orgEmail}}</p>

                                        <label class="active" for="orgEmail" ">Email</label>
                                    </div>
                                </div>
                                <span class="card-title" v-if="checkPermission()">Contacto del Director/a</span>
                                <div class="row" v-if="checkPermission()">
                                    <div class="input-field col s6">
                                        <div class="input-field col s6">
                                            <p id="directorName">{{organization.directorName}}</p>
                                            <label class="active" for="directorName" ">Nombre del director</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <p id="directorEmail">{{organization.directorEmail}}</p>

                                            <label class="active" for="directorEmail" ">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <p id="directorPhone">{{organization.directorPhone}}</p>

                                            <label class="active" for="directorPhone" ">Teléfono fijo</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <p id="directorCelPhone">{{organization.directorCelPhone}}</p>

                                            <label class="active" for="directorCelPhone" ">Teléfono celular</label>
                                        </div>
                                    </div>
                                </div>
                                <span class="card-title">Personería Jurídica</span>
                                <div class="row">
                                    <div class="input-field col s4">
                                        <p id="orgResolutionNumber">{{organization.orgResolutionNumber}}</p>

                                        <label class="active" for="orgResolutionNumber" ">Número de resolución</label>
                                    </div>

                                    <div class="input-field col s4">
                                        <p id="orgResolutionDate">{{organization.orgResolutionDate}}</p>

                                        <label class="active" for="orgResolutionDate" ">Fecha de resolución</label>

                                    </div>
                                    <div class="input-field col s4">
                                        <p id="orgResolutionDate">{{organization.legalRepresentativeName}}</p>

                                        <label class="active" for="legalRepresentativeName" ">Nombre de representante legal</label>
                                    </div>
                                </div>
                                <span class="card-title">Registro en URSAC</span>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p id="ursacRegistrationNumber">{{organization.ursacRegistrationNumber}}</p>

                                        <label class="active" for="ursacRegistrationNumber" ">Número de registro</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <p id="ursacRegistrationDate">{{organization.ursacRegistrationDate}}</p>

                                        <label class="active" for="ursacRegistrationDate" ">Fecha de resolución</label>

                                    </div>
                                </div>
                                <span class="card-title">Ubicación Geográfica</span>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p id="latitude">{{organization.latitude}}</p>

                                        <label class="active" for="latitude" ">Latitud</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p id="longitude">{{organization.longitude}}</p>

                                        <label class="active" for="longitude" ">Longitud</label>
                                    </div>
                                </div>
                                <span class="card-title" v-if="checkPermission()">Verificación de la entrevista</span>
                                <div class="row" v-if="checkPermission()">
                                    <div class="input-field col s12">
                                        <p id="intervieweeName">{{organization.intervieweeName}}</p>

                                        <label class="active" for="intervieweeName" ">Nombre de la persona entrevistada</label>
                                    </div>
                                </div>
                                <div class="row" v-if="checkPermission()">
                                    <div class="input-field col s6">
                                        <p id="interviewDate">{{organization.interviewDate}}</p>

                                        <label class="active" for="interviewDate" ">Fecha de la entrevista</label>

                                    </div>
                                    <div class="input-field col s6">
                                        <p id="interviewTime">{{organization.interviewTime}}</p>

                                        <label class="active" for="interviewTime" ">Hora de la entrevista</label>
                                    </div>
                                </div>
                                <span class="card-title">Información adicional/Otras informaciones</span>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <p id="otherOrgsInRegion">{{organization.otherOrgsInRegion}}</p>

                                        <label class="active" for="otherOrgsInRegion" ">Conoce otra(s) ONG del sector que trabaja en esta región?</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <p id="observations">{{organization.observations}}</p>

                                        <label class="active" for="observations" ">Observaciones</label>
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
                                                <td><a class="waves-effect waves-light btn green darken-4" v-link="{name: 'viewProject', params: {projectId: project._id}}">ver</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                        </div>        
                        <div class="card-content">     
                            <div class="class-action">


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
    var viewProject = require('./viewProject.vue')
    var listProjects = require('./listProjects.vue');
    module.exports = {
        name: 'viewOrganization',
        props: ['currentUser'],
        ready: function(){
            this.getScopes();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $(document).ready(function() {
                Materialize.updateTextFields();
            });
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
            getScopes: function(){
                this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
                    this.scopes=response.json();

                },function(error){
                    console.log(error);
                });
            },
            checkPermission: function() {
                var userScope = window.sessionStorage.getItem('scope');
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
            getOrganization: function(){
                this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId).then(function(response){
                    this.organization=response.json()[0];
                    console.log(this.organization);
                    var month = new Array(12);
                    month[0] = "Enero";
                    month[1] = "Febrero";
                    month[2] = "Marzo";
                    month[3] = "Abril";
                    month[4] = "Mayo";
                    month[5] = "Junio";
                    month[6] = "Julio";
                    month[7] = "Agosto";
                    month[8] = "Septiembre";
                    month[9] = "Octubre";
                    month[10] = "Noviembre";
                    month[11] = "Diciembre";

                    console.log(this.organization.orgResolutionDate);
                    if (this.organization.orgResolutionDate && this.organization.orgResolutionDate.toString()!="1970-01-01T00:00:00.000Z") {
                        var d1 = new Date(this.organization.orgResolutionDate); 
                        this.organization.orgResolutionDate = d1.getUTCDate()+" "+month[d1.getUTCMonth()]+", "+d1.getUTCFullYear();
                    } else this.organization.orgResolutionDate = "No Aplica";

                    if (this.organization.ursacRegistrationDate && this.organization.ursacRegistrationDate.toString()!="1970-01-01T00:00:00.000Z") {
                        var d2 = new Date(this.organization.ursacRegistrationDate); 
                        this.organization.ursacRegistrationDate = d2.getUTCDate()+" "+month[d2.getUTCMonth()]+", "+d2.getUTCFullYear();
                    } else this.organization.ursacRegistrationDate = "No Aplica";

                    if (this.organization.interviewDate && this.organization.ursacRegistrationDate.toString()!="1970-01-01T00:00:00.000Z") {
                        var d3 = new Date(this.organization.interviewDate); 
                        this.organization.interviewDate = d3.getUTCDate()+" "+month[d3.getUTCMonth()]+", "+d3.getUTCFullYear();
                    } else this.organization.ursacRegistrationDate = "No Aplica";





                },function(error){
                    console.log(error);
                });

                $(document).ready(function() {
                    Materialize.updateTextFields();
                });

            },
            getProjects: function(){
                this.$http.get(config.baseUrl() + '/v1/organization/'+this.$route.params.organizationId+'/projects/').then(function(response){
                    this.projects = response.json();

                }, function(error){
                    swal('Error', 'Error obteniendo los proyectos del servidor', 'error');
                });
            },

        },
        data: function(){
            return {
                newprojects: [],
                organization: {},
                projects: [],
                project: {},
                scopes: []
            }
        }

    }
</script>

<style>
    .input-field input[type=text].invalid {
        border-bottom: 1px solid #F0F8FF;
        box-shadow: 0 1px 0 0 #F0F8FF;
    }

    .viewLogo{
        height: 150px;
    }
</style>