import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';

  addTodo(newTodoLabel: string){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };

    this.todos.push(newTodo);
  }

  clickTodo(todo){
    this.todos = this.todos.filter(
      t => t.label !== todo.label
    );
  }

  changeDone(todo){
    if(todo.done){
      todo.done = false;
    }
    else{
      todo.done = true;
    }
  }
  
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3
    },
    {
      label: 'Bring Water',
      done: true,
      priority: 4
    },
    {
      label: 'Bring Book',
      done: false,
      priority: 1
    }
  ];
}
