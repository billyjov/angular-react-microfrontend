import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {

  @Output() ngAllTasksEmitter = new EventEmitter<Task[]>();

  constructor(private taskObserverService: TaskObserverService) { }

  ngOnInit() {
    this.taskObserverService.getAllTaskSubject().subscribe(tasks => {
      this.ngAllTasksEmitter.emit(tasks);
    });
  }
}
