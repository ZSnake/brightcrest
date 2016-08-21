var VueRouter = require('vue-router');
var addOrg = require('./src/components/addOrganization.vue');
var Vue = require('vue'); 
var App = require('./App.vue');

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



Vue.use(VueRouter);

new Vue({
  el: 'body',
  components: {
    app: App
  }
})

var router = new VueRouter();

router.map({
    '/': {
        name: 'addOrganization',
        component: addOrg
    }
})  

router.start(App, '#brightcrest');