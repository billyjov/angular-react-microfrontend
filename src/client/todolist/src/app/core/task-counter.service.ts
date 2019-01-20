import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Task } from '../tasks/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskCounterService {

  private doneTasksSubject = new BehaviorSubject<Task[]>([]);
  public doneTasksObservable = this.doneTasksSubject.asObservable();

  constructor() { }

  public updateDoneTasks(doneTasks: Task[]): void {
    this.doneTasksSubject.next(doneTasks);
  }
}
