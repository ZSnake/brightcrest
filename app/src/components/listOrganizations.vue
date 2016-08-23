<template>
    <div class="row">
        <div class="row">
            <div class="card blue lighten-5 col m10 s12 offset-m1">
                <div class="card-content">
                    <table> 
                        <thead>
                            <tr>
                                <th data-field="orgNumber">Número de boleta</th>
                                <th data-field="orgName">Nombre de ONG</th>
                                <th data-field="department">Departamento</th>
                                <th data-field="directorName">Nombre del director</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="organization in organizations">
                                <td>{{organization.orgNumber}}</td>
                                <td>{{organization.orgName}}</td>
                                <td>{{organization.department}}</td>
                                <td>{{organization.directorName}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                organizations: []
            }
        },
        methods: {
            getOrganizations: function(){
                this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){
                    this.organizations = response.json();
                }, function(error){
                    swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
                });
            }
        }
    }
</script>

