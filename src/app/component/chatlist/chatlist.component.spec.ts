import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlistComponent } from './chatlist.component';

describe('ChatlistComponent', () => {
  let component: ChatlistComponent;
  let fixture: ComponentFixture<ChatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlistComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
