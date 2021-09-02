import { Component, ViewEncapsulation, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TaskObserverService } from './core/task-observer/task-observer.service';
import { Task } from './tasks/shared/models/task.model';

@Component({
  selector: 'app-ng-todolist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // A better way will be ShadowDOM encapsulation.
  // Keep calm and wait :-)
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnDestroy {

  @Output() ngAllTasksEmitter = new EventEmitter<Task[]>();

  private subscriptions: Subscription = new Subscription();

  constructor(private taskObserverService: TaskObserverService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.taskObserverService.getAllTaskSubject().subscribe(tasks => {
      this.ngAllTasksEmitter.emit(tasks);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
