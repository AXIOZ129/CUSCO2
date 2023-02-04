import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCodeComponent } from './editar-code.component';

describe('EditarCodeComponent', () => {
  let component: EditarCodeComponent;
  let fixture: ComponentFixture<EditarCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
