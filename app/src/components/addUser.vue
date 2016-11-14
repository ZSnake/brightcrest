<template>
    <div id="createUser" class="modal">
        <div class="row">
            <div class="modal-content">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="username" type="text" class="validate" v-model="user.username">
                            <label for="username">Nombre de usuario</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" v-model="user.password">
                            <label for="password">Contraseña</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select id="userScope" v-model="user.scope">
                            </select>
                            <label>Tipo de usuario</label>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="createUser">Guardar</a>
                    <a class="waves-effect waves-light btn-flat modal-action modal-close" v-on:click="clear">Cerrar</a>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    var swal = require('sweetalert');
    var config = require('../../config.js');
    module.exports = {
        name: 'addUser',

        ready: function(){
            
         $('select').material_select();

         this.refreshUser();
         this.getScopes();
     },
     data: function(){
        return {
            user: {},
            currentUser: {}
        }
    },
    methods: {
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
      getScopes: function(){
        this.$http.get(config.baseUrl() + '/v1/scopes').then(function(response){
            this.scopes=response.json();
            var $selectDropdown = 
            $("#userScope")
            .empty()
            .html(' ');
            console.log(this.scopes)
            for (var i = 0; i < this.scopes.length; i++) {
                var value = this.scopes[i].scope;
                $selectDropdown.append(
                  $("<option></option>")
                  .attr("value",value)
                  .text(value)
                  );
            }
            $selectDropdown.trigger('contentChanged');
            $('select').material_select();
        },function(error){
            console.log(error);
        });
    },
    createUser: function(){
        this.user.scope = $('#userScope').find(":selected").val();
        if(!this.user.scope)
            this.user.scope = 'admin';
        this.$http.post(config.baseUrl() + '/v1/createUser', this.user).then(function(response){
            this.createLog("Agrego el usuario: "+this.user.username);
            this.$route.router.go('/users');
            this.clear();
            this.$dispatch('user-added');
        }, function(error){
            swal('Error', 'Error creando usuraio', 'error');
        })
        
        console.log($('#userScope').find(":selected").text());
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