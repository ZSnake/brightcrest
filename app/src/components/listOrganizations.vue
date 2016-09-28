<template >
  <div id="container">
    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >
          <div class="input-field col s6">
            <label for="searchInput">Buscar: {{ keyword }}</label>

            
            <input id="searchInput" type="text" v-model="keyword" placeholder="Buscar">

          </div>
          <div class="input-field col s6">

           <a class="waves-effect waves-light btn blue darken-4"  v-on:click="search(keyword)"><i class="large material-icons">search</i></a>


           <a class="waves-effect waves-light btn red darken-4"  v-on:click="cleansearch(message)">Limpiar Busqueda</a>
         </div>
         <table> 
          <thead>
            <tr>
              <th data-field="logoUrl">Logo</th>
              <th data-field="orgNumber" @click="order = order * -1" v-if="order == 1">Número de boleta ⇩</th><th @click="order = order * -1" v-else>Número de boleta ⇧</th>
              <th data-field="orgName">Nombre de ONG</th>
              <th data-field="department">Departamento</th>
              <th data-field="directorName">Nombre del director</th>
              <th data-field="action">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="organization in filteredorganizations | orderBy 'orgNumber' order">
              <td><img v-if="organization.logoUrl" class="list-logo" v-bind:src="organization.logoUrl" alt=""></td>
              <td>{{organization.orgNumber}}</td>
              <td>{{organization.orgName}}</td>
              <td>{{organization.department}}</td>
              <td>{{organization.directorName}}</td>
              <td>
                <div class="row">
                  <a class="waves-effect waves-light btn green darken-4 col s4" v-link="{name: 'viewOrganization', params: {organizationId: organization._id}}"><i class="material-icons">pageview</i></a>
                  <a class="waves-effect waves-light btn blue darken-4 col s4" v-if="currentUser.scope === 'admin'" v-link="{name: 'editOrganization', params: {organizationId: organization._id}}"><i class="material-icons">mode_edit</i></a>
                  <a class="waves-effect waves-light btn red darken-4 col s4" v-if="currentUser.scope === 'admin'" v-on:click="deleteOrganization(organization._id)"><i class="material-icons">delete</i></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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

    name: 'listOrganizations',
    props: ['currentUser'],
    ready: function(){
            this.keyword = "";
      this.getOrganizations();
    },
    data: function(){
      return {
            order : 1, //Control de sortBy
            organizations: [],
            filteredorganizations: [],
            toSearch: [],
            list: [],
            keyword: {},
            allprojects: []
          }
        },
        methods: {
          cleansearch: function(){
            this.filteredorganizations=this.organizations;
          },
          search: function() {
            this.toSearch=[];
            var orgwhile  = [];
            k = 0;
            for (var i = 0; i < this.organizations.length; i++) {
              for (var j = 0; j < this.allprojects.length; j++) {
                if (this.allprojects[j]==this.organizations[i]) {
                  orgwhile.push(this.organizations[i]);
                }
              }
              this.toSearch.push([this.organizations[i]._id, this.organizations[i].orgName, this.organizations[i].orgNumber, this.organizations[i].acronym, this.organizations[i].postal , this.organizations[i].department, this.organizations[i].municipality, this.organizations[i].village, this.organizations[i].community, this.organizations[i].sector, this.organizations[i].market,this.organizations[i]])
              for (var j = 0; j < this.allprojects.length; j++) {
                if (this.allprojects[j].organizationId==this.organizations[i]._id) {

                  this.toSearch[i].push(this.allprojects[j].name);
                  
                }
              }
              for (var j = 0; j < this.toSearch[i].length; j++) {
                if (this.keyword == this.toSearch[i][j]) {
                  orgwhile.push(this.organizations[i]);
                }
              }
            }
            this.filteredorganizations = orgwhile;
            if (this.keyword == "") {
              this.filteredorganizations=this.organizations;
            }
          },
          getOrganizations: function(){
            this.$http.get(config.baseUrl() + '/v1/projects').then(function(responsep){
              this.allprojects = responsep.json();
              console.log(this.allprojects);
              this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){
                console.log(response.json());
                this.organizations = response.json();
                this.list = this.organizations;
                this.filteredorganizations = this.organizations;
                console.log(this.filteredorganizations[0][0])
              }, function(error){
                swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
              });
            }, function(errorp){
              swal('Error', 'Error obteniendo los projects del servidor', 'errorp');
            });
          },


          deleteOrganization(id){
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
              component.$http.delete(config.baseUrl() + '/v1/organization/' + id).then(function(response){
                component.getOrganizations();
                swal.close();
              },function(error){
                console.log(error);
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
