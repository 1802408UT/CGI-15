import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActividadesComponent } from './detalles-actividades.component';

describe('DetallesActividadesComponent', () => {
  let component: DetallesActividadesComponent;
  let fixture: ComponentFixture<DetallesActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
