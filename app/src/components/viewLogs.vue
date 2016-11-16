<template >
  <div id="container">

    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >
                    <a class="waves-effect waves-light btn green darken-4 col s2 offset-s10" title="Crea Archivo compatible con Excel" v-on:click="makeCSV()">CSV</a>
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
            <tr v-for="log in logsShow">

              <div class="row">
                <td><h5>
                  <div class="col s2">{{log[0]}}</div>
                  <div class="col s5">{{log[1]}}</div>
                  <div class="col s5">{{log[2]}}</div>
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
          logs: [],
          logsShow:[]
        }
      },
      methods: {
        makeCSV: function () {
          var word='';
          word = word.concat("Nombre de Organizacion,Nombre de Programa,Nombre de Coordinador/a,Objetivo,Poblacion Atendida\r\n")
          for (var i = 0; i < this.logsShow.length; i++) {

            word = word.concat(this.logsShow[i][0]+','+this.logsShow[i][1]+','+this.logsShow[i][2]+','+'\r\n')
          }
              //console.log(word)
              var a = window.document.createElement('a');
              
              a.href = window.URL.createObjectURL(new Blob([word], {type: 'text/csv'}));
              a.download = 'Bitacora.csv';

              document.body.appendChild(a)
              a.click();

              document.body.removeChild(a)

            },

            getLogs: function() {
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
                console.log();
                this.logs = response.json();
                for (var i = 0; i < this.logs.length; i++) {
              var d1 = new Date(this.logs[i].timestamp); // Valid Date
              this.logsShow.push([this.logs[i].userId,this.logs[i].action,d1])
              //this.logsShow.push([this.logs[i].userId,this.logs[i].action,d1.getUTCDate()+" "+month[d1.getUTCMonth()]+", "+d1.getUTCFullYear()+" "+d1.getUTCHours()+":"+d1.getUTCMinutes()+":"+d1.getUTCSeconds()])
              console.log("fasasd");
            }


          }, function(errorp){
            swal('Error', 'Error obteniendo los projects del servidor', 'errorp');
          });
            }
          }
        };

      </script>

