import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarCodeComponent } from './cambiar-code.component';

describe('CambiarCodeComponent', () => {
  let component: CambiarCodeComponent;
  let fixture: ComponentFixture<CambiarCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
