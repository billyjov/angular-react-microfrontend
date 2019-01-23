import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddTasksComponent } from './add-tasks.component';

describe('AddTasksComponent', () => {
  let component: AddTasksComponent;
  let fixture: ComponentFixture<AddTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTasksComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form if form is empty', () => {
    expect(component.taskForm.valid).toBeFalsy();
  });

  it('form should check if task title is valid', () => {
    const taskTitle = component.taskForm.controls['title'];
    expect(taskTitle.valid).toBeFalsy();
    taskTitle.setValue('');
    expect(taskTitle.valid).toBeFalsy();
    taskTitle.setValue('I need to the market');
    expect(taskTitle.valid).toBeTruthy();
  });

  it('#controls() should return all form contols', () => {
    expect(component.controls).toBe(component.taskForm.controls);
  });

  it('should add task item if form is submitted', () => {
    const title = 'Buy a car';
    const dueDate = new Date('2019-01-23');
    expect(component.taskForm.valid).toBeFalsy();

    component.taskForm.controls['title'].setValue(title);
    component.taskForm.controls['dueDate'].setValue(dueDate);

    expect(component.taskForm.valid).toBeTruthy();

    component.isEditMode = false;
    component.submitTaskForm();
    expect(component.isSubmitted).toBeFalsy();

    component.isEditMode = true;
    component.submitTaskForm();
    expect(component.isEditMode).toBeFalsy();

    component.taskForm.reset();
    component.submitTaskForm();
    expect(component.taskForm.invalid).toBeTruthy();
  });
});
