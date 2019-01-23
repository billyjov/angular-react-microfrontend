import { TestBed } from '@angular/core/testing';

import { TaskCounterService } from './task-counter.service';

describe('TaskCounterService', () => {
  let service: TaskCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TaskCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllTaskSubject() should get all subcribed subject', (done) => {
    service.getAllTaskSubject().subscribe((result) => {
      expect(result).toEqual([]);
      done();
    });
  });


});
