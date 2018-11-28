import {Component, OnInit} from "@angular/core";

export class Todo {
  desc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  todo: Todo = new Todo();
  todos: Todo[] = [];

  save(todo: Todo) {
    this.todos.push(todo);
    this.todo = new Todo();
    this.todos = Object.assign([], this.todos);
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
