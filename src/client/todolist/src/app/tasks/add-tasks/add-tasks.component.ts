import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Task } from '../shared/models/task.model';
import { TasksHttpService } from '../shared/services/tasks-http.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  public taskForm: FormGroup;
  public isEditMode: boolean;
  public isSubmitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private tasksHttpService: TasksHttpService
  ) { }

  ngOnInit() {
    this.buildTaskForm();
    this.tasksHttpService.isEditMode.subscribe((value: boolean) => {
      this.isEditMode = value;
    });
  }

  public submitTaskForm(): void {
    this.isSubmitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    this.isEditMode ? this.updateTask() : this.addTask();
    this.isSubmitted = false;
  }

  public getActualDate(): string {
    const datePipe = new DatePipe('en-US');
    const today = datePipe.transform(new Date(), 'yyyy-MM-dd');
    return today;
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
      dueDate: [this.getActualDate()]
    });
  }
}
