<template >
  <div id="container">
    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >
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
              <tr v-for="organization in organizations | orderBy 'orgNumber' order">
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
          this.getOrganizations();
        },
        data: function(){
          return {
            order : 1, //Control de sortBy
            organizations: [],
            list: []
          }
      },
      methods: {
        getOrganizations: function(){
          this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){
            this.organizations = response.json();
            this.list = this.organizations;
          }, function(error){
            swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
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
