import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetails1Component } from './update-details1.component';

describe('UpdateDetails1Component', () => {
  let component: UpdateDetails1Component;
  let fixture: ComponentFixture<UpdateDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
