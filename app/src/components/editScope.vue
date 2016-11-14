<template>
    <div id="editScope" >
        <div class="row">
            <div class="card blue lighten-5 col m10 s12 offset-m1">
                <div class="card-content">
                    <form class="col s12">
                        <h5 class="condensed light">Datos del Rol</h5>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="scopename" type="text" class="validate" v-model="scope.scope">
                                <label class="active" for="scopename">Nombre del rol</label>
                            </div>
                        </div>
                        <h5 class="condensed light">Permisos Organizaciones</h5>
                        <div class="row">
                            <div class="input-field col s4">
                                <input type="checkbox" id="addOrganization" v-model="scope.views.addOrganization">
                                <label for="addOrganization">Agregar organizacion</label>
                            </div>
                            <div class="input-field col s4">
                                <input type="checkbox" id="editOrganization" v-model="scope.views.editOrganization">
                                <label for="editOrganization">Editar organizacion</label>
                            </div>
                            <div class="input-field col s4">
                                <input type="checkbox" id="deleteOrganization" v-model="scope.views.deleteOrganization">
                                <label for="deleteOrganization">Eliminar organizacion</label>
                            </div>
                        </div>
                        <h5 class="condensed light">Permisos roles</h5>
                        <div class="row">
                            <div class="input-field col s6">
                                <input type="checkbox" id="crudScope" v-model="scope.views.crudScope"/>
                                <label for="crudScope">Crear, Ver, Editar y Eliminar roles</label>
                            </div>
                        </div>
                        <h5 class="condensed light">Permisos usuarios</h5>
                        <div class="row">
                            <div class="input-field col s6">
                                <input type="checkbox" id="crudUser" v-model="scope.views.crudUser"/>
                                <label for="crudUser">Crear, Ver, Editar y Eliminar usuarios</label>
                            </div>
                        </div>
                        <h5 class="condensed light">Bitacoras</h5>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="checkbox" id="viewLogs" v-model="scope.views.viewLogs"/>
                                <label for="viewLogs">Ver Bitacora</label>
                            </div>
                        </div>
                    </form> 
                    <a class="waves-effect waves-light btn blue darken-4 right-align" v-on:click="editScope">Actualizar</a>
                    <a class="waves-effect waves-light btn red darken-4 right-align" v-link="{name: 'listScope'}">Regresar</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var swal = require('sweetalert');
    var config = require('../../config.js');
    module.exports = {
        name: 'editScope',
        props: ['scopeToEdit'],
        ready: function(){
            this.getScope(); 
            this.refreshUser();
            var views = {
              "addOrganization" : false,
              "editOrganization" : false,
              "deleteOrganization" : false,
              "crudScope" : false,
              "crudUser" : false,
              "viewLogs" : false
          };
          this.scope =  {
              scope: null,
              views: views
          };

      },
      data: function(){
        return {
            scope: {
                scope: null,
                views: {
                  "addOrganization" : false,
                  "editOrganization" : false,
                  "deleteOrganization" : false,
                  "crudScope" : false,
                  "crudUser" : false,
                  "viewLogs" : false
              }
          }
      }
  },
  methods: {
    getScope: function () {
        console.log(this.$route.params.scopeId);
        this.$http.get(config.baseUrl() + '/v1/scope/'+this.$route.params.scopeId).then(function(response){

            this.scope=response.json()[0];
            this.scope.views = JSON.parse(this.scope.views)
            console.log("yay");
            console.log(this.scope);
        },function(error){
            console.log(error);
        });
    },
    refreshUser: function(){
        this.currentUser = {
            userId: window.sessionStorage.getItem('userId'),
            username: window.sessionStorage.getItem('username'),
            scope: window.sessionStorage.getItem('scope')
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
        })

    },
    editScope: function(){
        console.log("edit");
        console.log(this.scope);
        this.scope.views=JSON.stringify(this.scope.views);
        this.$http.put(config.baseUrl() + '/v1/scope/'+this.$route.params.scopeId, this.scope).then(function(response){
            this.$route.router.go('/listScope');
        }, function(error){
            swal('Error', 'Error modificando projecto', 'error');
        });
    },

    clear: function(){
        this.user = {};
    }
}
} 
</script>
<style>
    .modal{
        width: 30% !important;
    }
</style>