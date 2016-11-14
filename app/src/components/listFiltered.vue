<template >
  <div id="container">
    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >


          <a class="waves-effect waves-light btn green darken-4 col s4" title="Ver Organizacion" v-on:click="makeCSV()"><i class="material-icons">pageview</i></a>

        </div>
        <form>

          <div class="input-field col s12">

            <a class="waves-effect waves-light btn blue darken-4" title="Buscar..." v-on:click="search(keyword)" ><i class="large material-icons">search</i></a>


            <a class="waves-effect waves-light btn red darken-4" title="Limpiar Busqueda" v-on:click="cleansearch(message)">Limpiar Busqueda</a>
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
        </form>




        <div class="row">
          <table> 
            <thead>
              <tr>
                <b>
                  <div class="row">
                    <div class="col s1">#</div>
                    <div class="col s2">Logo</div>
                    <div class="col s5">Nombre de ONG</div>
                    <div class="col s2">Departamento</div>
                    <div class="col s2">Acción</div>
                  </div>
                </b>

              </tr>
            </thead>
            <tbody>
              <tr v-for="organization in filteredorganizations">

                <div class="row">
                  <td><div class="col s1"><br>{{organization[0]}}</div>
                    <div class="col s2"><img v-if="organization[1].logoUrl" v-link="{name: 'viewOrganization', params: {organizationId: organization[1]._id}}" class="list-logo" v-bind:src="organization[1].logoUrl" alt="" width="110" height="110" ></div>
                    <div class="col s5"><br>{{organization[1].orgName}}</div>
                    <div class="col s2"><br>{{organization[1].department}}</div>
                    <div class="col s2"><br><a class="waves-effect waves-light btn green darken-4 col s4" title="Ver Organizacion" v-link="{name: 'viewOrganization', params: {organizationId: organization[1]._id}}"><i class="material-icons">pageview</i></a>
                      <a class="waves-effect waves-light btn blue darken-4 col s4" title="Editar Organizacion" v-if="checkPermissionEdit()" v-link="{name: 'editOrganization', params: {organizationId: organization[1]._id}}"><i class="material-icons">mode_edit</i></a>
                      <a class="waves-effect waves-light btn red darken-4 col s4" title="Eliminar Organizacion" v-if="checkPermissionDelete()" v-on:click="deleteOrganization(organization[1])"><i class="material-icons">delete</i></a></div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div id="pagin" class="row col offset-s6 s6">
              <ul class="pagination" id="pagin">



              </ul>
            </div>
          </div>




        </div>


      </template>

      <script>
        var swal = require('sweetalert');
        var config = require('../../config.js');
        var Vue = require('vue');

        var list;
        module.exports = {

          name: 'listFiltered',
          props: ['currentUser'],
          ready: function(){
            this.getScopes();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            this.keyword = "";
            this.getOrganizations();



          },

          data: function(){
            return {
              order : 1, 
              listNumber: [],
              organizations: [],
              filteredorganizations: [],
              sourceorganizations: [],
              toSearch: [],
              list: [],
              keyword: {},
              allprojects: [],
              project: {},
              paginatedList: [],
              scopes: []
            }
          },
          methods: {
            makeCSV: function () {
              var word='';
              for (var i = 0; i < this.sourceorganizations.length; i++) {
                console.log(this.sourceorganizations[i][1].orgName);
                word = word.concat(this.sourceorganizations[i][1].orgName+','+this.sourceorganizations[i][1].orgEmail+'\r\n')
              }
              var a = window.document.createElement('a');
              a.href = window.URL.createObjectURL(new Blob([word], {type: 'text/csv'}));
              a.download = 'test.csv';

              document.body.appendChild(a)
              a.click();

              document.body.removeChild(a)

            },

            getScopes: function(){
              this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
                this.scopes=response.json();

              },function(error){
                console.log(error);
              });
            },
            checkPermissionEdit: function() {
              var userScope = window.sessionStorage.getItem('scope');
              var controlPermissions=null;

              for (var i = 0; i<this.scopes.length; i++) {
                if (userScope === this.scopes[i].scope) {
                  controlPermissions = JSON.parse(this.scopes[i].views);
                  break;
                }
              }
              if (controlPermissions.editOrganization==true) {
                return true;
              } else  {
                return false;
              }
            },
            checkPermissionDelete: function() {
              var userScope = window.sessionStorage.getItem('scope');
              var controlPermissions=null;

              for (var i = 0; i<this.scopes.length; i++) {
                if (userScope === this.scopes[i].scope) {
                  controlPermissions = JSON.parse(this.scopes[i].views);
                  break;
                }
              }
              if (controlPermissions.deleteOrganization==true) {
                return true;
              } else  {
                return false;
              }
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
              });
            },
            initPagin: function(index){
              this.makepagList(this.sourceorganizations);
              this.renderPagin(index);
            },
            controlPagin: function(index){
              if (!isNaN(index)) {
                $("#pagin ul").empty();
                this.renderPagin(index-1);
              }
            },
            makepagList: function(array){
              this.paginatedList=[];
              for (var i = 0; i <= array.length; i=i+15) {
                if (i>array.length) {
                  i=i>array.length;
                }
                this.paginatedList.push(array.slice(i,i+15));

              }
            },
            uniq: function(a) {
              var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

              return a.filter(function(item) {
                var type = typeof item;
                if(type in prims)
                  return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
                else
                  return objs.indexOf(item) >= 0 ? false : objs.push(item);
              });
            },
            renderPagin: function(index){
              $("#pagin ul").empty();
              var element = $("#pagin ul").append('<li class="waves-effect"><a v-on:click="controlPagin(\'s\')"><i class="material-icons">chevron_left</i></a></li>');
              this.filteredorganizations=this.paginatedList[index];
              for (var i = 1; i <= this.paginatedList.length; i++) {
                if (index==i-1) {
                  $("#pagin ul").append('<li id="pagin1" class="active blue darken-4"><a v-on:click="controlPagin('+'i'+')">'+i+'</a></li>');
                } else{
                  element = $("#pagin ul").append('<li class="waves-effect" "><a v-on:click="controlPagin('+i+')">'+i+'</a></li>');
                }
              }
              $("#pagin ul").append('<li class="waves-effect"><a v-on:click="controlPagin(\'e\')"><i class="material-icons">chevron_right</i></a></li>');
              this.$compile(element.get(0));
            },
            cleansearch: function(){
              this.keyword="";
              this.popsource(this.organizations);
              this.initPagin(0);
            },
            search: function() {
              var orgwhile  = [];
              this.toSearch=[];
              for (var i = 0; i < this.organizations.length; i++) {
                this.toSearch.push([this.organizations[i]._id, this.organizations[i].orgName]);
                for (var j = 0; j < this.allprojects.length; j++) {
                  if (this.allprojects[j].organizationId==this.organizations[i]._id) {
                    this.toSearch[i].push(this.allprojects[j]);
                  }
                }

              }
              console.log(this.toSearch);
              for (var i = 0; i < this.toSearch.length; i++) {
                for (var j = 2; j < this.toSearch[i].length; j++) {
                  console.log(this.toSearch[i][j].abandonment)
                  console.log(this.project.abandonment)
                  if (this.toSearch[i][j].abandonment==this.project.abandonment && this.project.abandonment==true) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].sexualFreedomVictims==this.project.sexualFreedomVictims && this.project.sexualFreedomVictims) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].legalRepresentativeAbsence==this.project.legalRepresentativeAbsence && this.project.legalRepresentativeAbsence) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].sexualHarassmentVictims==this.project.sexualHarassmentVictims && this.project.sexualHarassmentVictims) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].abuseByOmission==this.project.abuseByOmission && this.project.abuseByOmission) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].procuring==this.project.procuring && this.project.procuring) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].abuseBySupression==this.project.abuseBySupression && this.project.abuseBySupression) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].trafficking==this.project.trafficking && this.project.trafficking) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].abuseByTransgression==this.project.abuseByTransgression && this.project.abuseByTransgression) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].publicSexualExposure==this.project.publicSexualExposure && this.project.publicSexualExposure) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].lackOfBasicNeeds==this.project.lackOfBasicNeeds && this.project.lackOfBasicNeeds) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].pornography==this.project.pornography && this.project.pornography) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].threatToHeritage==this.project.threatToHeritage && this.project.threatToHeritage)  {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].sexualTurism==this.project.sexualTurism && this.project.sexualTurism) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].addiction==this.project.addiction && this.project.addiction) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].criminalRecruitmentRisk==this.project.criminalRecruitmentRisk && this.project.criminalRecruitmentRisk) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].begging==this.project.begging && this.project.begging) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].economicExploitation==this.project.economicExploitation && this.project.economicExploitation) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].childAbduction==this.project.childAbduction && this.project.childAbduction) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].childrenDinning==this.project.childrenDinning && this.project.childrenDinning) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].initialEducationAndEarlyEstimulationCenter==this.project.initialEducationAndEarlyEstimulationCenter && this.project.initialEducationAndEarlyEstimulationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].preBasicEducationCenter==this.project.preBasicEducationCenter && this.project.preBasicEducationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].artisticFormationCenter==this.project.artisticFormationCenter && this.project.artisticFormationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].sportEducationCenter==this.project.sportEducationCenter && this.project.sportEducationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].vocationalEducationCenter==this.project.vocationalEducationCenter && this.project.vocationalEducationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].alternativeEducationCenter==this.project.alternativeEducationCenter && this.project.alternativeEducationCenter) {
                    orgwhile.push(this.organizations[i]);
                  }
                  if (this.toSearch[i][j].others==this.project.others && this.project.others) {
                    orgwhile.push(this.organizations[i]);
                  }
                }
              }
              this.popsource(this.uniq(orgwhile));
              this.initPagin(0);

            },
            sortName: function () {
              this.organizations.sort(function(a, b){ 
                var nameA=a.orgName.toLowerCase(), nameB=b.orgName.toLowerCase()
                if (nameA < nameB) 
                  return -1 
                if (nameA > nameB)
                  return 1
                return 0 
              });
            },
            getOrganizations: function(){
              this.$http.get(config.baseUrl() + '/v1/projects').then(function(responsep){
                this.allprojects = responsep.json();

                this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){

                  this.organizations = response.json();

                  this.sortName();
                  this.popsource(this.organizations);
                  this.initPagin(0);
                }, function(error){
                  swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
                });
              }, function(errorp){
                swal('Error', 'Error obteniendo los projects del servidor', 'errorp');
              });
            },
            popsource: function(array) {
              this.sourceorganizations=[];
              for (var i = 1; i <= array.length; i++) {
                this.sourceorganizations.push([i,array[i-1]]);

              }
            },
            deleteOrganization: function(id){
              var component = this;
              swal({   
                title: "¿Está seguro?",   
                text: "¡Si eliminas esta organización, no se podrá recuperar!",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "No, cancelar",   
                closeOnConfirm: true 
              }, function(){
                component.$http.delete(config.baseUrl() + '/v1/organization/' + id._id).then(function(response){
                  component.getOrganizations();
                  swal.close();
                  this.createLog("Eliminó la organización: "+id.orgName);
                },function(error){

                });

              });
            }
          }
        };

      </script>

      <style>
        .modal { width: 80% !important  }  
        #test .item{
          margin: 3px;
        }
        #test .item img{
          display: block;
          width: 100%;
          height: auto;
        }
        #container {
          overflow: scroll;
          height: 100%;
        }
        .list-logo {
          height: 80px;
        }
      </style>
