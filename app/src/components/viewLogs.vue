<template >
  <div id="container">

    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >
         <div class="row"></div>
         <table> 
          <thead>
            <tr>
              <b>
                <div class="row">
                  <div class="col s2">Usuario</div>
                  <div class="col s5">Accion</div>
                  <div class="col s5">Hora</div>
                </div>
              </b>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in logs">

              <div class="row">
                <td><h5>
                  <div class="col s2">{{log.userId}}</div>
                  <div class="col s5">{{log.action}}</div>
                  <div class="col s5">{{log.timestamp}}</div></h5>
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

      name: 'viewLogs',
      props: ['currentUser'],
      ready: function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.getLogs();
      },

      data: function(){
        return {
          logs: []
        }
      },
      methods: {
        getLogs: function() {
          this.$http.get(config.baseUrl() + '/v1/logs').then(function(response){
            console.log();
            this.logs = response.json();
            logs = response.json();

          }, function(errorp){
            swal('Error', 'Error obteniendo los projects del servidor', 'errorp');
          });
        }
      }
    };

  </script>

