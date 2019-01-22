import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Task } from '../tasks/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskCounterService {

  private allTaskSubject = new BehaviorSubject<Task[]>([]);
  public allTasksObservable = this.allTaskSubject.asObservable();

  constructor() { }

  public emitAllTasks(tasks: Task[]): void {
    this.allTaskSubject.next(tasks);
  }
}
