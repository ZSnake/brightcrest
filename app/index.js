var VueRouter = require('vue-router');

var addOrg = require('./src/components/addOrganization.vue');
var listOrg = require('./src/components/listOrganizations.vue');
var Vue = require('vue'); 
var App = require('./App.vue');
var VueResource = require('vue-resource');
var editOrg = require('./src/components/editOrganizations.vue');
var editPro = require('./src/components/editProject.vue');
var mapOrg = require('./src/components/mapOrganization.vue');
var viewOrg = require('./src/components/viewOrganization.vue');
var vueAutocomplete = require('./src/components/vue-autocomplete.vue');
var viewPro = require('./src/components/viewProject.vue');
var viewLogs = require('./src/components/viewLogs.vue');
var listScope = require('./src/components/listScope.vue');
var editScope = require('./src/components/editScope.vue');
var login = require('./src/components/loginComponent.vue');
var usersManagement = require('./src/components/userManagement.vue');
var listFil = require('./src/components/listFiltered.vue');

var config = require('./config.js');



$(document).ready(function() {
});

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: 'body',
  components: {
    app: App
  },
  state: {
    currentUser: {
      username: window.sessionStorage.getItem('user'),
      userId: window.sessionStorage.getItem('userId'),
      scope: window.sessionStorage.getItem('scope')
    }
  },
  updateUser: function(username, userId, scope){
    this.state.currentUser.username = username;
    this.state.currentUser.userId =  userId;
    this.state.currentUser.scope = scope;
  }
})


var config = require('./config.js');

var scopes;
var controlPermissions;
var userPermissions;
var router = new VueRouter();

function getscopes() {
  Vue.http.get(config.baseUrl() + '/v1/scopes').then(function (response) {
    scopes= response.json();

    var userScope = window.sessionStorage.getItem('scope');
    
    for (var i = 0; i<scopes.length; i++) {
      if (userScope === scopes[i].scope) {
        controlPermissions = JSON.parse(scopes[i].views);
        //console.log(controlPermissions)
      }
    }

    router.beforeEach(function(transition){
      userScope = window.sessionStorage.getItem('scope');
      //console.log(controlPermissions)
      //console.log(userScope)
      for (var i = 0; i<scopes.length; i++) {
        if (userScope === scopes[i].scope) {
          controlPermissions = JSON.parse(scopes[i].views);
          //console.log(controlPermissions)
        }
      }

      if(transition.to.name === 'listOrganizations' || transition.to.name === 'viewOrganization' || transition.to.name === 'login' || transition.to.name === 'viewProject' || transition.to.name === 'mapOrganization' || transition.to.name === 'listFiltered'  ){
        if( transition.to.name === 'login'){
          if(window.sessionStorage.getItem('userId') === null)
            transition.next();
          else
            router.go('/')
        }else{
          transition.next();
        }
      }else{
        var userPermissions = window.sessionStorage.getItem('scope');
        //console.log(userPermissions)
        if(typeof controlPermissions !== "undefined" && userPermissions && userPermissions != ''){
          if (transition.to.name === 'addOrganization') {
            if(controlPermissions.addOrganization == true)
              transition.next();
            else
              router.go('/');
          }
          if (transition.to.name === 'editOrganization') {
            if(controlPermissions.editOrganization == true)
              transition.next();
            else
              router.go('/');
          }

          if (transition.to.name === 'editProject') {
            if(controlPermissions.editOrganization == true)
              transition.next();
            else
              router.go('/');
          }
          if (transition.to.name === 'usersManagement') {
            if(controlPermissions.crudUser == true)
              transition.next();
            else
              router.go('/');
          }
          if (transition.to.name === 'listScope') {
            if(controlPermissions.crudScope == true)
              transition.next();
            else
              router.go('/');
          }
          if (transition.to.name === 'editScope') {
            if(controlPermissions.crudScope == true)
              transition.next();
            else
              router.go('/');
          }
          if (transition.to.name === 'viewLogs') {
            if(controlPermissions.viewLogs == true)
              transition.next();
            else
              router.go('/');
          }


        } else  router.go('/');
              

      }

    });
  }, function (error) {
    //console.log(error);
  });

}

getscopes();

/*
var router = new VueRouter();
//falta view logs y listScope
router.beforeEach(function(transition){
  if(transition.to.name === 'listOrganizations' || transition.to.name === 'viewOrganization' || transition.to.name === 'login' || transition.to.name === 'viewProject' || transition.to.name === 'mapOrganization' || transition.to.name === 'viewLogs' || transition.to.name === 'listScope' || transition.to.name === 'editScope' ){
    if( transition.to.name === 'login'){
      if(window.sessionStorage.getItem('userId') === null)
        transition.next();
      else
        router.go('/')
    }else{
      transition.next();
    }
  }else{
    var userPermissions = window.sessionStorage.getItem('scope');
    if(userPermissions && userPermissions != ''){
      if(transition.to.name === 'editOrganization' || transition.to.name === 'editProject' || transition.to.name === 'usersManagement'){
        if(userPermissions === 'admin'){
        }
      }

    }

  }
/*
  if(transition.to.name === 'listOrganizations' || transition.to.name === 'viewOrganization' || transition.to.name === 'login' || transition.to.name === 'viewProject' || transition.to.name === 'mapOrganization' || transition.to.name === 'viewLogs' || transition.to.name === 'listScope' || transition.to.name === 'editScope' ){
    if( transition.to.name === 'login'){
      if(window.sessionStorage.getItem('userId') === null)
        transition.next();
      else
        router.go('/')
    }else{
      transition.next();
    }
  }
  else{
    var userPermissions = window.sessionStorage.getItem('scope');
    if(userPermissions && userPermissions != ''){
      if(transition.to.name === 'editOrganization' || transition.to.name === 'editProject' || transition.to.name === 'usersManagement'){
        if(userPermissions === 'admin')
          transition.next();
        else
          router.go('/');
      }else{
        if(transition.to.name === 'addOrganization'){
          if(userPermissions === 'admin' || userPermissions === 'orgUser')
            transition.next();
          else
            router.go('/');
        }
      }
    }else{
      router.go('/');
    }
  }
  
  //*
});
*/
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
  },

  '/organization/view/:organizationId': {
    name: 'viewOrganization',
    component: viewOrg
  },
  '/organization/view/:organizationId/project/view/:projectId' : {
    name: 'viewProject',
    component: viewPro 
  },
  '/login' : {
    name: 'login',
    component: login
  },
  '/users': {
    name: 'usersManagement',
    component: usersManagement
  }, 
  '/viewLogs': {
    name: 'viewLogs',
    component: viewLogs
  }, 
  '/listScope': {
    name: 'listScope',
    component: listScope
  },
  '/listScope/:scopeId': {
    name: 'editScope',
    component: editScope
  },
  '/listFiltered': {
    name: 'listFiltered',
    component: listFil
  }


})  

router.redirect({
  '*': '/'
})

router.start(App, '#brightcrest');