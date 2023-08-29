import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMaterialesComponent } from './detalles-materiales.component';

describe('DetallesMaterialesComponent', () => {
  let component: DetallesMaterialesComponent;
  let fixture: ComponentFixture<DetallesMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
