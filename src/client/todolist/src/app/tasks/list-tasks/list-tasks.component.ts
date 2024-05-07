import { DatePipe } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Observable, Subscription } from "rxjs";

import { TaskObserverService } from "src/app/core/task-observer/task-observer.service";
import { Task } from "src/app/tasks/shared/models/task.model";
import { TasksHttpService } from "src/app/tasks/shared/services/tasks-http.service";

@Component({
  selector: "app-list-tasks",
  templateUrl: "./list-tasks.component.html",
  styleUrls: ["./list-tasks.component.scss"],
})
export class ListTasksComponent implements OnInit, OnDestroy {
  public tasks: Task[];
  public tasks$: Observable<Task[]>;
  private subscriptions: Subscription = new Subscription();

  @Input()
  public taskForm: FormGroup;

  constructor(
    private tasksHttpService: TasksHttpService,
    private taskObserverService: TaskObserverService
  ) {}

  ngOnInit() {
    this.tasksHttpService.retrieveAllTasks();
    this.initTaskLists();
    this.tasks$ = this.tasksHttpService.getAllTasks()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public editTask(task: Task): void {
    const datePipe = new DatePipe("en-US");
    const formatedDueDate = datePipe.transform(task.dueDate, "yyyy-MM-dd");
    this.taskForm.setValue({
      id: task.id,
      title: task.title,
      dueDate: formatedDueDate,
    });
    this.tasksHttpService.isEditMode.next(true);
  }

  public removeTask(task: Task): void {
    this.subscriptions.add(
      this.tasksHttpService.deleteTask(task).subscribe((response: Task) => {
        if (response) {
          this.tasksHttpService.retrieveAllTasks();
        }
      })
    );
  }

  public markAsDone(isChecked, task: Task): void {
    task.done = isChecked.target.checked;
    this.subscriptions.add(
      this.tasksHttpService.updateTask(task).subscribe((response: Task) => {
        if (response) {
          this.tasksHttpService.retrieveAllTasks();
        }
      })
    );
  }

  public isEmptyTasks(): boolean {
    return this.tasks.length === 0;
  }

  private initTaskLists(): void {
    this.subscriptions.add(
      this.tasksHttpService.getAllTasks().subscribe((allTasks: Task[]) => {
        this.tasks = allTasks;
        this.taskObserverService.emitAllTasks(allTasks);
      })
    );
  }
}
