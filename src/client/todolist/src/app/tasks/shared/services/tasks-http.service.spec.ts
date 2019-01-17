import { TestBed } from '@angular/core/testing';

import { TasksHttpService } from './tasks-http.service';

describe('TasksHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksHttpService = TestBed.get(TasksHttpService);
    expect(service).toBeTruthy();
  });
});
