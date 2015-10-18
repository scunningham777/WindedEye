define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Todo = require('models/todo-item');

    module.exports = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage("backbone-todo")
    });

});
