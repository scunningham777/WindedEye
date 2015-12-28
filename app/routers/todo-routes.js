define(function(require, exports, module) {
    var Backbone = require('backbone');

    module.exports = Backbone.Router.extend({
        initialize: function routerInit(options) {
            if (!options.app) {
               throw new Error('You must provide an app instance');
            }
            this.app = options.app;
        },
        routes: {
            ':filter' : 'setFilter'
        },
        setFilter: function(params) {
            console.log('router.params = ' + params);
            if (params == null) {
                return;
            }
            var filter = params.trim() || '';
            this.app.showView('todoList', {
                params: {
                    filter: filter
                }
            });
        }
    })
});
