import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Task } from 'src/app/tasks/shared/models/task.model';
import { TasksHttpService } from 'src/app/tasks/shared/services/tasks-http.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  public taskForm: FormGroup;
  public isEditMode: boolean;
  public isSubmitted: boolean;
  private datePipe: DatePipe = new DatePipe('en-US');

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
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return today;
  }

  public get controls() {
    return this.taskForm.controls;
  }

  private addTask(): void {
    this.taskForm.value.dueDate = this.datePipe.transform(this.taskForm.value.dueDate, 'yyyy-MM-dd');
    const newTask: Task = this.taskForm.value;

    this.tasksHttpService.createTask(newTask).subscribe((task: Task) => {
      if (task) {
        this.updateTaskList();
      }
    });
  }

  private updateTask(): void {
    this.taskForm.value.dueDate = this.datePipe.transform(this.taskForm.value.dueDate, 'yyyy-MM-dd');
    this.tasksHttpService.updateTask(this.taskForm.value).subscribe((updatedTask: Task) => {
      if (updatedTask) {
        this.updateTaskList();
      }
    });
    this.isEditMode = false;
  }

  private updateTaskList(): void {
    this.tasksHttpService.retrieveAllTasks();
    this.taskForm.reset({ dueDate: [this.getActualDate()] });
  }

  private buildTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      dueDate: [this.getActualDate()]
    });
  }
}
