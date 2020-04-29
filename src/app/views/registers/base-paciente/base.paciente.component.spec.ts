import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePacienteComponent } from './base.paciente.component';

describe('SocietyComponent', () => {
  let component: BasePacienteComponent;
  let fixture: ComponentFixture<BasePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
