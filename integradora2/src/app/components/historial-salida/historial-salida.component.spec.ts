import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialSalidaComponent } from './historial-salida.component';

describe('HistorialSalidaComponent', () => {
  let component: HistorialSalidaComponent;
  let fixture: ComponentFixture<HistorialSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
