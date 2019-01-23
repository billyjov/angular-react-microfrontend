import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';

import { TaskCounterService } from './core/task-counter.service';
import { Task } from './tasks/shared/models/task.model';

@Component({
  selector: 'app-ng-todolist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {

  @Output() ngAllTasksEmitter = new EventEmitter<Task[]>();

  constructor(private taskCounterService: TaskCounterService) { }

  ngOnInit() {
    this.taskCounterService.allTasksObservable.subscribe(tasks => {
      this.ngAllTasksEmitter.emit(tasks);
    });
  }
}
