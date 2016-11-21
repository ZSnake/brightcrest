<template>
    <div class="addOrganization">
        <div class="row">
            <div class="card blue lighten-5 col m10 s12 offset-m1">
                <div class="card-content">
                    <div class="row">
                        <form class="col s12">
                            <span class="card-title">Información General</span>
                            <div class="row">
                                <div class="file-field input-field col s4">
                                    <div class="btn">
                                        <span>Logo</span>
                                        <input id="createLogo" type="file">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text">
                                    </div>
                                </div>
                                <div class="input-field col s4">
                                    <input id="orgNumber" type="number" class="validate">
                                    <label for="orgNumber">Número de boleta</label>
                                </div>
                                <div class="input-field col s4">
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
                                        <option value="Cortés">Cortés</option>
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
                                    <label for="municipality">Municipio</label>
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
                                    <input id="orgEmail" type="text" class="validate">
                                    <label for="orgEmail">Email</label>
                                </div>
                            </div>
                            <span class="card-title">Contacto del Director/a</span>
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
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        $('select').material_select();
                        var d = new Date();
                        d.setFullYear( d.getFullYear() - 100 );
                        $('.datepicker').pickadate(
                        {

                            selectMonths: true,
                            selectYears: 100,
                            max: new Date(),
                            
                            labelMonthNext: 'Mes siguiente',
                            labelMonthPrev: 'Mes anterior',

                            labelMonthSelect: 'Selecciona un mes',
                            labelYearSelect: 'Selecciona un año',

                            monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
                            monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
                            weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
                            weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],

                            weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],

                            today: 'Hoy',
                            clear: 'Limpiar',
                            close: 'Cerrar',
                            
                        });

                        this.formData = new FormData();
                        this.refreshUser();
                    },
                    name: 'addOrganization',
                    props: ['currentUser'],
                    methods: {
                        refreshUser: function(){
                            this.currentUser = {
                                userId: window.sessionStorage.getItem('userId'),
                                username: window.sessionStorage.getItem('username'),
                                scope: window.sessionStorage.getItem('scope')
                            }
                        },
                        monthtoEnglish: function (date) {
                            console.log("date");
                            var inEnglish="";
                            if (date.search("Enero")>-1) {
                                inEnglish= "".concat(date.substring(0,1)+" January,"+date.substring(date.length-5,date.length));
                                return inEnglish;
                            } else 
                            if (date.search("Febrero")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" February,"+date.substring(date.length-5,date.length)); 
                                  return inEnglish;  
                            } else
                            if (date.search("Marzo")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" March"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Abril")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" April,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Mayo")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" May,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Junio")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" June,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Julio")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" July,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Agosto")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" August,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Septiembre")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" September,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Octubre")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" October,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Noviembre")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" November,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else
                            if (date.search("Diciembre")>-1) {
                                  inEnglish= "".concat(date.substring(0,1)+" December,"+date.substring(date.length-5,date.length));
                                  return inEnglish;
                            } else {
                                return -1;
                            }


                        },
                        createOrganization: function(evt){

                            if ($('#orgName').val()!=="" && $('#acronym').val()!=="" && $('#orgNumber').val()!="") {
                                this.formData.append("orgNumber", $('#orgNumber').val());
                                this.formData.append("orgName", $('#orgName').val());
                                this.formData.append("acronym", $('#acronym').val());
                                this.formData.append("postal", $('#postal').val());
                                this.formData.append("department", $('#department').find(":selected").text()),
                                this.formData.append("municipality", $('#municipality').val());
                                this.formData.append("village", $('#village').val());
                                this.formData.append("community", $('#community').val());
                                this.formData.append("sector", $('#sector').val());
                                this.formData.append("mission", $('#mission').val());
                                this.formData.append("vision", $('#vision').val());
                                this.formData.append("market", $('#market').val());
                                this.formData.append("webPage", $('#webPage').val());
                                this.formData.append("orgPhone", $('#orgPhone').val());
                                this.formData.append("orgCelPhone", $('#orgCelPhone').val());
                                this.formData.append("orgSocialNetwork", $('#orgSocialNetwork').val());
                                this.formData.append("orgEmail", $('#orgEmail').val());
                                this.formData.append("directorName", $('#directorName').val());
                                this.formData.append("directorPhone", $('#directorPhone').val());
                                this.formData.append("directorCelPhone", $('#directorCelPhone').val());
                                this.formData.append("directorEmail", $('#directorEmail').val());
                                this.formData.append("orgResolutionNumber", $('#orgResolutionNumber').val());

                                this.formData.append("orgResolutionDate",  this.monthtoEnglish($('#orgResolutionDate').val()));
                                this.formData.append("legalRepresentativeName", $('#legalRepresentativeName').val());
                                this.formData.append("ursacRegistrationNumber", $('#ursacRegistrationNumber').val());
                                this.formData.append("ursacRegistrationDate", this.monthtoEnglish($('#ursacRegistrationDate').val()));
                                this.formData.append("latitude", $('#latitude').val());
                                this.formData.append("longitude", $('#longitude').val());
                                this.formData.append("intervieweeName", $('#intervieweeName').val());
                                this.formData.append("interviewDate", this.monthtoEnglish($('#interviewDate').val()));
                                this.formData.append("interviewTime", $('#interviewTime').val());
                                this.formData.append("otherOrgsInRegion", $('#otherOrgsInRegion').val());
                                this.formData.append("observations", $('#observations').val());

                               
                                var d1 = new Date();
                                console.log($('#ursacRegistrationDate').val());
                                console.log($('#interviewDate').val());
                                
                                this.formData.append("projects", JSON.stringify(this.$children[0].projects));
                                this.formData.append("logo", $("#createLogo")[0].files[0]);
                                
                                this.$http.post(config.baseUrl() + '/v1/organization', this.formData).then(function(response){
                                    swal('Éxito', 'Organización agregada exitosamente', 'success');
                                    this.createLog("Agregó la organización: "+$('#orgName').val());
                                    this.formData = new FormData();

                                    this.clear();
                                    
                                }, function(error){
                                    swal('Error', 'Error agregando organización', 'error');
                                    console.log(error.body.message);
                                });
                            } else{
                                var errstr= "Error agregando organización, falta:\n";
                                if ($('#orgNumber').val()==="") {
                                    errstr = errstr.concat("Numero de Organizacion\n");

                                }
                                if ($('#orgName').val()==="") {
                                    errstr =  errstr.concat("Nombre de la organización\n");
                                }
                                if ($('#acronym').val()==="") {
                                    errstr =  errstr.concat("Acronimo de la Organizacion\n");

                                }
                                console.log(errstr);
                                swal('Error', errstr, 'error');
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
                    },
                    data: function(){
                        return {
                            formData: {}
                        }
                    }
                };
            </script>