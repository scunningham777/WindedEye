define(function(require, exports, module) {

    var Backbone = require('backbone');

    module.exports = Backbone.View.extend({
        tagName: 'li',
        template: require('tpl!templates/todo-item.ejs'),
        render: function () {
            this.$el.html(this.template(this));
            this.input = this.$('.edit');
            return this;
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close',
            'click .toggle': 'toggleCompleted',
            'click .destroy': 'destroy'
        },
        edit: function () {
            this.$el.addClass('editing');
            this.input.focus();
        },
        close: function () {
            var value = this.input.val().trim();
            if (value) {
                this.model.save({title: value});
            }
            this.$el.removeClass('editing');
        },
        updateOnEnter: function (event) {
            if (event.which == 13) {
                this.close();
            }
        },
        toggleCompleted: function () {
            this.model.toggle();
        },
        destroy: function () {
            this.model.destroy();
        }
    });

});
