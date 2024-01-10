import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2XComponent } from './module2-x.component';

describe('Module2XComponent', () => {
  let component: Module2XComponent;
  let fixture: ComponentFixture<Module2XComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module2XComponent]
    });
    fixture = TestBed.createComponent(Module2XComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
