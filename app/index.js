var VueRouter = require('vue-router');
var addOrg = require('./src/components/addOrganization.vue');
var listOrg = require('./src/components/listOrganizations.vue');
var Vue = require('vue'); 
var App = require('./App.vue');
var VueResource = require('vue-resource');
var editOrg = require('./src/components/editOrganizations.vue');
var editPro = require('./src/components/editProject.vue')
var mapOrg = require('./src/components/mapOrganization.vue')


$(document).ready(function() {
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
    },
    '/organization/edit/:organizationId': {
      name: 'editOrganization',
      component: editOrg 
    },

    '/organization/edit/:organizationId/project/edit/:projectId' : {
      name: 'editProject',
      component: editPro 
    },
    '/organization/map': {
        name: 'mapOrganization',
        component: mapOrg
    }


    

})  

router.start(App, '#brightcrest');