<template>

    <div id="viewOrganization" >
        <div class="viewOrg">
            <div class="row">
                <div class="card blue lighten-5 col m10 s12 offset-m1">
                    <div class="card-content">
                        <div class="row">
                            <form class="col s12">
                                <span class="card-title">Información General</span>
                                <div class="row">
                                    <div class="input-field col s2">
                                        <img class="viewLogo" src="{{organization.logoUrl}}" alt="logo">
                                    </div>
                                    <div class="input-field col s3">
                                    <p id="orgNumber">{{organization.orgNumber}}</p>

                                        <label class="active" for="orgNumber" ">Número de boleta</label>
                                    </div>
                                    <div class="input-field col s7">
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

                                        <label class="active" for="municipality" ">Municipalidad</label>
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
                                <span class="card-title">Contacto de la ONG</span>
                                <div class="row">
                                    <div class="input-field col s4">
                                        <p id="webPage">{{organization.webPage}}</p>
                                        <label class="active" for="webPage" ">Página web</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <p id="orgPhone">{{organization.orgPhone}}</p>
                                        <label class="active" for="orgPhone" ">Número de teléfono fijo</label>
                                    </div>
                                    <div class="input-field col s4">
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
                                <span class="card-title">Contacto del director</span>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <div class="input-field col s6">
                                            <p id="directorName">{{organization.directorName}}</p>
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
                                    <span class="card-title">Verificación de la entrevista</span>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <p id="intervieweeName">{{organization.intervieweeName}}</p>

                                            <label class="active" for="intervieweeName" ">Nombre de la persona entrevistada</label>
                                        </div>
                                    </div>
                                    <div class="row">
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
        var viewProject = require('./viewProject.vue')
        var listProjects = require('./listProjects.vue');
        module.exports = {
            name: 'viewOrganization',
            ready: function(){
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

var d1 = new Date(this.organization.orgResolutionDate); // Valid Date
this.organization.orgResolutionDate = d1.getUTCDate()+" "+month[d1.getUTCMonth()]+", "+d1.getUTCFullYear();
var d2 = new Date(this.organization.ursacRegistrationDate); 
this.organization.ursacRegistrationDate = d2.getUTCDate()+" "+month[d2.getUTCMonth()]+", "+d2.getUTCFullYear();
var d3 = new Date(this.organization.interviewDate); 
this.organization.interviewDate = d3.getUTCDate()+" "+month[d3.getUTCMonth()]+", "+d3.getUTCFullYear();



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
                    project: {}
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