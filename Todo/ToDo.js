var todoList = {
  todos: [],
 addTodo: function(todoText) {
   this.todos.push({
    todoText: todoText,
    completed: false
   });
 },
 changeTodo: function(position, todoText) {
   this.todos[position].todoText = todoText;
 },
 deleteTodo: function(position){
   this.todos.splice(position, 1);
 },
 toggleCompleted: function(position) {
   this.todos[position].completed = !this.todos[position].completed;
 },
 toggleAll: function() {
   var totalTodos = this.todos.length;
   var completedTodos = 0;

   for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
   }
   if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
   } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
   }
 }
};


var handlers = {
  addTodo: function() {
    var addTodoInput = document.getElementById('js-add-todo');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('js-change-todo-position-input');
    var changeTodoTextInput = document.getElementById('js-change-todo-text-input');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('js-delete-todo-position-input');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('js-toggle-completed-position-input');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      if (todoList.todos[i].completed === true) {
        todoLi.textContent = "(x)" + todoList.todos[i].todoText;
      }
      else {
        todoLi.textContent = "( )" + todoList.todos[i].todoText;
      }
      todoLi.id = i;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    return deleteButton;
  }
};
