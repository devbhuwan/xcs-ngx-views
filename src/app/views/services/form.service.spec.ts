import {async, TestBed} from '@angular/core/testing';

import {FormService} from './form.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Injector} from '@angular/core';

fdescribe('FormService', () => {
  let formService: FormService;
  let injector: Injector;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports:
        [HttpClientTestingModule],
      providers:
        [FormService]
    });
    formService = injector.get(FormService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should not immediately connect to the server', () => {
    httpMock.expectNone({});
  });

  describe('when fetching all stuff', () => {
    it('should make a GET request', async(() => {
      formService.loadForm(`entryForm.json`);
      const req = httpMock.expectOne({method: 'GET', url: `./assets/forms/entryForm.json`});
      req.flush([]);
    }));
  });

});
