var VueRouter = require('vue-router');
var addOrg = require('./src/components/addOrganization.vue');
var listOrg = require('./src/components/listOrganizations.vue');
var Vue = require('vue'); 
var App = require('./App.vue');
var VueResource = require('vue-resource');

$(document).ready(function() {
    $('select').material_select();

    var d = new Date();
    d.setFullYear( d.getFullYear() - 100 );
    $('.datepicker').pickadate(
    {
        selectMonths: true,
        selectYears: d,
        max: new Date()
    })
});

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: 'body',
  components: {
    app: App
  },
})

var router = new VueRouter();

router.map({
    '/': {
        name: 'listOrganizations',
        component: listOrg
    },
    '/organization/new': {
        name: 'addOrganization',
        component: addOrg
    }
})  

router.start(App, '#brightcrest');