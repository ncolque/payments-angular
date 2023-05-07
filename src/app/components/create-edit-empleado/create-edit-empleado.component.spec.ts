import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEmpleadoComponent } from './create-edit-empleado.component';

describe('CreateEditEmpleadoComponent', () => {
  let component: CreateEditEmpleadoComponent;
  let fixture: ComponentFixture<CreateEditEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
