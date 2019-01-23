import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TasksHttpService } from './tasks-http.service';

describe('TasksHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: TasksHttpService = TestBed.get(TasksHttpService);
    expect(service).toBeTruthy();
  });
});
