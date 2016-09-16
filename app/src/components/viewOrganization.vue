<template>
    <div><a class="waves-effect waves-light btn blue darken-4 col m11 modal-trigger"  v-on:click="getOrganization()" href="#viewOrganization">ver</a>

        <div id="viewOrganization" class="modal modal-fixed-footer">
            <div class="modal-content">

                <div class="viewOrg">

                    <div class="card blue lighten-5 col m10 s12 offset-m1">
                        <div class="card-content">
                            <div class="row">
                                <span class="card-title">Información General</span>
                                <table>
                                    <thead>
                                        <tr>
                                            <th data-field="id">Nombre de Tabla</th>
                                            <th data-field="name">Dato</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr ">
                                            <td>Número de boleta</td>
                                            <td id="orgNumber">{{organization.orgNumber}}</td>

                                        </tr>
                                        <tr>
                                            <td>Nombre de la organización</td>
                                            <td id="orgName">{{organization.orgName}}</td>
                                        </tr>
                                        <tr>
                                            <td>Siglas de la organización</td>
                                            <td id="acronym">{{organization.acronym}}</td>
                                        </tr>
                                        <tr>
                                            <td>Dirección postal</td>
                                            <td id="postal">{{organization.postal}}</td>
                                        </tr>
                                        <tr>
                                            <td>Departamento</td>
                                            <td id="department">{{organization.department}}</td>
                                        </tr>
                                        <tr>
                                            <td>Municipalidad</td>
                                            <td id="municipality">{{organization.municipality}}</td>
                                        </tr>
                                        <tr>
                                            <td>Aldea</td>
                                            <td id="village">{{organization.village}}</td>
                                        </tr>
                                        <tr>
                                            <td>Comunidad</td>
                                            <td id="community">{{organization.community}}</td>
                                        </tr>
                                        <tr>
                                            <td>Sector</td>
                                            <td id="sector">{{organization.sector}}</td>
                                        </tr>
                                        <tr>
                                            <td>Misión</td>
                                            <td id="mission">{{organization.mission}}</td>
                                        </tr>
                                        <tr>
                                            <td>Visión</td>
                                            <td id="vision">{{organization.vision}}</td>
                                        </tr>
                                        <tr>
                                            <td>Orientación principal de atención (rubro)</td>
                                            <td id="market">{{organization.market}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Contacto de la ONG</span>
                                <table>
                                    <tbody>


                                        <tr>

                                            <td>Pagina web</td>
                                            <td id="webpage">{{organization.webPage}}</td>
                                        </tr>
                                        <tr>
                                            <td>Numero de la Organizacion</td>
                                            <td id="orgPhone">{{organization.orgPhone}}</td>
                                        </tr>
                                        <tr>
                                            <td>Numero de celular de la organizacion</td>
                                            <td id="orgCelPhone">{{organization.orgCelPhone}}</td>
                                        </tr>
                                        <tr>
                                            <td>Redes Sociales</td>
                                            <td id="orgSocialNetwork">{{organization.orgSocialNetwork}}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td id="orgEmail">{{organization.orgEmail}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Contacto del director</span>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>Nombre</td>
                                            <td id="directorName">{{organization.directorName}}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td id="directorEmail">{{organization.directorEmail}}</td>
                                        </tr>
                                        <tr>
                                            <td>Teléfono fijo</td>
                                            <td id="directorPhone">{{organization.directorPhone}}</td>
                                        </tr>
                                        <tr>
                                            <td>Celular</td>
                                            <td id="directorCelPhone">{{organization.directorCelPhone}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Personería Jurídica</span>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>Número de resolución</td>
                                            <td id="orgResolutionNumber">{{organization.orgResolutionNumber}}</td>
                                        </tr>
                                        <tr>
                                            <td>Fecha de resolución</td>
                                            <td id="orgResolutionDate">{{organization.orgResolutionDate}}</td>
                                        </tr>
                                        <tr>
                                            <td>Nombre de representante legal</td>
                                            <td id="legalRepresentativeName">{{organization.legalRepresentativeName}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Registro en URSAC</span>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>Número de registro</td>
                                            <td id="ursacRegistrationNumber">{{organization.ursacRegistrationNumber}}</td>
                                        </tr>
                                        <tr>
                                            <td>Fecha de resolución</td>
                                            <td id="ursacRegistrationDate">{{organization.ursacRegistrationDate}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Ubicación Geográfica</span>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>Latitud</td>
                                            <td id="latitude">{{organization.latitude}}</td>
                                        </tr>
                                        <tr>
                                            <td>Longitud</td>
                                            <td id="longitude">{{organization.longitude}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span class="card-title">Verificación de la entrevista</span>
                                <table>
                                    <tbody>

                                        <tr>
                                            <td>Nombre de la persona entrevistada</td>
                                            <td id="intervieweeName">{{organization.intervieweeName}}</td>
                                        </tr>
                                        <tr>
                                            <td>Fecha de la entrevista</td>
                                            <td id="interviewDate">{{organization.interviewDate}}</td>
                                        </tr>
                                        <tr>
                                            <td>Hora de la entrevista</td>
                                            <td id="interviewTime">{{organization.interviewTime}}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <span class="card-title">Información adicional/Otras informaciones</span>

                                <table id="projectsTable"> 
                                    <thead>
                                        <tr>
                                            <th data-field="projectNumber">Número de proyecto</th>
                                            <th data-field="name">Nombre del proyecto</th>
                                            <th data-field="duration">Duración (años)</th>
                                            <th data-field="department">Departamento</th>
                                            <th data-field="action">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyProject">
                                       <tr>

                                       </tr>
                                   </tbody>

                               </table>


                               <view-project :organization-id="organization._id"></view-project>
                           </div>   
                       </div>
                   </div>
               </div>
           </div>                           
           <div class="modal-footer">

            <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="clear()">Cerrar</a>
        </div></div></template>


    </template>

    <script>
        var swal = require('sweetalert');
        var config = require('../../config.js');
        var viewProject = require('./viewProject.vue')
        var listProjects = require('./listProjects.vue');

        module.exports = {
            name: 'viewOrganization',
            props: ['organizationId'],
            ready: function(){
                 $(document).ready(function() {
                    Materialize.updateTextFields();
                });
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
                console.log(this.organizationId);


            },
            methods: {
                clear: function(){
                    console.log("clean");
                    $('#orgNumber').val("");
                    $('#orgName').val("");
                    $('#acronym').val("");
                    $('#postal').val("");
                    $('#department').find(":selected").text();
                    $('#municipality').val("");
                    $('#village').val("");
                    $('#community').val("");
                    $('#sector').val("");
                    $('#mission').val("");
                    $('#vision').val("");
                    $('#market').val("");
                    $('#webPage').val("");
                    $('#orgPhone').val("");
                    $('#orgCelPhone').val("");
                    $('#orgSocialNetwork').val("");
                    $('#orgEmail').val("");
                    $('#directorName').val("");
                    $('#directorPhone').val("");
                    $('#directorCelPhone').val("");
                    $('#directorEmail').val("");
                    $('#orgResolutionNumber').val("");
                    $('#orgResolutionDate').val("");
                    $('#legalRepresentativeName').val("");
                    $('#ursacRegistrationNumber').val("");
                    $('#ursacRegistrationDate').val("");
                    $('#latitude').val("");
                    $('#longitude').val("");
                    $('#intervieweeName').val("");
                    $('#interviewDate').val("");
                    $('#interviewTime').val("");
                    $('#otherOrgsInRegion').val("");
                    $('#observations').val("");

                },

                getOrganization: function(){
                    this.clear();
                    this.$http.get(config.baseUrl() + '/v1/organization/'+this.organizationId).then(function(response){
                        this.organization=response.json()[0];
                         $("#orgNumber").text(this.organization.orgNumber);
                        $("#orgNumber").text(this.organization.orgNumber);
                        $("#orgName").text(this.organization.orgName);
                        $("#acronym").text(this.organization.acronym);
                        $("#postal").text(this.organization.postal);
                        $("#department").text(this.organization.department);
                        $("#municipality").text(this.organization.municipality);
                        $("#village").text(this.organization.village);
                        $("#community").text(this.organization.community);
                        $("#mission").text(this.organization.mission);
                        $("#sector").text(this.organization.sector);
                        $("#vision").text(this.organization.vision);
                        $("#market").text(this.organization.market);
                        $("#webPage").text(this.organization.webPage);
                        $("#orgPhone").text(this.organization.orgPhone);
                        $("#orgCelPhone").text(this.organization.orgCelPhone);
                        $("#orgSocialNetwork").text(this.organization.orgSocialNetwork);
                        $("#orgEmail").text(this.organization.orgEmail);
                        $("#directorName").text(this.organization.directorName);
                        $("#directorEmail").text(this.organization.directorEmail);
                        $("#directorPhone").text(this.organization.directorPhone);
                        $("#directorCelPhone").text(this.organization.directorCelPhone);
                        $("#orgResolutionNumber").text(this.organization.orgResolutionNumber);
                        $("#orgResolutionDate").text(this.organization.orgResolutionDate);
                        $("#legalRepresentativeName").text(this.organization.legalRepresentativeName);
                        $("#ursacRegistrationNumber").text(this.organization.ursacRegistrationNumber);
                        $("#ursacRegistrationDate").text(this.organization.ursacRegistrationDate);
                        $("#latitude").text(this.organization.latitude);
                        $("#longitude").text(this.organization.longitude);
                        $("#intervieweeName").text(this.organization.intervieweeName);
                        $("#interviewDate").text(this.organization.interviewDate);
                        $("#interviewTime").text(this.organization.interviewTime);
                        $("#otherOrgsInRegion").text(this.organization.otherOrgsInRegion);
                        $("#observations").text(this.organization.observations);
                        

                        console.log(this.organization._id);
                    },function(error){
                        console.log(error);
                    });
       // console.log(this.organization.orgName);
       $(document).ready(function() {
        Materialize.updateTextFields();
    });

       
       
       this.getProjects();
   },
   getProjects: function(){

    this.$http.get(config.baseUrl() + '/v1/organization/'+this.organization._id+'/projects/').then(function(response){
        this.projects = response.json();
        console.log ("estoy en getProjects"+this.projects);
        $("#projectsTable").find('tbody').find('tr').append('<div>shi<div>');
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
},
components: {
    'view-project': viewProject 


}


}

</script>

<style>

</style>