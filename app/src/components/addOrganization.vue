<template>
    <div class="addOrganization">
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
                                    <label for="orgName">Nombre de la organización</label>
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
                                        <option value="Atlántida">Atlántida</option>
                                        <option value="Colón">Colón</option>
                                        <option value="Comayagua">Comayagua</option>
                                        <option value="Copán">Copán</option>
                                        <option value="Cortes">Cortes</option>
                                        <option value="Choluteca">Choluteca</option>
                                        <option value="Paraíso">El Paraíso</option>
                                        <option value="Francisco Morazán">Francisco Morazán</option>
                                        <option value="Gracias a Dios">Gracias a Dios</option>
                                        <option value="Intibucá">Intibucá</option>
                                        <option value="Islas de la Bahía">Islas de la Bahía</option>
                                        <option value="La Paz">La Paz</option>
                                        <option value="Lempira">Lempira</option>
                                        <option value="Ocotepeque">Ocotepeque</option>
                                        <option value="Olancho">Olancho</option>
                                        <option value="Santa Bárbara">Santa Bárbara</option>
                                        <option value="Valle">Valle</option>
                                        <option value="Yoro">Yoro</option>
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
                        <list-project></list-project>
                    </div>        
                    <div class="card-content">     
                        <div class="card-action">
                            <a class="waves-effect waves-light btn blue darken-4" v-on:click="createOrganization">Guardar</a>
                            <a class="waves-effect waves-light btn red darken-4" v-on:click="clear">Limpiar</a>
                        </div>
                    </div>
                </div>
           
        </template>

        <script>
            var swal = require('sweetalert');
            var config = require('../../config.js');
            var listProjects = require('./listProjects.vue');
            module.exports = {
                ready: function(){
                    $('select').material_select();
                    var d = new Date();
                    d.setFullYear( d.getFullYear() - 100 );
                    $('.datepicker').pickadate(
                    {
                        selectMonths: true,
                        selectYears: 100,
                        max: new Date()
                    });
                    
                },
                name: 'addOrganization',
                methods: {
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
                            ursacRegistrationDate: $('#ursacRegistrationDate').val(),
                            latitude: $('#latitude').val(),
                            longitude: $('#longitude').val(),
                            intervieweeName: $('#intervieweeName').val(),
                            interviewDate: $('#interviewDate').val(),
                            interviewTime: $('#interviewTime').val(),
                            otherOrgsInRegion: $('#otherOrgsInRegion').val(),
                            observations: $('#observations').val(),
                            projects: this.$children[0].projects
                        }
                        
                        this.$http.post(config.baseUrl() + '/v1/organization', organization).then(function(response){
                            swal('Éxito', 'Organización agregada exitosamente', 'success');
                            this.clear();

                            console.log(response.body);
                            
                        }, function(error){
                            swal('Error', 'Error agregando organización', 'error');
                            console.log(error.body.message);
                        })
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
                        $('#ursacRegistrationDate').val("");
                        $('#latitude').val("");
                        $('#longitude').val("");
                        $('#intervieweeName').val("");
                        $('#interviewDate').val("");
                        $('#interviewTime').val("");
                        $('#otherOrgsInRegion').val("");
                        $('#observations').val("");
                        this.$children[0].clear();
                    }
                },
                components: {
                    'list-project': listProjects
                }
            };
        </script>