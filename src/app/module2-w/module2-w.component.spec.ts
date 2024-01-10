import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2WComponent } from './module2-w.component';

describe('Module2WComponent', () => {
  let component: Module2WComponent;
  let fixture: ComponentFixture<Module2WComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module2WComponent]
    });
    fixture = TestBed.createComponent(Module2WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
