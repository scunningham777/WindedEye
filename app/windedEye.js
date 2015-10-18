define(function(require, exports, module) {

    var $ = require('jquery');
    var Backbone = require('backbone');
    var LocalStorage = require('localStorage');

    var TodoList = require('collections/todos');
    var TodoView = require('views/todo-view');

    var todoList = new TodoList();

    var AppView = Backbone.View.extend({
        el: $('#todoapp'),
        initialize: function () {
            this.input = this.$('#new-todo');

            this.listenTo(todoList, 'add', this.addOne);
            this.listenTo(todoList, 'reset', this.addAll);
            todoList.fetch();
        },
        events: {
            'keypress #new-todo': 'createTodoOnEnter'
        },
        createTodoOnEnter: function (event) {
            if (event.keyCode != 13 || !this.input.val().trim()) {
                return;
            }
            todoList.create(this.newAttributes());
            this.input.val('');
        },
        addOne: function (todo) {
            var view = new TodoView({model: todo});
            this.$('#todo-list').append(view.render().el);
        },
        addAll: function () {
            this.$('#todo-list').html('');
            todoList.each(this.addOne, this);
        },
        newAttributes: function newAttributes() {
            return {
                title: this.input.val().trim(),
                completed: false
            }
        }
    });

    module.exports = AppView;
});
