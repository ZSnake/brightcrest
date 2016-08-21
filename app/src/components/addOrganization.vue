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
                                    <label for="postal">Código postal</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <select>
                                        <option value="1">Atlántida</option>
                                        <option value="2">Colón</option>
                                        <option value="3">Comayagua</option>
                                        <option value="1">Copán</option>
                                        <option value="2">Cortes</option>
                                        <option value="3">Choluteca</option>
                                        <option value="1">El Paraíso</option>
                                        <option value="2">Francisco Morazán</option>
                                        <option value="3">Gracias a Dios</option>
                                        <option value="1">Intibucá</option>
                                        <option value="2">Islas de la Bahía</option>
                                        <option value="3">La Paz</option>
                                        <option value="1">Lempira</option>
                                        <option value="2">Ocotepeque</option>
                                        <option value="3">Olancho</option>
                                        <option value="1">Santa Bárbara</option>
                                        <option value="2">Valle</option>
                                        <option value="3">Yoro</option>
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
                                    <input id="mission" type="text" class="validate">
                                    <label for="mission">Misión</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="vision" type="text" class="validate">
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
                    <a class="waves-effect waves-light btn red darken-4">Limpiar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'addOrganization',
        methods: {
            createOrganization: function(event){
                event.preventDefault();
                alert("0");
            }
        }
    };
</script>