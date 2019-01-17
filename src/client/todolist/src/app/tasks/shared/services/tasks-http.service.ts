import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../models/task.model';
import { ApiService } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  private taskSubject: BehaviorSubject<Task[]>;

  constructor(private apiService: ApiService) {
    this.taskSubject = new BehaviorSubject<Task[]>([]);
  }

  public retrieveAllTasks(): void {
    this.apiService.get('/api/tasks').subscribe((tasks: Task[]) => {
      this.taskSubject.next(tasks);
    });
  }

  public getAllTasks(): BehaviorSubject<Task[]> {
    return this.taskSubject;
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.apiService.get(`/api/tasks/${taskId}`);
  }

  public createTask(task: Task): Observable<Task> {
    console.log('task got: ', task);
    return this.apiService.post('/api/tasks', task);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.apiService.put(`/api/tasks/${task.id}`, task);
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.apiService.delete(`/api/tasks/${task.id}`);
  }
}
