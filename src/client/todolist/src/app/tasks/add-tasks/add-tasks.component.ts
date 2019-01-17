import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Task } from '../shared/models/task.model';
import { TasksHttpService } from '../shared/services/tasks-http.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  public taskForm: FormGroup;

  @Input()
  public isEditMode: boolean;
  public isSubmitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private tasksHttpService: TasksHttpService
  ) { }

  ngOnInit() {
    this.buildTaskForm();
  }

  public submitTaskForm(): void {
    this.isSubmitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    this.isEditMode ? this.updateTask() : this.addTask();
    this.isSubmitted = false;
  }
  public get controls() {
    return this.taskForm.controls;
  }
  private addTask(): void {
    const newTask: Task = this.taskForm.value;

    this.tasksHttpService.createTask(newTask).subscribe((task: Task) => {
      if (task) {
        this.updateTaskList();
      }
    });
  }

  private updateTask(): void {
    this.tasksHttpService.updateTask(this.taskForm.value).subscribe((updatedTask: Task) => {
      if (updatedTask) {
        this.updateTaskList();
      }
    });
    this.isEditMode = false;
  }

  private updateTaskList(): void {
    this.tasksHttpService.retrieveAllTasks();
    this.taskForm.reset();
  }

  private buildTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      dueDate: ['']
    });
  }
}
