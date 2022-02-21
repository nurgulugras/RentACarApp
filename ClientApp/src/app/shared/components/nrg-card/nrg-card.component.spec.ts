/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NrgCardComponent } from './nrg-card.component';

describe('NrgCardComponent', () => {
  let component: NrgCardComponent;
  let fixture: ComponentFixture<NrgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
