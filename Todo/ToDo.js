var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todolist is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        }
        else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
 addTodo: function(todoText) {
   this.todos.push({
    todoText: todoText,
    completed: false
   });
   this.displayTodos();
 },
 changeTodo: function(position, todoText) {
   this.todos[position].todoText = todoText;
   this.displayTodos(); 
 },
 deleteTodo: function(position){
   this.todos.splice(position, 1);
   this.displayTodos();
 },
 toggleCompleted: function(position) {
   this.todos[position].completed = !this.todos[position].completed;
   this.displayTodos();
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
    
  this.displayTodos();
 }
};


var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoInput = document.getElementById('js-add-todo');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('js-change-todo-position-input');
    var changeTodoTextInput = document.getElementById('js-change-todo-text-input');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('js-delete-todo-position-input');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('js-toggle-completed-position-input');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
    
};