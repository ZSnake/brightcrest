var VueRouter = require('vue-router');
var view1Component = require('./src/components/view1Component.js');
var view2Component = require('./src/components/view2Component.js');

var router = new VueRouter();

var App = Vue.extend({});
router.map({
    '/view1': {
        component: view1Component
    },
    '/view2': {
        component: view2Component
    }
})  

router.start(App, '#content');