<template>
    <div class="row">
        <div class="row">
            <div class="card blue lighten-5 col m10 s12 offset-m1">
                <div class="card-content">
                    <table> 
                        <thead>
                            <tr>
                                <th data-field="orgNumber" @click="order = order * -1" v-if="order == 1">Número de boleta ⇩</th><th @click="order = order * -1" v-else>Número de boleta ⇧</th>
                                <th data-field="orgName">Nombre de ONG</th>
                                <th data-field="department">Departamento</th>
                                <th data-field="directorName">Nombre del director</th>
                                <th data-field="action">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="organization in organizations | orderBy 'orgNumber' order">
                                <td>{{organization.orgNumber}}</td>
                                <td>{{organization.orgName}}</td>
                                <td>{{organization.department}}</td>
                                <td>{{organization.directorName}}</td>
                                <td>
                                    <a class="waves-effect waves-light btn green darken-4" v-link="{name: 'editOrganization', params: {organizationId: organization._id}}">Editar</a>
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

        module.exports = {
            name: 'listOrganizations',
            ready: function(){
                this.getOrganizations();
            },
            data: function(){
                return {
                    order: 1,
                    organizations: [],
                    center: {lat: 10.0, lng: 10.0},
                    markers: [{
                      position: {lat: 10.0, lng: 10.0}
                  }, {
                      position: {lat: 11.0, lng: 11.0}
                  }]
              }
          },
          methods: {
            getOrganizations: function(){
                this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){
                    this.organizations = response.json();
                }, function(error){
                    swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
                });
            },
        }
    }
</script>

<style>
    .modal { width: 80% !important  }  /* increase the width as per you desire */
</style>