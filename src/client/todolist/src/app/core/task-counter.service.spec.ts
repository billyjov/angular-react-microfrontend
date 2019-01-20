import { TestBed } from '@angular/core/testing';

import { TaskCounterService } from './task-counter.service';

describe('TaskCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskCounterService = TestBed.get(TaskCounterService);
    expect(service).toBeTruthy();
  });
});
