import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1bComponent } from './module1b.component';

describe('Module1bComponent', () => {
  let component: Module1bComponent;
  let fixture: ComponentFixture<Module1bComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module1bComponent]
    });
    fixture = TestBed.createComponent(Module1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
