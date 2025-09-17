import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { title: '', done: false };
  updateTodos: Todo = { title: '', done: false };
  editingId: number | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data) => (this.todos = data));
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo).subscribe(() => {
      this.newTodo = { title: '', done: false };
      this.loadTodos();
    });
  }

  startEdit(todo: Todo) {
    this.updateTodos = { ...todo };
    this.editingId = todo.id ?? null;
  }

  cancelEdit() {
    this.editingId = null;
    this.updateTodos = { title: '', done: false };
  }

  updateTodo() {
    this.todoService.updateTodo(this.updateTodos).subscribe(() => {
      this.cancelEdit();
      this.loadTodos();
    });
  }

  toggleDone(todo: Todo) {
    console.log('Updating todo:', todo);
    this.todoService.updateTodo(todo).subscribe();
  }
  get sortedTodos(): Todo[] {
    return this.todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  }


  deleteTodo(id: number | undefined): void {
    if (id === undefined) return;
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }
}
