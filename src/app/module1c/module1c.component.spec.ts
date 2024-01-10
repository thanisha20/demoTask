import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1cComponent } from './module1c.component';

describe('Module1cComponent', () => {
  let component: Module1cComponent;
  let fixture: ComponentFixture<Module1cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module1cComponent]
    });
    fixture = TestBed.createComponent(Module1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
