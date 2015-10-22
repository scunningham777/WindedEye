define(function(require, exports, module) {

    var $ = require('jquery');
    var App = require('./windedEye');
    var Backbone = require('backbone');

    $(function(){
        window.windedEye = new App();
        Backbone.history.start();
    });
});
