<template>
    <nav>
        <div class="nav-wrapper blue darken-4">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <a v-link="{ path : '/view2' } ">View 2</a>
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