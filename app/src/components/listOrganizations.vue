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
                                <th data-field="action">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="organization in organizations">
                                <td>{{organization.orgNumber}}</td>
                                <td>{{organization.orgName}}</td>
                                <td>{{organization.department}}</td>
                                <td>{{organization.directorName}}</td>
                                <td>
                                    <a class="waves-effect waves-light btn blue darken-4 col m12 modal-trigger" v-on:click="editOrganization(index)"><i class="material-icons">edit</i></a>
                                </td>





                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div id="editModal" class="modal modal-fixed-footer">
            <div class="editOrganization">
                <div class="row">
                    <div class="card blue lighten-5 col m10 s12 offset-m1">
                        <div class="card-content">
                            <div class="row">
                                <form class="col s12">
                                    <span class="card-title">Información General</span>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="orgNumber" type="number" class="validate">
                                            <label for="orgNumber">Número de boleta</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="orgName" type="text" class="validate">
                                            <label class="active" for="orgName">Nombre de la organización</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="acronym" type="text" class="validate">
                                            <label for="acronym">Siglas de la organización</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="postal" type="text" class="validate">
                                            <label for="postal">Dirección postal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <select id="department">
                                                <option>Atlántida</option>
                                                <option>Colón</option>
                                                <option>Comayagua</option>
                                                <option>Copán</option>
                                                <option>Cortes</option>
                                                <option>Choluteca</option>
                                                <option>El Paraíso</option>
                                                <option>Francisco Morazán</option>
                                                <option>Gracias a Dios</option>
                                                <option>Intibucá</option>
                                                <option>Islas de la Bahía</option>
                                                <option>La Paz</option>
                                                <option>Lempira</option>
                                                <option>Ocotepeque</option>
                                                <option>Olancho</option>
                                                <option>Santa Bárbara</option>
                                                <option>Valle</option>
                                                <option>Yoro</option>
                                            </select>
                                            <label>Departamento</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="municipality" type="text" class="validate">
                                            <label for="municipality">Municipalidad</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s4">
                                            <input id="village" type="text" class="validate">
                                            <label for="village">Aldea</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="community" type="text" class="validate">
                                            <label for="community">Comunidad</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="sector" type="text" class="validate">
                                            <label for="sector">Sector</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <textarea id="mission" type="text" class="materialize-textarea"></textarea>

                                            <label for="mission">Misión</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <textarea id="vision" type="text" class="materialize-textarea"></textarea>

                                            <label for="vision">Visión</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="market" type="text" class="validate">
                                            <label for="market">Orientación principal de atención (rubro)</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Contacto de la ONG</span>
                                    <div class="row">
                                        <div class="input-field col s4">
                                            <input id="webPage" type="text" class="validate">
                                            <label for="webPage">Página web</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="orgPhone" type="text" class="validate">
                                            <label for="orgPhone">Número de teléfono fijo</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="orgCelPhone" type="text" class="validate">
                                            <label for="orgCelPhone">Número de celular</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="orgSocialNetwork" type="text" class="validate">
                                            <label for="orgSocialNetwork">Redes Sociales</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="orgEmail" type="email" class="validate">
                                            <label for="orgEmail">Email</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Contacto del director</span>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="directorName" type="text" class="validate">
                                            <label for="directorName">Nombre</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="directorEmail" type="text" class="validate">
                                            <label for="directorEmail">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="directorPhone" type="text" class="validate">
                                            <label for="directorPhone">Teléfono fijo</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="directorCelPhone" type="text" class="validate">
                                            <label for="directorCelPhone">Teléfono celular</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Personería Jurídica</span>
                                    <div class="row">
                                        <div class="input-field col s4">
                                            <input id="orgResolutionNumber" type="text" class="validate">
                                            <label for="orgResolutionNumber">Número de resolución</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="orgResolutionDate" type="date" class="datepicker">
                                            <label for="orgResolutionDate">Fecha de resolución</label>
                                        </div>
                                        <div class="input-field col s4">
                                            <input id="legalRepresentativeName" type="text" class="validate">
                                            <label for="legalRepresentativeName">Nombre de representante legal</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Registro en URSAC</span>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="ursacRegistrationNumber" type="text" class="validate">
                                            <label for="ursacRegistrationNumber">Número de registro</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="ursacRegistrationDate" type="date" class="datepicker">
                                            <label for="ursacRegistrationDate">Fecha de resolución</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Ubicación Geográfica</span>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="latitude" type="text" class="validate">
                                            <label for="latitude">Latitud</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="longitude" type="text" class="validate">
                                            <label for="longitude">Longitud</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Verificación de la entrevista</span>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="intervieweeName" type="text" class="validate">
                                            <label for="intervieweeName">Nombre de la persona entrevistada</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="interviewDate" type="date" class="datepicker">
                                            <label for="interviewDate">Fecha de la entrevista</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="interviewTime" type="text" class="validate">
                                            <label for="interviewTime">Hora de la entrevista</label>
                                        </div>
                                    </div>
                                    <span class="card-title">Información adicional/Otras informaciones</span>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="otherOrgsInRegion" type="text" class="validate">
                                            <label for="otherOrgsInRegion">Conoce otra(s) ONG del sector que trabaja en esta región?</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <textarea id="observations" type="text" class="materialize-textarea"></textarea>
                                            <label for="observations">Observaciones</label>
                                        </div>
                                    </div>                  
                                </form>

                            </div>        
                            <div class="card-content">     
                                <div class="card-action">
                                    <a class="waves-effect waves-light btn blue darken-4" v-on:click="createOrganization">Guardar</a>
                                    <a class="waves-effect waves-light btn red darken-4" v-on:click="clear">Limpiar</a>
                                </div>
                            </div>
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
                    $('.modal-trigger').leanModal();
                    $('select').material_select();
                    this.getOrganizations();

                                 var d = new Date();
             d.setFullYear( d.getFullYear() - 100 );
            $('.datepicker').pickadate(
            {
                selectMonths: true,
                selectYears: 100,
                max: new Date()
            });

              $('.datepicker').click(function(){
                    $('.modal-trigger').leanModal();
                });




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
                    },

                    myFunction: function(x) {

                    },

                    editOrganization: function(index){
                        $('#editModal').openModal();
                        var orgs = this.organizations;
                        $("table tr").click(function(){

                            $("#orgNumber").val(orgs[this.rowIndex-1].orgNumber);
                            $("#orgName").val(orgs[this.rowIndex-1].orgName);
                            $("#acronym").val(orgs[this.rowIndex-1].acronym);
                            $("#postal").val(orgs[this.rowIndex-1].postal);
                            $("#department").val(orgs[this.rowIndex-1].department);
                            $("#municipality").val(orgs[this.rowIndex-1].municipality);
                            $("#village").val(orgs[this.rowIndex-1].village);
                            $("#community").val(orgs[this.rowIndex-1].community);
                            $("#sector").val(orgs[this.rowIndex-1].sector);
                            $("#mission").val(orgs[this.rowIndex-1].mission);
                            $("#vision").val(orgs[this.rowIndex-1].vision);
                            $("#market").val(orgs[this.rowIndex-1].market);
                            $("#webPage").val(orgs[this.rowIndex-1].webPage);
                            $("#orgPhone").val(orgs[this.rowIndex-1].orgPhone);
                            $("#orgCelPhone").val(orgs[this.rowIndex-1].orgCelPhone);
                            $("#orgSocialNetwork").val(orgs[this.rowIndex-1].orgSocialNetwork);
                            $("#orgEmail").val(orgs[this.rowIndex-1].orgEmail);
                            $("#directorName").val(orgs[this.rowIndex-1].directorName);
                            $("#directorPhone").val(orgs[this.rowIndex-1].directorPhone);
                            $("#directorCelPhone").val(orgs[this.rowIndex-1].directorCelPhone);
                            $("#directorEmail").val(orgs[this.rowIndex-1].directorEmail);
                            $("#orgResolutionNumber").val(orgs[this.rowIndex-1].orgResolutionNumber);
                            $("#orgResolutionDate").val(orgs[this.rowIndex-1].orgResolutionDate);
                           // 
                            $("#legalRepresentativeName").val(orgs[this.rowIndex-1].legalRepresentativeName);
                            $("#ursacRegistrationNumber").val(orgs[this.rowIndex-1].ursacRegistrationNumber);
                            $("#ursacRegistrationDate").val(orgs[this.rowIndex-1].ursacRegistrationDate);
                          //  
                            $("#latitude").val(orgs[this.rowIndex-1].latitude);
                            $("#longitude").val(orgs[this.rowIndex-1].longitude);
                            $("#intervieweeName").val(orgs[this.rowIndex-1].intervieweeName);
                            $("#interviewDate").val(orgs[this.rowIndex-1].interviewDate);
                            
                            $("#interviewTime").val(orgs[this.rowIndex-1].interviewTime);
                            $("#otherOrgsInRegion").val(orgs[this.rowIndex-1].otherOrgsInRegion);
                            $("#observations").val(orgs[this.rowIndex-1].observations);
                            Materialize.updateTextFields();


                        });

                    },


                    createOrganization: function(event){
                        var organization = {
                            orgNumber: $('#orgNumber').val(),
                            orgName: $('#orgName').val(),
                            acronym: $('#acronym').val(),
                            postal: $('#postal').val(),
                            department: $('#department').find(":selected").text(),
                            municipality: $('#municipality').val(),
                            village: $('#village').val(),
                            community: $('#community').val(),
                            sector: $('#sector').val(),
                            mission: $('#mission').val(),
                            vision: $('#vision').val(),
                            market: $('#market').val(),
                            webPage: $('#webPage').val(),
                            orgPhone: $('#orgPhone').val(),
                            orgCelPhone: $('#orgCelPhone').val(),
                            orgSocialNetwork: $('#orgSocialNetwork').val(),
                            orgEmail: $('#orgEmail').val(),
                            directorName: $('#directorName').val(),
                            directorPhone: $('#directorPhone').val(),
                            directorCelPhone: $('#directorCelPhone').val(),
                            directorEmail: $('#directorEmail').val(),
                            orgResolutionNumber: $('#orgResolutionNumber').val(),
                            orgResolutionDate: $('#orgResolutionDate').val(),
                            legalRepresentativeName: $('#legalRepresentativeName').val(),
                            ursacRegistrationNumber: $('#ursacRegistrationNumber').val(),
                            latitude: $('#latitude').val(),
                            longitude: $('#longitude').val(),
                            intervieweeName: $('#intervieweeName').val(),
                            interviewDate: $('#interviewDate').val(),
                            interviewTime: $('#interviewTime').val(),
                            otherOrgsInRegion: $('#otherOrgsInRegion').val(),
                            observations: $('#observations').val(),

                        }

                    },
                    clear: function(event){
                        $('#orgNumber').val("");
                        $('#orgName').val("");
                        $('#acronym').val("");
                        $('#postal').val("");
                        $('#department').find(":selected").text();
                        $('#municipality').val("");
                        $('#village').val("");
                        $('#community').val("");
                        $('#sector').val("");
                        $('#mission').val("");
                        $('#vision').val("");
                        $('#market').val("");
                        $('#webPage').val("");
                        $('#orgPhone').val("");
                        $('#orgCelPhone').val("");
                        $('#orgSocialNetwork').val("");
                        $('#orgEmail').val("");
                        $('#directorName').val("");
                        $('#directorPhone').val("");
                        $('#directorCelPhone').val("");
                        $('#directorEmail').val("");
                        $('#orgResolutionNumber').val("");
                        $('#orgResolutionDate').val("");
                        $('#legalRepresentativeName').val("");
                        $('#ursacRegistrationNumber').val("");
                        $('#latitude').val("");
                        $('#longitude').val("");
                        $('#intervieweeName').val("");
                        $('#interviewDate').val("");
                        $('#interviewTime').val("");
                        $('#otherOrgsInRegion').val("");
                        $('#observations').val("");
                      
                    }



                }
            }
        </script>

        <style>
            .modal { width: 80% !important  }  /* increase the width as per you desire */
        </style>