import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEntradaComponent } from './historial-entrada.component';

describe('HistorialEntradaComponent', () => {
  let component: HistorialEntradaComponent;
  let fixture: ComponentFixture<HistorialEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
