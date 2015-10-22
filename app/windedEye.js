define(function(require, exports, module) {

    var $ = require('jquery');
    var Backbone = require('backbone');
    var LocalStorage = require('localStorage');

    var TodoList = require('collections/todos');
    var TodoView = require('views/todo-view');
    var Router = require('routers/todo-routes');

    var todoList = new TodoList();

    var AppView = Backbone.View.extend({
        el: $('#todoapp'),
        initialize: function () {
            this.params = {};
            this.input = this.$('#new-todo');

            this.router = new Router({app: this});

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
 //           todoList.each(this.addOne, this);
            // filter todo item list
            switch(this.params.filter){
                case 'pending':
                    _.each(todoList.remaining(), this.addOne);
                    break;
                case 'completed':
                    _.each(todoList.completed(), this.addOne);
                    break;
                default:
                    todoList.each(this.addOne, this);
                    break;
            }
        },
        newAttributes: function newAttributes() {
            return {
                title: this.input.val().trim(),
                completed: false
            }
        },
        showView: function appViewShowView(target, options) {
            switch (target) {
                case 'todoList':
                    if (!!options && !!options.params) {
                        this.params = options.params;
                    }
                    todoList.trigger('reset');
            }
        }
    });

    module.exports = AppView;
});
