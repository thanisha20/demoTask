import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ZComponent } from './module2-z.component';

describe('Module2ZComponent', () => {
  let component: Module2ZComponent;
  let fixture: ComponentFixture<Module2ZComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module2ZComponent]
    });
    fixture = TestBed.createComponent(Module2ZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
