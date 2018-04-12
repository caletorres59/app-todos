import { TestBed, inject } from '@angular/core/testing';

import { ServiceTodosService } from './service-todos.service';

describe('ServiceTodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTodosService]
    });
  });

  it('should be created', inject([ServiceTodosService], (service: ServiceTodosService) => {
    expect(service).toBeTruthy();
  }));
});
