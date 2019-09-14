import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSimulatorComponent } from './car-simulator.component';

describe('CarSimulatorComponent', () => {
  let component: CarSimulatorComponent;
  let fixture: ComponentFixture<CarSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
