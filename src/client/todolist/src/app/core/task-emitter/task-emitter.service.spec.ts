import { TestBed } from '@angular/core/testing';

import { TaskEmitterService } from './task-emitter.service';

describe('TaskEmitterService', () => {
  let service: TaskEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TaskEmitterService);
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
