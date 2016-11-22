<template >
  <div id="container">
    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >

          <div class="row">
           
            <a class="waves-effect waves-light btn green darken-4 col s2 offset-s7" title="Crea Archivo compatible con Excel" v-on:click="makeCSV()">CSV</a>
            <a class="waves-effect waves-light btn red darken-1 right-align col m2 s2 offset-m1" v-link="{path: '/'}">Regresar</a>
          </div>

          <div class="row"></div>
          <table> 
            <thead>
              <tr>
                <b>
                  <div class="row">
                    <div class="col s1">#</div>
                    <div class="col s2">Usuario</div>
                    <div class="col s5">Accion</div>
                    <div class="col s4">Hora</div>
                  </div>
                </b>
              </tr>
            </thead>
            <tbody>
              <tr v-for="organization in filteredorganizations">

                <div class="row">
                  <td>
                    <div class="col s1"><br>{{organization[0]}}</div>
                    <div class="col s2"><br>{{organization[1][0]}}</div>          
                    <div class="col s4"><br>{{organization[1][1]}}</div>
                    <div class="col s5"><br>{{organization[1][2]}}</div>

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
      var vueAutocomplete = require('./vue-autocomplete.vue');


      var list;
      module.exports = {

        name: 'listOrganizations',
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
            paginatedList: [],
            scopes: []
          }
        },
        components: {
          'vue-autocomplete': vueAutocomplete
        },

        methods: {
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
            if (controlPermissions) {
              if (controlPermissions.editOrganization==true) {
                return true;
              } else  {
                return false;
              }}else return false;

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
              if (controlPermissions) {
                if (controlPermissions.deleteOrganization==true) {
                  return true;
                } else  {
                  return false;
                }
              }else return false;

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



            getOrganizations: function(){

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
              this.$http.get(config.baseUrl() + '/v1/logs').then(function(response){

                this.logs = response.json();

                for (var i = 0; i < this.logs.length; i++) {
                  var d1 = new Date(this.logs[i].timestamp); 
                  this.organizations.push([this.logs[i].userId,this.logs[i].action,d1])
                  console.log("fasasd");
                }

                this.popsource(this.organizations);
                this.initPagin(0);
                console.log(this.filteredorganizations)
              }, function(error){
                swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
              });

            },
            makeCSV: function () {
              var word='';
              word = word.concat("Nombre de Organizacion,Nombre de Programa,Nombre de Coordinador/a,Objetivo,Poblacion Atendida\r\n")
              for (var i = 0; i < this.organizations.length; i++) {

                word = word.concat(this.organizations[i][0]+','+this.organizations[i][1]+','+this.organizations[i][2]+','+'\r\n')
              }
              var a = window.document.createElement('a');

              a.href = window.URL.createObjectURL(new Blob([word], {type: 'text/csv'}));
              a.download = 'Bitacora.csv';

              document.body.appendChild(a)
              a.click();

              document.body.removeChild(a)

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
                  this.cleansearch();
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
        .modal { width: 80% !important  }  /* increase the width as per you desire */
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
