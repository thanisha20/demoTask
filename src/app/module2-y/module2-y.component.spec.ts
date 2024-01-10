import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2YComponent } from './module2-y.component';

describe('Module2YComponent', () => {
  let component: Module2YComponent;
  let fixture: ComponentFixture<Module2YComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module2YComponent]
    });
    fixture = TestBed.createComponent(Module2YComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
