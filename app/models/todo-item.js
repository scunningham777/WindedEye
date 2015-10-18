define(function(require, exports, module) {

    var Backbone = require('backbone');

    module.exports = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },
        toggle: function () {
            this.save({completed: !this.get('completed')});
        }
    });

});
