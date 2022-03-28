import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

import { TaskService } from '../task.service';

import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  selectedTask?: Task;

  constructor(private taskService: TaskService) {}

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
