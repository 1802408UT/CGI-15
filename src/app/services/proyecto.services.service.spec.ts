import { TestBed } from '@angular/core/testing';

import { ProyectoServicesService } from './proyecto.services.service';

describe('ProyectoServicesService', () => {
  let service: ProyectoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
