import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from 'src/app/tasks/shared/models/task.model';
import { ApiService } from 'src/app/core/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  private taskSubject: BehaviorSubject<Task[]>;
  private editModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService) {
    this.taskSubject = new BehaviorSubject<Task[]>([]);
  }

  public get isEditMode(): BehaviorSubject<boolean> {
    return this.editModeSubject;
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
    return this.apiService.post('/api/tasks', task);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.apiService.put(`/api/tasks/${task.id}`, task);
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.apiService.delete(`/api/tasks/${task.id}`);
  }
}
