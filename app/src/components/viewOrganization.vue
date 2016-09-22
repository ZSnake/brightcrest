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
                                    <div class="input-field col s6">
                                        <p id="orgNumber"><u>{{organization.orgNumber}}</u></p>
                                        
                                        <label class="active" for="orgNumber" ">Número de boleta</label>
                                    </div>
                                    <div class="input-field col s6">

                                        <p id="orgName"><u>{{organization.orgName}}</u></p>
                                        
                                        <label class="active" for="orgName" ">Nombre de la organización</label>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">

                                       <p id="acronym"><u>{{organization.acronym}}</u></p>

                                       <label class="active" for="acronym" ">Siglas de la organización</label>

                                   </div>



                                   <div class="input-field col s6">

                                      <p id="postal"><u>{{organization.postal}}</u></p>

                                      <label class="active" for="postal" ">Dirección postal</label>
                                  </div>
                              </div>
                              <div class="row">
                                <div class="input-field col s6">



                                  <p id="department"><u>{{organization.department}}</u></p>

                                  <label class="active" for="department" ">Departamento</label>


                              </div>
                              <div class="input-field col s6">
                                 <p id="municipality"><u>{{organization.municipality}}</u></p>

                                 <label class="active" for="municipality" ">Municipalidad</label>
                             </div>
                         </div>
                         <div class="row">
                            <div class="input-field col s4">
                               <p id="village"><u>{{organization.village}}</u></p>

                               <label class="active" for="village" ">Aldea</label>


                           </div>
                           <div class="input-field col s4">
                               <p id="community"><u>{{organization.community}}</u></p>

                               <label class="active" for="community" ">Comunidad</label>


                           </div>
                           <div class="input-field col s4">

                              <p id="sector"><u>{{organization.sector}}</u></p>

                              <label class="active" for="sector" ">Sector</label>


                          </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s6">
                         <p id="mission"><u>{{organization.mission}}</u></p>

                         <label class="active" for="mission" ">Misión</label>



                     </div>
                     <div class="input-field col s6">
                         <p id="vision"><u>{{organization.vision}}</u></p>

                         <label class="active" for="vision" ">Visión</label>



                     </div>
                 </div>
                 <div class="row">
                    <div class="input-field col s12">

                        
                         <p id="market"><u>{{organization.market}}</u></p>

                         <label class="active" for="market" ">Orientación principal de atención (rubro)</label>

                     </div>
                 </div>
                 <span class="card-title">Contacto de la ONG</span>
                 <div class="row">
                    <div class="input-field col s4">
                     <p id="webPage"><u>{{organization.webPage}}</u></p>
                     <label class="active" for="webPage" ">Página web</label>
                 </div>
                 <div class="input-field col s4">

                  <p id="orgPhone"><u>{{organization.orgPhone}}</u></p>
                  <label class="active" for="orgPhone" ">Número de teléfono fijo</label>
              </div>
              <div class="input-field col s4">
                <p id="orgCelPhone"><u>{{organization.orgCelPhone}}</u></p>
                <label class="active" for="orgCelPhone" ">Número de celular</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <p id="orgSocialNetwork"><u>{{organization.orgSocialNetwork}}</u></p>

                <label class="active" for="orgSocialNetwork" ">Redes Sociales</label>




            </div>
            <div class="input-field col s6">
                <p id="orgEmail"><u>{{organization.orgEmail}}</u></p>

                <label class="active" for="orgEmail" ">Email</label>


            </div>
        </div>
        <span class="card-title">Contacto del director</span>
        <div class="row">


            <div class="input-field col s6">
             <p id="directorName"><u>{{organization.directorName}}</u></p>

             <label class="active" for="directorName" ">Nombre</label>



         </div>
         <div class="input-field col s6">
            <p id="directorEmail"><u>{{organization.directorEmail}}</u></p>

            <label class="active" for="directorEmail" ">Email</label>


        </div>
    </div>
    <div class="row">
        <div class="input-field col s6">

            <p id="directorPhone"><u>{{organization.directorPhone}}</u></p>

            <label class="active" for="directorPhone" ">Teléfono fijo</label>



        </div>
        <div class="input-field col s6">
         <p id="directorCelPhone"><u>{{organization.directorCelPhone}}</u></p>

         <label class="active" for="directorCelPhone" ">Teléfono celular</label>




     </div>
 </div>
 <span class="card-title">Personería Jurídica</span>
 <div class="row">
    <div class="input-field col s4">
     <p id="orgResolutionNumber"><u>{{organization.orgResolutionNumber}}</u></p>

     <label class="active" for="orgResolutionNumber" ">Número de resolución</label>




 </div>

 <div class="input-field col s4">
     <p id="orgResolutionDate"><u>{{organization.orgResolutionDate}}</u></p>

     <label class="active" for="orgResolutionDate" ">Fecha de resolución</label>




 </div>
 <div class="input-field col s4">
   <p id="orgResolutionDate"><u>{{organization.orgResolutionDate}}</u></p>

   <label class="active" for="legalRepresentativeName" ">Nombre de representante legal</label>

</div>
</div>
<span class="card-title">Registro en URSAC</span>
<div class="row">
    <div class="input-field col s6">

        <p id="ursacRegistrationNumber"><u>{{organization.ursacRegistrationNumber}}</u></p>

        <label class="active" for="ursacRegistrationNumber" ">Número de registro</label>



    </div>
    <div class="input-field col s4">

     <p id="ursacRegistrationDate"><u>{{organization.ursacRegistrationDate}}</u></p>

     <label class="active" for="ursacRegistrationDate" ">Fecha de resolución</label>


 </div>
</div>
<span class="card-title">Ubicación Geográfica</span>
<div class="row">
    <div class="input-field col s6">

     <p id="latitude"><u>{{organization.latitude}}</u></p>

     <label class="active" for="latitude" ">Latitud</label>


 </div>
 <div class="input-field col s6">
  <p id="longitude"><u>{{organization.longitude}}</u></p>

  <label class="active" for="longitude" ">Longitud</label>


</div>
</div>
<span class="card-title">Verificación de la entrevista</span>
<div class="row">
    <div class="input-field col s12">
       <p id="intervieweeName"><u>{{organization.intervieweeName}}</u></p>

       <label class="active" for="intervieweeName" ">Nombre de la persona entrevistada</label>


   </div>
</div>
<div class="row">
    <div class="input-field col s6">
        <p id="interviewDate"><u>{{organization.interviewDate}}</u></p>

        <label class="active" for="interviewDate" ">Fecha de la entrevista</label>



    </div>
    <div class="input-field col s6">
        <p id="interviewTime"><u>{{organization.interviewTime}}</u></p>

        <label class="active" for="interviewTime" ">Hora de la entrevista</label>


    </div>
</div>
<span class="card-title">Información adicional/Otras informaciones</span>
<div class="row">
    <div class="input-field col s12">
        <p id="otherOrgsInRegion"><u>{{organization.otherOrgsInRegion}}</u></p>

        <label class="active" for="otherOrgsInRegion" ">Conoce otra(s) ONG del sector que trabaja en esta región?</label>

    </div>
</div>
<div class="row">
    <div class="input-field col s12">
       <p id="observations"><u>{{organization.observations}}</u></p>

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
</style>