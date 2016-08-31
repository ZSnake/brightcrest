<template>
    <nav>
        <div class="nav-wrapper blue darken-4">
            <a href="#" class="brand-logo">Regioplan</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a v-link="'/'">Ver organizaciones</a>
                </li>
                <li>
                    <a v-link="{path: '/organization/new'}">Agregar organización</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    var Vue = require('vue'); 

    module.exports.navbar = Vue.extend({
        name: 'navbar'
    });
</script>