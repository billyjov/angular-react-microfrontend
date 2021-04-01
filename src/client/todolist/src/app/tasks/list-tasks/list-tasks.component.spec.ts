import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListTasksComponent } from './list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListTasksComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
