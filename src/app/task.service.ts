import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://127.0.0.1:3333/api/todoList/');
  }
}
