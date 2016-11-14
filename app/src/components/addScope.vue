<template>
  <div id="createScope" class="modal">
    <div class="row">
      <div class="modal-content">
        <form class="col s12">
          <h5 class="condensed light">Datos del Rol</h5>
          <div class="row">
            <div class="input-field col s6">
              <input id="scopename" type="text" class="validate" v-model="scope.scope">
              <label for="scopename">Nombre del rol</label>
            </div>
          </div>
          <h5 class="condensed light">Permisos Organizaciones</h5>
          <div class="row">
            <div class="input-field col s4">
              <input type="checkbox" id="addOrganization" v-model="views.addOrganization"/>
              <label for="addOrganization">Agregar organizacion</label>
            </div>
            <div class="input-field col s4">
              <input type="checkbox" id="editOrganization" v-model="views.editOrganization"/>
              <label for="editOrganization">Editar organizacion</label>
            </div>
            <div class="input-field col s4">
              <input type="checkbox" id="deleteOrganization" v-model="views.deleteOrganization"/>
              <label for="deleteOrganization">Eliminar organizacion</label>
            </div>
          </div>
          <h5 class="condensed light">Permisos roles</h5>
          <div class="row">
            <div class="input-field col s6">
              <input type="checkbox" id="crudScope" v-model="views.crudScope"/>
              <label for="crudScope">Crear, Ver, Editar y Eliminar roles</label>
            </div>
          </div>
          <h5 class="condensed light">Permisos usuarios</h5>
          <div class="row">
            <div class="input-field col s6">
              <input type="checkbox" id="crudUser" v-model="views.crudUser"/>
              <label for="crudUser">Crear, Ver, Editar y Eliminar usuarios</label>
            </div>
          </div>
          <h5 class="condensed light">Bitacoras</h5>
          <div class="row">
            <div class="input-field col s12">
              <input type="checkbox" id="viewLogs" v-model="views.viewLogs"/>
              <label for="viewLogs">Ver Bitacora</label>
            </div>
          </div>
        </form> 
      </div>
      <div class="modal-footer">
        <a class="waves-effect waves-light btn-flat modal-action modal-close col s6" v-on:click="addScope">Guardar</a>
        <a class="waves-effect waves-light btn-flat modal-action modal-close col s6" v-on:click="clear">Cerrar</a>
      </div>
    </div>
  </div>
</template>
<script>
  var swal = require('sweetalert');
  var config = require('../../config.js');
  module.exports = {
    name: 'addScope',
    props: ['method'],
    ready: function(){
      this.scope = {
          scope: null,
          views: null
        };
        this.views= {
          "addOrganization" : false,
          "editOrganization" : false,
          "deleteOrganization" : false,
          "crudScope" : false,
          "crudUser" : false,
          "viewLogs" : false
        };
      this.refreshUser();
      $('select').material_select();
    },

    data: function(){
      return {
        scope: {
          scope: null,
          views: null
        },
        views: {
          "addOrganization" : false,
          "editOrganization" : false,
          "deleteOrganization" : false,
          "crudScope" : false,
          "crudUser" : false,
          "viewLogs" : false
        },
        currentUser: {}
      }
    },
    methods: {
      addScope: function () {

        this.scope.views=JSON.stringify(this.views);
        console.log(this.scope);
        this.$http.post(config.baseUrl() + '/v1/createScope', this.scope).then(function(response){
          location.reload();
        }, function(error){
          
          console.log(":(")
          console.log(error.body.message);
        });
      },
      clear: function () {
        this.initdata();

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
        });

      },

    }
  } 
</script>
<style>

</style>