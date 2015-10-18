define(function(require, exports, module) {

    var $ = require('jquery');
    var App = require('./windedEye');

    $(function(){
        window.windedEye = new App();
    });
});
