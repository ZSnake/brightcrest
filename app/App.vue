<template>  
    <div id="navbar">
        <navbar></navbar>
    </div>
        <router-view></router-view>
</template>

<script>
    var nav = require('./src/components/navbar.vue');
    module.exports = {
        components: {
            'navbar': nav
        }
    }
</script>