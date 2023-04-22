import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEdituserComponent } from './is-edituser.component';

describe('IsEdituserComponent', () => {
  let component: IsEdituserComponent;
  let fixture: ComponentFixture<IsEdituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsEdituserComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsEdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
