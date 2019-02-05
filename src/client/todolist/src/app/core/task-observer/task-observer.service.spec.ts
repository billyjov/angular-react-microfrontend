import { TestBed } from '@angular/core/testing';

import { TaskObserverService } from './task-observer.service';

describe('TaskObserverService', () => {
  let service: TaskObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TaskObserverService);
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
