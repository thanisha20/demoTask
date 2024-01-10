import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1dComponent } from './module1d.component';

describe('Module1dComponent', () => {
  let component: Module1dComponent;
  let fixture: ComponentFixture<Module1dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module1dComponent]
    });
    fixture = TestBed.createComponent(Module1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
