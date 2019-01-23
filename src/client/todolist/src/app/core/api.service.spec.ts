import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  const fakeUrl = 'api/tasks';
  const fakeBaseUrl = 'http://localhost:8080/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    apiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be injected', () => {
    expect(apiService).toBeTruthy();
  });

  it('should make a GET request', () => {
    apiService.get(fakeUrl, fakeBaseUrl).subscribe();
    httpMock.expectOne({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'GET'
    });
  });

  it('should receive fake data from GET request', () => {
    const fakeResponse = {
      title: 'ipsum'
    };

    apiService.get(fakeUrl, fakeBaseUrl).subscribe((response) => {
      expect(response).toEqual(fakeResponse);
    });

    httpMock.match({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'GET'
    })[0].flush(fakeResponse);
  });

  it('should make a POST request', () => {
    const fakeBody = [{
      title: 'I travel to Jaunde',
      dueDate: '2019-01-01',
      done: false
    }];
    apiService.post(fakeUrl, fakeBody, fakeBaseUrl).subscribe();
    httpMock.expectOne({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'POST'
    });
  });

  it('should send data using a POST request', () => {
    const fakeBody = {
      title: 'I go to my parents',
      dueDate: '2019-01-12',
      done: false
    };
    apiService.post(fakeUrl, fakeBody, fakeBaseUrl).subscribe((response) => {
      expect(response).toEqual(fakeBody);
    });

    httpMock.match({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'POST'
    })[0].flush(fakeBody);
  });

  it('should make a PUT request', () => {
    const fakeBody = {
      title: 'I sleep',
      dueDate: '2019-01-23',
      done: false
    };
    apiService.put(fakeUrl, fakeBody, fakeBaseUrl).subscribe();
    httpMock.expectOne({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'PUT'
    });
  });

  it('should update data using a PUT request', () => {
    const fakeBody = {
      title: 'I travel to Douala',
      dueDate: '2019-01-31',
      done: false
    };
    const updatedObject = {
      title: 'I travel to Jaunde',
      dueDate: '2019-01-01',
      done: true
    };
    apiService.put(fakeUrl, fakeBody, fakeBaseUrl).subscribe((response) => {
      expect(response).toEqual(updatedObject);
    });
    httpMock.match({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'PUT'
    })[0].flush(updatedObject);
  });

  it('should make a DELETE request', () => {
    apiService.delete(fakeUrl, fakeBaseUrl).subscribe();
    httpMock.expectOne({
      url: `${fakeBaseUrl}${fakeUrl}`,
      method: 'DELETE'
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

});
