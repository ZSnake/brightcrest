<template >
  <div id="container">
    <div class="row">
      <div class="card blue lighten-5 col m10 s12 offset-m1">
        <div class="card-content" >
          <div class="input-field col s6">
            <label for="searchInput">Buscar: {{ keyword }}</label>

            
            <input id="searchInput" type="text" v-model="keyword" placeholder="Buscar" >

          </div>

          <div class="input-field col s6">

           <a class="waves-effect waves-light btn blue darken-4" title="Buscar..." v-on:click="search(keyword)" ><i class="large material-icons">search</i></a>


           <a class="waves-effect waves-light btn red darken-4" title="Limpiar Busqueda" v-on:click="cleansearch(message)">Limpiar Busqueda</a>
         </div>



         <table> 
          <thead>
            <tr>

              <th data-field="number">#</th>
              <th data-field="logoUrl">Logo</th>
              <th data-field="orgName">Nombre de ONG</th>
              <th data-field="department">Departamento</th>
              
              <th data-field="action">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="organization in filteredorganizations">
             <td>{{organization[0]}}</td>
             <td><img v-if="organization[1].logoUrl" class="list-logo" v-bind:src="organization[1].logoUrl" alt="" width="110" height="110" ></td>

             <td>{{organization[1].orgName}}</td>
             <td>{{organization[1].department}}</td>
             
             <td>
              <div class="row">
                <a class="waves-effect waves-light btn green darken-4 col s4" title="Ver Organizacion" v-link="{name: 'viewOrganization', params: {organizationId: organization[1]._id}}"><i class="material-icons">pageview</i></a>
                <a class="waves-effect waves-light btn blue darken-4 col s4" title="Editar Organizacion" v-if="currentUser.scope === 'admin'" v-link="{name: 'editOrganization', params: {organizationId: organization[1]._id}}"><i class="material-icons">mode_edit</i></a>
                <a class="waves-effect waves-light btn red darken-4 col s4" title="Eliminar Organizacion" v-if="currentUser.scope === 'admin'" v-on:click="deleteOrganization(organization[1]._id)"><i class="material-icons">delete</i></a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="pagin" class="row col offset-s6 s6">
       <ul class="pagination" id="pagin">



       </ul>
     </div>
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

      $("html, body").animate({ scrollTop: 0 }, "slow");
      this.keyword = "";
      this.getOrganizations();

    },
    data: function(){
      return {
            order : 1, //Control de sortBy
            listNumber: [],
            organizations: [],
            filteredorganizations: [],
            sourceorganizations: [],
            toSearch: [],
            list: [],
            keyword: {},
            allprojects: [],
            paginatedList: [],
          }
        },
        methods: {
          initPagin: function(index){

            this.makepagList(this.sourceorganizations);
            console.log(this.makepagList);
            console.log("works");
            this.renderPagin(index);
          /*
           var element = $("#pagin ul").append('<li class="waves-effect"><a v-on:click="controlPagin(\'s\')"><i class="material-icons">chevron_left</i></a></li>');
           $("#pagin ul").append('<li id="pagin1" class="active blue darken-4"><a v-on:click="controlPagin('+'1'+')">1</a></li>');

           for (var i = 0; i <= this.organizations.length; i=i+15) {
            if (i>this.organizations.length) {
              i=i>this.organizations.length;
            }
            this.paginatedList.push(this.organizations.slice(i,i+15));
            console.log(this.paginatedList[this.paginatedList.length-1]);
          }
          this.filteredorganizations=this.paginatedList[0];
          for (var i = 2; i <= Math.round(this.organizations.length/15); i++) {

            element = $("#pagin ul").append('<li class="waves-effect" "><a v-on:click="controlPagin('+i+')">'+i+'</a></li>');



            console.log(this.$compile(element.get(0)))
            
          }
          $("#pagin ul").append('<li class="waves-effect"><a v-on:click="controlPagin(\'e\')"><i class="material-icons">chevron_right</i></a></li>');
          this.$compile(element.get(0));
          */
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


            console.log(this.$compile(element.get(0)))
            
          }
          $("#pagin ul").append('<li class="waves-effect"><a v-on:click="controlPagin(\'e\')"><i class="material-icons">chevron_right</i></a></li>');
          this.$compile(element.get(0));

        },
        cleansearch: function(){
          this.keyword="";
          
          this.popsource(this.organizations);
          this.initPagin(0);

        },

        search: function() {
          this.keyword=this.keyword.trim();
          this.toSearch=[];
          var orgwhile  = [];
          for (var i = 0; i < this.organizations.length; i++) {
            this.toSearch.push([this.organizations[i]._id, this.organizations[i].orgName, this.organizations[i].orgNumber, this.organizations[i].acronym, this.organizations[i].postal , this.organizations[i].department, this.organizations[i].municipality, this.organizations[i].village, this.organizations[i].community, this.organizations[i].sector, this.organizations[i].market,this.organizations[i], this.organizations[i].orgName.toLowerCase()]);
            for (var k = 0; k < this.organizations[i].orgName.split(" ").length; k++) {
              console.log()
              this.toSearch[this.toSearch.length-1].push(this.organizations[i].orgName.split(" ")[k]);
              this.toSearch[this.toSearch.length-1].push(this.organizations[i].orgName.toLowerCase().split(" ")[k]);
            }
            for (var j = 0; j < this.allprojects.length; j++) {
              if (this.allprojects[j].organizationId==this.organizations[i]._id) {

                this.toSearch[i].push(this.allprojects[j].name);

              }
            }

          }
          for (var i = 0; i < this.toSearch.length; i++) {
            for (var j = 0; j < this.toSearch[i].length; j++) {
              if (this.keyword == this.toSearch[i][j]) {
                orgwhile.push(this.organizations[i]);
              }
            }
          }
          console.log(orgwhile);
          //this.filteredorganizations = orgwhile;

         // this.popsource(orgwhile);
          this.popsource(this.uniq(orgwhile));
          this.initPagin(0);
          if (this.keyword == "") {
            this.filteredorganizations=this.organizations;
          }

          
            /*
            this.listNumber=0;
            console.log("is it working?");
            this.toSearch=[];
            var orgwhile  = [];
            k = 0;
            for (var i = 0; i < this.organizations.length; i++) {
              for (var j = 0; j < this.allprojects.length; j++) {
                if (this.allprojects[j]==this.organizations[i]) {
                  orgwhile.push(this.organizations[i]);
                }
              }
              this.toSearch.push([this.organizations[i]._id, this.organizations[i].orgName.trim(), this.organizations[i].orgName, this.organizations[i].orgNumber, this.organizations[i].acronym, this.organizations[i].postal , this.organizations[i].department, this.organizations[i].municipality, this.organizations[i].village, this.organizations[i].community, this.organizations[i].sector, this.organizations[i].market,this.organizations[i], this.organizations[i].orgName.toLowerCase()])

              
              for (var k = 0; k < this.organizations[i].orgName.split(" ").length; k++) {
                console.log()
               this.toSearch[this.toSearch.length-1].push(this.organizations[i].orgName.split(" ")[k]);
              }
             

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

            for (var i = 0; i < this.filteredorganizations.length; i++) {
              console.log(this.filteredorganizations[i].orgName)
            }
            */

          },

          getOrganizations: function(){
            this.$http.get(config.baseUrl() + '/v1/projects').then(function(responsep){
              this.allprojects = responsep.json();

              this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){

                this.organizations = response.json();
                //this.filteredorganizations = this.organizations;
                this.popsource(this.organizations);
                this.initPagin(0);
              }, function(error){
                swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
              });
            }, function(errorp){
              swal('Error', 'Error obteniendo los projects del servidor', 'errorp');
            });
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
              component.$http.delete(config.baseUrl() + '/v1/organization/' + id).then(function(response){
                component.getOrganizations();
                swal.close();
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
