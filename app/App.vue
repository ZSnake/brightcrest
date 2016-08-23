<template>  
    <div id="application">
        <div id="navbar">
            <navbar></navbar>
        </div>
            <router-view></router-view>
    </div>
</template>

<script>
    var nav = require('./src/components/navbar.vue');
    module.exports = {
        components: {
            'navbar': nav
        }
    }
</script>