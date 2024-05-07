import { Injectable } from '@angular/core';

import { BehaviorSubject ,Subject, Observable } from 'rxjs';

import { Task } from 'src/app/tasks/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskObserverService {

  private allTasksSubject = new Subject<Task[]>();
  constructor() { }

  public emitAllTasks(tasks: Task[]): void {
    this.allTasksSubject.next(tasks);
  }

  public getAllTaskSubject(): Observable<Task[]> {
    return this.allTasksSubject.asObservable();
  }
}
