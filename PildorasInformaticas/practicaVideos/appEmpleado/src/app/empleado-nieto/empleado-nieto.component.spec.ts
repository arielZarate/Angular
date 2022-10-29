import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoNietoComponent } from './empleado-nieto.component';

describe('EmpleadoNietoComponent', () => {
  let component: EmpleadoNietoComponent;
  let fixture: ComponentFixture<EmpleadoNietoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoNietoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
